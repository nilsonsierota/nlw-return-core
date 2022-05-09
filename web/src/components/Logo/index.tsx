import imgLogo from "../../assets/logo.jpg";

export function Logo() {
  return (
    <button className="hover:bg-zinc-600">
      <img className="h-10 w-40 shadow-lg rounded-md flex-none" src={imgLogo} />
    </button>
  );
}
