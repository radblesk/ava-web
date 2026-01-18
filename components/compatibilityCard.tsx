import { useTranslations } from "next-intl";

// Type
type Props = {
  os: string;
  atLaunch?: boolean;
  index: number;
};

export default function CompatibilityCard({
  os,
  atLaunch = false,
  index,
}: Props) {
  const t = useTranslations("homepage.compatibility");
  const delay = (index * 0.5) % 3;

  return (
    <div
      className={`group hover-bg-zinc-200/70 z-10 flex aspect-square h-24 w-auto flex-col items-center rounded-2xl border border-zinc-500/10 bg-zinc-200/50 p-2 text-zinc-600 transition duration-500 will-change-transform before:absolute before:inset-0 before:z-0 before:rounded-2xl before:bg-transparent before:shadow-xl before:shadow-sky-600/0 before:transition motion-safe:hover:-translate-y-1 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-900/70 ${atLaunch ? "hover:border-sky-500/25 hover:before:shadow-sky-600/25 dark:hover:before:shadow-sky-500/20" : "hover:border-orange-500/25 hover:before:shadow-orange-600/25 dark:hover:before:shadow-orange-500/20"}`}
    >
      <p
        className={`relative text-center text-[8px] leading-3 font-semibold uppercase sm:text-[8px] ${atLaunch ? "text-sky-600 dark:text-sky-400" : "text-orange-600 dark:text-orange-500"}`}
      >
        {atLaunch ? t("atLaunch") : t("later")}
        <span
          style={{ animationDelay: `${delay}s` }}
          className={`animate-flicker absolute inset-0 text-center text-[8px] leading-3 font-semibold uppercase blur-sm sm:text-[8px] ${atLaunch ? "text-sky-600 dark:text-sky-400" : "text-orange-600 dark:text-orange-500"}`}
        >
          {atLaunch ? t("atLaunch") : t("later")}
        </span>
      </p>

      <p className="my-auto font-medium tracking-tight text-zinc-600 dark:text-zinc-400">
        {os}
      </p>
    </div>
  );
}
