import { User } from "firebase/auth";
import { useState } from "react";

export function Avatar() {
  const [user, setUser] = useState<User | null>(null);

  const getGithubUser = localStorage.getItem(`github-user`);
  if (getGithubUser) {
    const githubMember = JSON.parse(getGithubUser) as User;

    setUser(githubMember);
  }

  return (
    <a
      className="w-[48px] h-[48x] min-w-[48x] min-h-[48x] 
      max-w-[48x] max-h-[48x] rounded-full bg-zinc-700
      xs:max-h-[50px] xs:max-w-[50px] "
      href={"http://github.com/nilsonsierota"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-[48px] h-[48x] min-w-[48x] min-h-[48x] 
      max-w-[48x] max-h-[48x] rounded-full bg-zinc-700
      xs:max-h-[50px] xs:max-w-[50px]"
        src={user?.photoURL ? user.photoURL : ""}
      />
    </a>
  );
}
