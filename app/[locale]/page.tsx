import Button from "@/components/button";
import CompatibilityCard from "@/components/compatibilityCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Images Imports
import iconDark from "@/public/icon-dark.webp";
import iconLight from "@/public/icon-light.webp";
import footerLogo from "@/public/wide-dark.svg";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <div className="flex min-h-screen items-center justify-center overflow-y-auto">
      <main className="relative flex h-svh min-h-fit w-full max-w-3xl flex-col items-center justify-between gap-10 px-16 py-12 sm:justify-center sm:gap-20 lg:py-22">
        <Image
          className="z-10 block h-24 w-auto rounded-3xl shadow-2xl shadow-sky-800/50 motion-safe:animate-[bounce_3s_ease-in-out_infinite] dark:hidden"
          src={iconLight}
          alt="Ava logo"
          priority
        />
        <Image
          className="animate-2 z-10 hidden h-24 w-auto rounded-3xl shadow-2xl shadow-sky-600/30 motion-safe:animate-[bounce_3s_ease-in-out_infinite] dark:block"
          src={iconDark}
          alt="Ava logo"
          priority
        />
        <div className="z-10 flex flex-col items-center gap-6 text-center drop-shadow-lg drop-shadow-black/20">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            {t("headline")}
          </h1>
          <p className="max-w-md text-lg leading-6 text-zinc-600 sm:leading-7 dark:text-zinc-400">
            {t("subheadline")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-zinc-400">{t("compatibility.headline")}</p>
          <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <CompatibilityCard
              symbol="iphone11"
              alt="iPhone 11 symbol"
              size={30}
            />
            <CompatibilityCard
              symbol="ipadmini"
              alt="iPad Mini (5th generation) symbol"
              size={34}
            />
            <CompatibilityCard
              symbol="watch6"
              alt="Apple Watch Series 6 symbol"
              size={76}
              onLaunch={false}
            />
            <CompatibilityCard
              symbol="macbook"
              alt="Apple Watch Series 6 symbol"
              size={76}
              onLaunch={false}
            />
            <CompatibilityCard
              symbol="vision.pro"
              alt="Apple Watch Series 6 symbol"
              size={76}
              onLaunch={false}
            />
          </div>

          <p className="pt-2 text-xs text-zinc-400">
            *{t("compatibility.footer")}
          </p>
        </div>

        <div className="z-10 flex max-w-sm flex-wrap justify-center gap-4 text-base font-medium sm:max-w-lg">
          <Button
            title="TestFlight"
            url=""
            symbol="fan.svg"
            alt="TestFlight alternative logo"
            disabled={true}
          />
          <Button
            title="GitHub"
            url="https://github.com/radblesk/"
            symbol="github.svg"
            alt="GitHub logo"
          />
          <Button
            title="r/AvaApp"
            url="https://www.reddit.com/r/AvaApp"
            symbol="reddit.svg"
            alt="Reddit logo"
            disabled={true}
          />
          <Button
            title={t("buttons.developer")}
            url="https://www.radobley.sk"
            symbol="monogram-dark.svg"
            alt="Radoslav Bley logo"
          />
        </div>

        <div className="border-foreground w-full border-t mask-x-from-0"></div>

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
