import github from "../../assets/github.png";

import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../../lib/Firebase/firebase";

export function Auth() {
  const [error, setError] = useState({});

  initializeAuthentication();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();

  function handleGithubSignIn() {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        localStorage.setItem(`github-user`, JSON.stringify(result.user));
      })
      .catch((err) => {
        const errorCollection = {
          errCode: err.code,
          errMessage: err.message,
        };
        console.log(errorCollection.errCode);
        setError(errorCollection);
      });
  }

  return (
    <>
      <button
        className="sticky bottom-20 items-center justify-center hover:bg-zinc-600 
      rounded-md xs:max-h-[35px] xs:max-w-[30px] w-[calc(100vw-2rem)] md:w-auto "
        onClick={handleGithubSignIn}
      >
        <img
          className="rounded-md hover:bg-zinc-700"
          src={github}
          alt="imagem do GitHub"
        />
        <span>Logar com GitHub</span>
      </button>
    </>
  );
}
