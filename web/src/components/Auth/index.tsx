import github from "../../assets/github.png";

export function Auth() {
  return (
    <button
      className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] 
      rounded-md hover:bg-zinc-700 xs:max-h-[20px] xs:max-w-[20px] "
    >
      <img
        className="rounded-md hover:bg-zinc-700"
        src={github}
        alt="imagem do GitHub"
      />
      <span>Logar com GitHub</span>
    </button>
  );
}
