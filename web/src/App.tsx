import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Widget from "./components/Widget";
import initializeAuthentication from "./lib/Firebase/firebase";

export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState({});

  initializeAuthentication();
  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        localStorage.setItem(`github-user`, JSON.stringify(result.user));
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
      const githubMember = JSON.parse(getGithubUser) as User;

      if (githubMember) {
        setUser(githubMember);
      }
    }
  }, []);

  return (
    <>
      {user?.displayName ? (
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
