type AvatarProps = {
  src: string;
};

export function Avatar({ src }: AvatarProps) {
  return (
    <img
      className="w-[48px] h-[48x] min-w-[48x] min-h-[48x] max-w-[48x] max-h-[48x] rounded-full bg-zinc-700"
      src={src}
    />
  );
}
