import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import Widget from "./components/Widget";
import initializeAuthentication from "./lib/Firebase/firebase";

interface UserProps {
  name: string;
  email: string;
  image: string;
  lastSignInTime: string;
}

export function App({ name, email, image, lastSignInTime }: UserProps) {
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const [error, setError] = useState({});

  initializeAuthentication();
  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const { displayName, email, photoURL, metadata } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          image: photoURL,
          lastSignInTime: metadata?.lastSignInTime,
        };
        localStorage.setItem(`github-user`, JSON.stringify(loggedInUser));
        window.location.reload();
      })
      .catch((err) => {
        const errorCollection = {
          errCode: err.code,
          errMessage: err.message,
        };
        console.log(errorCollection.errCode);
        setError(errorCollection);
      });
  };

  useEffect(() => {
    const getGithubUser = localStorage.getItem(`github-user`);

    if (getGithubUser) {
      const githubMember = JSON.parse(getGithubUser) as UserProps;

      if (githubMember) {
        setUser(githubMember);
      }
    }
  }, []);

  return (
    <>
      {user?.name ? (
        <Widget />
      ) : (
        <button
          className="flex items-center justify-center hover:bg-zinc-600 
      rounded-md xs:max-h-[35px] xs:max-w-[30px] w-[calc(100vw-2rem)] md:w-auto "
          onClick={handleGithubSignIn}
        >
          <i className="fab fa-github rounded-md hover:bg-zinc-700" />
          <span>Logar com GitHub</span>
        </button>
      )}
    </>
  );
}
