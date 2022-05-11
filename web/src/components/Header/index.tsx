import { SignOut } from "phosphor-react";
import { Avatar } from "../Avatar";
import { ButtonGitHub } from "../ButtonGitHub";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export function Header() {
  return (
    <header
      className="bg-zinc-800 h-[72px] w-full shadow-lg 
      flex flex-row items-center px-40 justify-center space-x-24 
      xs:space-x-4 xs:px-1"
    >
      <Logo />
      <NavBar />
      <ButtonGitHub />
      <SignOut
        className="min-w-[32px] min-h-[32px] 
      max-w-[32px] max-h-[32px] rounded-md hover:bg-zinc-700
      xs:max-h-[10px] xs:max-w-[10px]"
      />
      <Avatar src="http://github.com/nilsonsierota.png" />
    </header>
  );
}
