import Image from "next/image";
import { useTranslations } from "next-intl";

// Images Imports
import rbLogo from "@/public/monogram-dark.svg";

export default function Navbar() {
  const t = useTranslations("homepage");

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-center border-b border-zinc-200 bg-zinc-100/75 py-3.5 backdrop-blur-lg backdrop-saturate-150 dark:border-zinc-800 dark:bg-zinc-950/75">
      <div className="relative flex h-full w-full max-w-7xl items-center justify-between">
        <div className="flex h-full w-fit items-center gap-3">
          <Image
            className="h-full w-auto lg:top-6 lg:left-1/4 dark:invert"
            src={rbLogo}
            alt="Radoslav Bley Logo"
            priority
          />
          <div className="bg-foreground hidden h-full w-px -skew-12 sm:block"></div>
          <h1 className="hidden text-3xl font-medium sm:block">
            Ava for Reddit
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-1.5 w-1.5 rounded-full bg-green-600">
            <div className="animate-duration-2500! absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 motion-safe:animate-ping"></div>
          </div>
          <p className="dark:zinc-400 text-sm font-extralight text-zinc-600">
            {t("navbar.inDev")}
          </p>
        </div>
      </div>
    </nav>
  );
}
