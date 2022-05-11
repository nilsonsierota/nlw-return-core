import github from "../../assets/github.png";

export function Auth() {
  return (
    <>
      <button
        className="relative items-center justify-center hover:bg-zinc-600 
      rounded-md xs:max-h-[35px] xs:max-w-[30px] w-[calc(100vw-2rem)] md:w-auto "
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
