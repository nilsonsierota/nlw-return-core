import { SignOut } from "phosphor-react";
import { Avatar } from "../Avatar";
import { ButtonGitHub } from "../ButtonGitHub";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const auth = getAuth();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <header
      className="bg-zinc-800 h-[72px] w-full shadow-lg 
      flex flex-row items-center px-40 justify-center space-x-24 
      xs:space-x-4 xs:px-1 sticky top-0"
    >
      <Logo />
      <NavBar />
      <ButtonGitHub />
      <SignOut
        className="min-w-[32px] min-h-[32px] 
      max-w-[32px] max-h-[32px] rounded-md hover:bg-zinc-700
      xs:max-h-[10px] xs:max-w-[10px]"
        onClick={handleSignOut}
      />
      <Avatar />
    </header>
  );
}
