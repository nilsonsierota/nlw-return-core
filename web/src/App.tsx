import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Auth } from "./components/Auth";
import Widget from "./components/Widget";

export function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getGithubUser = localStorage.getItem(`github-user`);

    if (getGithubUser) {
      const githubMember = JSON.parse(getGithubUser) as User;

      if (githubMember) {
        setUser(githubMember);
      }
    }
  }, []);

  return <>{user ? <Widget /> : <Auth />}</>;
}
