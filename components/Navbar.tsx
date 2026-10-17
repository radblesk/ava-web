import Image from "next/image";
import { useTranslations } from "next-intl";

// Images Imports
import rbLogo from "@/public/monogram-dark.svg";
import discordLogo from "@/public/discord.svg";

export default function Navbar() {
  const t = useTranslations("homepage");

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-center border-b border-zinc-200 bg-zinc-100/75 py-4 backdrop-blur-lg backdrop-saturate-150 dark:border-zinc-800 dark:bg-zinc-950/75">
      <div className="relative flex h-full w-full max-w-7xl items-center justify-between">
        <a href="/" className="flex h-full w-fit items-center gap-3">
          <Image
            preload={true}
            src={rbLogo}
            alt="Radoslav Bley Logo"
            width={74}
            height={54}
            sizes="74px"
            className="h-full w-auto lg:top-6 lg:left-1/4 dark:invert"
          />
          <div className="bg-foreground h-full w-px -skew-12"></div>
          <h1 className="text-xl font-medium sm:text-2xl">Ava for Reddit</h1>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg/Yh3E2YYrKu"
            title="Join Ava on Discord"
            className="mx-2 hover:opacity-75 md:mx-5"
          >
            <Image
              priority={true}
              src={discordLogo}
              alt="Discord Logo"
              width={126.644}
              height={96}
              sizes="126px"
              className="aspect-auto h-4 w-auto dark:invert"
            />
          </a>
          <div className="relative h-1.5 w-1.5 rounded-full bg-green-600">
            <div className="motion-safe:animate-flicker absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 blur-sm"></div>
          </div>
          <p className="dark:zinc-400 text-sm text-zinc-600">
            {t("navbar.inDev")}
          </p>
        </div>
      </div>
    </nav>
  );
}
