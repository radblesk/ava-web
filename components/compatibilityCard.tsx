import { useTranslations } from "next-intl";
import Image from "next/image";

// Type
type Props = {
  symbol: string;
  alt: string;
  size?: number;
  onLaunch?: boolean;
};

export default function CompatibilityCard({
  symbol,
  alt,
  size = 16,
  onLaunch = true,
}: Props) {
  const t = useTranslations("homepage.compatibility");
  return (
    <div className={`dark:bg-zinc-900 bg-zinc-200 border text-zinc-600 dark:text-zinc-400 border-zinc-500/10 p-2 aspect-square flex justify-between items-center rounded-2xl will-change-transform hover:-translate-y-1 transition flex-col h-24 w-auto ${onLaunch ? "hover:border-sky-500/25" : "hover:border-orange-500/25"}`}>
      <p className="text-[8px] font-semibold sm:text-xs uppercase">
        {onLaunch ? t("atLaunch") : t("later")}
      </p>

      <Image
        className={`dark:invert z-10 ${onLaunch ? "opacity-50" : "opacity-10"}`}
        src={`/compatibility/${symbol}.svg`}
        alt={alt}
        width={size}
        height={size}
        priority
      />
    </div>
  );
}
