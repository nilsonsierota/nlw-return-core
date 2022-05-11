import { useState } from "react";
import { Auth } from "./components/Auth";
import Widget from "./components/Widget";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export function App() {
  const provider = new GithubAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });

  signInWithRedirect(auth, provider);

  return <>{auth.currentUser ? <Widget /> : null}</>;
}
