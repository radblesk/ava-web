import { useTranslations } from "next-intl";
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
  const t = useTranslations("homepage");
  return (
    <a
      className={`flex h-12 group w-full items-center justify-center gap-2 rounded-full border border-foreground/10 overflow-hidden bg-foreground/75 will-change-transform px-5 text-background transition md:w-39.5 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-sky-400 dark:hover:bg-sky-600 hover:scale-105 hover:text-black dark:hover:text-white"}`}
      href={disabled ? undefined : url}
      aria-disabled={disabled}
      target="_blank"
      rel="noopener noreferrer"
    >
      {disabled && (
        <p className="absolute backdrop-blur-xs bg-black/50 w-full h-full flex items-center justify-center z-20 text-white">
          {t("buttons.inDev")}
        </p>
      )}
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
