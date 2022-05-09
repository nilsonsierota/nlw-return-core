type AvatarProps = {
  src: string;
};

export function Avatar({ src }: AvatarProps) {
  return <img className="w-12 h-12 rounded-full bg-zinc-700" src={src} />;
}
