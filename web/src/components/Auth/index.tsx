import { useNavigate } from "react-router-dom";
import github from "../../assets/github.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";

export function Auth() {
  const navigate = useNavigate();

  function handleGitHubOAuth() {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/widget");
      })
      .catch((error) => {});
  }

  return (
    <>
      <button
        className="relative items-center justify-center hover:bg-zinc-600 
      rounded-md xs:max-h-[35px] xs:max-w-[30px] w-[calc(100vw-2rem)] md:w-auto "
        onClick={handleGitHubOAuth}
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
