import Button from "@/components/button";
import CompatibilityCard from "@/components/compatibilityCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("homepage");

  return (
    <div className="flex min-h-screen items-center justify-center overflow-y-auto bg-zinc-100 font-sans select-none dark:bg-zinc-950">
      <main className="relative flex h-svh min-h-fit w-full max-w-3xl flex-col items-center justify-between gap-10 px-16 py-12 sm:justify-center sm:gap-20 lg:py-32">
        <Image
          className="fixed inset-6 z-20 mix-blend-difference invert lg:top-6 lg:left-1/3"
          src="/monogram-dark.svg"
          alt="Ava logo"
          width={48}
          height={48}
          priority
        />
        <Image
          className="z-10 block dark:hidden"
          src="/icon-light.png"
          alt="Ava logo"
          width={100}
          height={100}
          priority
        />
        <Image
          className="z-10 hidden dark:block"
          src="/icon-dark.png"
          alt="Ava logo"
          width={100}
          height={100}
          priority
        />
        <div className="z-10 flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            {t("headline")}
          </h1>
          <p className="max-w-md text-lg leading-6 text-zinc-600 sm:leading-7 dark:text-zinc-400">
            {t("subheadline")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-zinc-400">{t("compatibility.headline")}</p>
          <div className="relative flex gap-2">
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

        <div className="border-foreground/20 w-full border-t"></div>

        <div className="flex flex-col items-center gap-12 text-center">
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
