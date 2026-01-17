import Button from "@/components/button";
import CompatibilityCard from "@/components/compatibilityCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <div className="flex min-h-screen select-none overflow-y-auto items-center justify-center bg-zinc-100 font-sans dark:bg-zinc-950">
      <main className="flex relative h-svh min-h-fit w-full max-w-3xl flex-col items-center justify-between sm:justify-center sm:gap-20 gap-10 py-12 lg:py-32 px-16">
        <Image
          className="dark:invert fixed inset-6 lg:top-6 lg:left-1/3 z-20 mix-blend-difference"
          src="/monogram-dark.svg"
          alt="Ava logo"
          width={48}
          height={48}
          priority
        />
        <Image
          className="dark:hidden block z-10"
          src="/icon-light.png"
          alt="Ava logo"
          width={100}
          height={100}
          priority
        />
        <Image
          className="dark:block hidden z-10"
          src="/icon-dark.png"
          alt="Ava logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex z-10 flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t("headline")}
          </h1>
          <p className="max-w-md text-lg leading-6 sm:leading-7 text-zinc-600 dark:text-zinc-400">
            {t("subheadline")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-zinc-400">{t("compatibility.headline")}</p>
          <div className="flex relative gap-2">
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
          </div>

          <p className="text-zinc-400 pt-2 text-xs">
            *{t("compatibility.footer")}
          </p>
        </div>

        <div className="flex z-10 justify-center flex-wrap max-w-sm sm:max-w-lg gap-4 text-base font-medium">
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
            disabled={true}
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

        <div className="w-full border-t border-foreground/20"></div>

        <div className="flex flex-col items-center text-center gap-12">
          <div className="flex gap-2">
            <p>&copy; {new Date().getFullYear()}</p>
            <a
              href="https://www.radobley.sk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/wide-dark.svg"
                alt="Next.js logo"
                width={160}
                height={50}
                priority
              />
            </a>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            {t("footer.appleTrademark")}
          </p>
        </div>
      </main>
    </div>
  );
}
