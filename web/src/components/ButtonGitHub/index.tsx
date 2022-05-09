import github from "../../assets/github.png";

export function ButtonGitHub() {
  function handleClickGitHub() {}

  return (
    <img
      className="w-8 h-8 rounded-md hover:bg-zinc-700"
      src={github}
      alt="imagem do GitHub"
      onClick={handleClickGitHub}
    />
  );
}
