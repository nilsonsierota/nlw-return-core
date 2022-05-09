import { SignOut } from "phosphor-react";
import { Avatar } from "../Avatar";
import { ButtonGitHub } from "../ButtonGitHub";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export function Header() {
  return (
    <header
      className="bg-zinc-800 h-18 w-full shadow-lg 
      flex flex-row items-center px-40 justify-center space-x-24"
    >
      <Logo />
      <NavBar />
      <ButtonGitHub />
      <SignOut className="w-8 h-8 min-w-8 min-h-8 rounded-md hover:bg-zinc-700" />
      <Avatar src="http://github.com/nilsonsierota.png" />
    </header>
  );
}
