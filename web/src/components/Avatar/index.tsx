export function Avatar() {
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
        src={"http://github.com/nilsonsierota.png"}
      />
    </a>
  );
}
