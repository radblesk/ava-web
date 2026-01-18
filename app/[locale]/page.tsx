import Button from "@/components/button";
import CompatibilityCard from "@/components/compatibilityCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Images Imports
import iconDark from "@/public/icon-dark.webp";
import iconLight from "@/public/icon-light.webp";
import footerLogo from "@/public/wide-dark.svg";

export default function Home() {
  // Translations
  const t = useTranslations("homepage");

  // Compatibility Cards Data
  const compatibilityCards = [
    {
      title: "iOS*",
      atLaunch: true,
    },
    {
      title: "iPadOS*",
      atLaunch: true,
    },
    {
      title: "watchOS*",
    },
    {
      title: "macOS*",
    },
    {
      title: "visionOS*",
    },
  ];

  // Buttons Data
  const buttons = t.raw("buttons");
  const buttonKeys = Object.keys(buttons);

  return (
    <div className="flex min-h-screen items-center justify-center overflow-y-auto dark:bg-linear-to-b dark:from-gray-950 dark:to-zinc-950">
      <main className="relative flex h-svh min-h-fit w-full max-w-4xl flex-col items-center justify-between gap-10 px-10 py-12 sm:justify-center sm:gap-20 sm:px-16 lg:py-22">
        {/* Animated Ava Icon */}
        <Image
          className="z-10 block h-24 w-auto rounded-3xl shadow-2xl shadow-sky-800/50 motion-safe:animate-[bounce_3s_ease-in-out_infinite] dark:hidden"
          src={iconLight}
          alt="Ava Icon Light"
          priority
        />
        <Image
          className="animate-2 z-10 hidden h-24 w-auto rounded-3xl shadow-2xl shadow-sky-500/30 motion-safe:animate-[bounce_3s_ease-in-out_infinite] dark:block"
          src={iconDark}
          alt="Ava Icon Dark"
          priority
        />

        {/* Hero */}
        <div className="z-10 flex flex-col items-center gap-6 text-center drop-shadow-lg drop-shadow-black/20">
          <h1 className="flex max-w-xs gap-2 text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            {t.rich("hero.headline", {
              super: (chunks) => (
                <span className="text-base text-orange-500">{chunks}</span>
              ),
            })}
          </h1>
          <p className="max-w-md text-lg leading-6 text-balance text-zinc-600 sm:leading-7 dark:text-zinc-400">
            {t.rich("hero.subheadline", {
              highlighted: (chunks) => (
                <span className="font-medium text-zinc-950 dark:text-zinc-50">
                  {chunks}
                </span>
              ),
            })}
          </p>
        </div>

        {/* Compatibility Cards */}
        <div className="flex flex-col gap-2">
          <p className="font-medium tracking-tight text-zinc-600 dark:text-zinc-400">
            {t("compatibility.headline")}
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {compatibilityCards.map((card, i) => (
              <CompatibilityCard
                key={i}
                os={card.title}
                atLaunch={card.atLaunch}
                index={i}
              />
            ))}
          </div>

          <p className="pt-2 text-xs text-zinc-600 dark:text-zinc-400">
            *{t("compatibility.footer")}
          </p>
        </div>

        {/* Notice */}
        <p className="max-w-md text-center text-sm text-zinc-600 dark:text-zinc-400">
          {t.rich("notice", {
            bold: (chunks) => (
              <span className="font-medium text-zinc-950 dark:text-zinc-50">
                {chunks}
              </span>
            ),
            highlighted: (chunks) => (
              <span className="font-medium text-orange-500">{chunks}</span>
            ),
          })}
        </p>

        {/* Buttons */}
        <div className="z-10 flex max-w-sm flex-wrap gap-4 text-base font-medium sm:max-w-lg">
          {buttonKeys.map((key) => (
            <Button
              key={key}
              title={t(`buttons.${key}.title`)}
              url={t(`buttons.${key}.link`)}
              symbol={t(`buttons.${key}.symbol`)}
              alt={t(`buttons.${key}.alt`)}
              disabled={t(`buttons.${key}.disabled`) === "true"}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="bg-foreground h-px w-full mask-x-from-0"></div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-8 text-center text-xs text-zinc-600 dark:text-zinc-400">
          <p>{t("footer.reserved")}</p>

          <p>{t("footer.appleTrademark")}</p>

          <div className="flex items-center justify-center">
            <p className="text-sm">&copy; {new Date().getFullYear()}</p>
            <a
              href="https://www.radobley.sk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="ml-3 h-4 w-auto border-l border-zinc-600 pl-3 dark:border-zinc-400 dark:invert"
                src={footerLogo}
                alt="Radoslav Bley wide logo"
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
