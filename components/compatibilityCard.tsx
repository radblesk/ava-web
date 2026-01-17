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
    <div
      className={`group hover-bg-zinc-200/70 z-10 flex aspect-square h-24 w-auto flex-col items-center justify-between rounded-2xl border border-zinc-500/10 bg-zinc-200/50 p-2 text-zinc-600 transition will-change-transform before:absolute before:inset-0 before:z-0 before:rounded-2xl before:bg-transparent before:shadow-xl before:shadow-sky-600/0 hover:-translate-y-1 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900/70 ${onLaunch ? "hover:border-sky-500/25 hover:before:shadow-sky-600/20" : "hover:border-orange-500/25 hover:before:shadow-orange-600/20"}`}
    >
      <p className="text-center text-[8px] leading-3 font-semibold uppercase sm:text-[8px]">
        {onLaunch ? t("atLaunch") : t("later")}
      </p>

      <Image
        className={`z-10 dark:invert ${onLaunch ? "opacity-50" : "opacity-10"}`}
        src={`/compatibility/${symbol}.svg`}
        alt={alt}
        width={size}
        height={size}
        priority
      />
    </div>
  );
}
