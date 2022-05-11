import imgLogo from "../../assets/logo.png";

export function Logo() {
  return (
    <a
      className="hover:bg-zinc-600 min-h[40px] min-w-[160px] 
      shadow-lg rounded-md flex-none xs:max-h-[35px] xs:max-w-[30px] "
      href="https://rocketseat.com.br"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="hover:bg-zinc-600 min-h[40px] min-w-[160px] 
      shadow-lg rounded-md flex-none xs:max-h-[35px] xs:max-w-[30px] "
        src={imgLogo}
      />
    </a>
  );
}
