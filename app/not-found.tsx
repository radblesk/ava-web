import Link from "next/link";
import LocaleLayout from "./[locale]/layout";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <LocaleLayout params={Promise.resolve({ locale: t("locale") })}>
      <div className="relative flex h-svh max-h-screen w-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950 p-10">
        <div className="flex relative flex-col items-center gap-10">
          <div className="flex items-center select-none">
            <p className="text-5xl font-black md:text-7xl">404</p>
            <div className="ml-4 border-sky-600 border-l pl-4">
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
            className="bg-foreground text-background flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition will-change-transform hover:scale-105 hover:bg-sky-600 md:w-fit dark:hover:bg-sky-500"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </LocaleLayout>
  );
}
