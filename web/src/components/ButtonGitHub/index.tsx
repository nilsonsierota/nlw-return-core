import github from "../../assets/github.png";

export function ButtonGitHub() {
  return (
    <a
      className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] 
      rounded-md hover:bg-zinc-700 xs:max-h-[20px] xs:max-w-[20px] "
      href="https://github.com/nilsonsierota"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="rounded-md hover:bg-zinc-700"
        src={github}
        alt="imagem do GitHub"
      />
    </a>
  );
}
