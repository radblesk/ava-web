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
import FeatureBlock3 from "@/components/FeatureBlock3";
import testflightButtonSymbol from "@/public/fan.svg";
import Divider from "@/components/Divider";
import FeatureBlock4 from "@/components/FeatureBlock4";

// Localization import
import en from "@/localizations/en.json";

export default function Home() {
  // Translations
  const t = useTranslations("homepage");

  const keys = Object.keys(t.raw("disclaimers")) as Array<
    keyof typeof en.homepage.disclaimers
  >;

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
              dataCollectionLink: (chunks) => (
                <a href="#dataCollection" className="font-bold underline">
                  <sup>{chunks}</sup>
                </a>
              ),
            })}
          </p>
        </section>

        <a
          href="https://testflight.apple.com/join/Ua9VHj99"
          className="group flex items-center gap-x-2 rounded-full border border-sky-500/25 bg-sky-200 px-4 py-2 text-lg font-medium text-zinc-950 transition duration-500 will-change-transform before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-transparent before:shadow-lg before:shadow-sky-600/0 before:transition before:duration-500 hover:bg-sky-500 hover:text-zinc-50 hover:before:shadow-sky-600/25 motion-safe:hover:-translate-y-1 dark:bg-sky-950 dark:text-zinc-50 dark:hover:bg-sky-600 dark:hover:before:shadow-sky-500/20"
        >
          <Image
            src={testflightButtonSymbol}
            alt="Ava Icon"
            preload={true}
            width={1000}
            height={1000}
            sizes="168px"
            className="aspect-square h-5 w-auto transition duration-500 group-hover:invert dark:invert"
          />
          {t("hero.buttonTitle")}
        </a>

        {/* Compatibility Cards */}
        <section className="flex flex-col justify-center gap-6 text-center">
          <p className="font-semibold tracking-tight text-zinc-600 dark:text-zinc-400">
            {t("compatibility.headline")}
          </p>
          <div className="relative flex flex-wrap items-center justify-evenly gap-4 sm:gap-6">
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
        <Divider />

        {/* Features */}
        <section className="relative flex max-w-screen flex-wrap items-center justify-center gap-32">
          <SectionHeader text={headers[0].text ?? ""} />

          <FeatureBlock1 />
          <FeatureBlock2 />
          <FeatureBlock4 />
          <FeatureBlock3 />
        </section>

        {/* Divider */}
        <Divider />

        <section className="flex flex-col gap-12">
          {/* Notice */}
          {/*<div className="relative flex w-full justify-center">*/}
          {/*  <SectionHeader text={headers[1].text ?? ""} />*/}

          {/*  <p className="relative max-w-md text-center text-base text-zinc-600 dark:text-zinc-400">*/}
          {/*    {t.rich("notice", {*/}
          {/*      bold: (chunks) => (*/}
          {/*        <span className="font-medium text-zinc-950 dark:text-zinc-50">*/}
          {/*          {chunks}*/}
          {/*        </span>*/}
          {/*      ),*/}
          {/*      highlighted: (chunks) => (*/}
          {/*        <span className="font-medium text-orange-600 dark:text-orange-500">*/}
          {/*          {chunks}*/}
          {/*        </span>*/}
          {/*      ),*/}
          {/*    })}*/}
          {/*  </p>*/}
          {/*</div>*/}

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
        <Divider />

        {/* Disclaimer */}
        <section className="mx-auto flex w-full max-w-3xl flex-col justify-start gap-4">
          {keys.map((key) => (
            <p
              id={key}
              key={key}
              className="text-xs text-pretty text-zinc-600 dark:text-zinc-400"
            >
              {t.rich(`disclaimers.${key}`, {
                highlighted: (chunks) => (
                  <span className="font-medium text-zinc-950 dark:text-zinc-50">
                    {chunks}
                  </span>
                ),
                policy: (chunks) => (
                  // eslint-disable-next-line @next/next/no-html-link-for-pages
                  <a
                    href="/privacy"
                    className="font-bold underline hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    {chunks}
                  </a>
                ),
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
            </p>
          ))}
        </section>
      </main>
    </div>
  );
}
