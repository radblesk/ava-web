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
      className={`group border-foreground/10 bg-foreground/85 text-background hover:bg-foreground/65 flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-full border px-5 font-semibold transition duration-300 sm:flex-1/3 md:w-39.5 ${disabled ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      href={url}
      aria-disabled={disabled}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={`invert transition dark:invert-0 ${disabled ? "opacity-50" : ""}`}
        src={`${symbol}.svg`}
        alt={alt}
        width={16}
        height={16}
        loading="lazy"
      />
      {title}
    </a>
  );
}
