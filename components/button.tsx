import Image from "next/image";

// Types
type Props = {
  title: string;
  url: string;
  symbol: string;
  alt: string;
  disabled?: boolean;
};

export default function Button({
  title,
  url,
  symbol,
  alt,
  disabled = false,
}: Props) {
  return (
    <a
      className={`group border-foreground/10 bg-foreground/75 text-background flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border px-5 transition will-change-transform md:w-39.5 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-sky-400 hover:text-black motion-safe:hover:scale-105 dark:hover:bg-sky-600 dark:hover:text-white"}`}
      href={disabled ? undefined : url}
      aria-disabled={disabled}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={`invert transition dark:invert-0 ${disabled ? "opacity-50" : "group-hover:invert-0 dark:group-hover:invert-100"}`}
        src={symbol}
        alt={alt}
        width={16}
        height={16}
      />
      {title}
    </a>
  );
}
