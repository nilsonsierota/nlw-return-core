import imgLogo from "../../assets/logo.png";

export function Logo() {
  return (
    <img
      className="hover:bg-zinc-600 min-h[40px] min-w-[160px] shadow-lg rounded-md flex-none"
      src={imgLogo}
    />
  );
}
