import Link from "next/link";
import LocaleLayout from "./[locale]/layout";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <LocaleLayout params={Promise.resolve({ locale: t("locale") })}>
      <div className="relative flex h-screen max-h-[90svh] max-w-screen items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        <div className="relative flex flex-col items-center gap-10 px-16 py-24">
          <div className="relative flex h-fit flex-col items-center justify-center gap-4 text-center select-none sm:flex-row sm:text-left">
            <p className="text-5xl font-black md:text-7xl">404</p>
            <div className="h-px w-20 bg-orange-600 sm:h-14 sm:w-px dark:bg-orange-500" />
            <div className="h-fit">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {t("title")}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t("description")}
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="bg-foreground/85 text-background hover:bg-foreground/65 active:bg-foreground/65 transition-300 flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-fit"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </LocaleLayout>
  );
}
