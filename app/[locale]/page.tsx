/*
 * page.tsx
 * ava-dev
 *
 * Next.js
 *
 * Created by Radoslav Bley
 * Copyright © 2026 Radoslav Bley. All Rights Reserved.
 */

import { useTranslations } from "next-intl";
import Image from "next/image";

// Components Imports
import Button from "@/components/button";
import CompatibilityCard from "@/components/compatibilityCard";
import SectionHeader from "@/components/SectionHeader";
import FeatureBlock1 from "@/components/FeatureBlock1";
import FeatureBlock2 from "@/components/FeatureBlock2";

// Media Imports
import iconDark from "@/public/icon-dark.png";
import iconLight from "@/public/icon-light.png";
import footerLogo from "@/public/wide-dark.svg";
import FeatureBlock3 from "@/components/FeatureBlock3";

export default function Home() {
  // Translations
  const t = useTranslations("homepage");

  // Headers
  const headers = [
    {
      text: t("headers.features"),
    },
    {
      text: t("headers.resources"),
    },
    {
      text: t("headers.footer"),
    },
  ];

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
    <div className="relative flex min-h-screen items-center justify-center overflow-y-auto bg-radial-[at_50%_5%] from-[#D1E1EC]/45 to-zinc-100 to-70% sm:to-50% dark:from-[#00101C] dark:to-zinc-950">
      <main className="relative flex h-svh min-h-fit w-full max-w-xl flex-col items-center justify-center gap-10 px-6 py-12 sm:max-w-7xl sm:gap-20 sm:px-16 lg:py-22">
        {/* Animated Ava Icon */}
        <Image
          preload={true}
          src={iconLight}
          alt="Ava Icon Light"
          width={168}
          height={168}
          sizes="168px"
          className="z-10 block h-24 w-auto rounded-3xl shadow-2xl shadow-sky-800/50 dark:hidden"
        />
        <Image
          preload={true}
          src={iconDark}
          alt="Ava Icon Dark"
          width={168}
          height={168}
          sizes="168px"
          className="animate-2 z-10 hidden h-24 w-auto rounded-3xl shadow-2xl shadow-sky-500/30 dark:block"
        />

        {/* Hero */}
        <section className="z-10 flex max-w-xl flex-col items-center gap-6 text-center">
          <h1 className="flex gap-2 text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            {t.rich("hero.headline", {
              super: (chunks) => (
                <span className="text-base text-orange-600 dark:text-orange-500">
                  {chunks}
                </span>
              ),
            })}
          </h1>
          <p className="text-lg leading-6 text-balance text-zinc-600 sm:leading-7 dark:text-zinc-400">
            {t.rich("hero.subheadline", {
              highlighted: (chunks) => (
                <span className="font-medium text-zinc-950 dark:text-zinc-50">
                  {chunks}
                </span>
              ),
            })}
          </p>
        </section>

        {/* Compatibility Cards */}
        <section className="flex flex-col justify-center gap-6 text-center">
          <p className="font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
            {t("compatibility.headline")}
          </p>
          <div className="relative flex flex-wrap items-center justify-evenly gap-y-4 sm:gap-6">
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
        </section>

        {/* Divider */}
        <div className="bg-foreground my-16 h-px w-full mask-x-from-0"></div>

        {/* Features */}
        <section className="relative flex max-w-screen flex-wrap items-center justify-center gap-32">
          <SectionHeader text={headers[0].text ?? ""} />

          <FeatureBlock1 />
          <FeatureBlock2 />
          <FeatureBlock3 />
        </section>

        {/* Divider */}
        <div className="bg-foreground my-16 h-px w-full mask-x-from-0"></div>

        <section className="flex flex-col gap-12">
          {/* Notice */}
          <div className="relative flex w-full justify-center">
            <SectionHeader text={headers[1].text ?? ""} />

            <p className="relative max-w-md text-center text-base text-zinc-600 dark:text-zinc-400">
              {t.rich("notice", {
                bold: (chunks) => (
                  <span className="font-medium text-zinc-950 dark:text-zinc-50">
                    {chunks}
                  </span>
                ),
                highlighted: (chunks) => (
                  <span className="font-medium text-orange-600 dark:text-orange-500">
                    {chunks}
                  </span>
                ),
              })}
            </p>
          </div>

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
        </section>

        {/* Divider */}
        <div className="bg-foreground my-16 h-px w-full mask-x-from-0"></div>

        {/* Footer */}
        <footer className="relative flex max-w-md flex-col items-center gap-8 text-center text-xs text-zinc-600 dark:text-zinc-400">
          <SectionHeader text={headers[2].text ?? ""} />
          <p>{t("footer.affiliate")}</p>

          <p>{t("footer.appleTrademark")}</p>

          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">&copy; {new Date().getFullYear()}</p>
            <div className="h-4 w-px -skew-12 bg-orange-600 dark:bg-orange-500"></div>
            <a
              role="link"
              href="https://www.radobley.sk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit developer's website"
              tabIndex={0}
            >
              <Image
                loading="lazy"
                src={footerLogo}
                alt="Radoslav Bley wide logo"
                width={226}
                height={32}
                sizes="226px"
                className="h-4 w-auto dark:invert"
              />
            </a>
          </div>
          <p>{t("footer.reserved")}</p>
        </footer>
      </main>
    </div>
  );
}
