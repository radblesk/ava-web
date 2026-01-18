import Image from "next/image";
import { useTranslations } from "next-intl";

// Images Imports
import rbLogo from "@/public/monogram-dark.svg";

export default function Navbar() {
  const t = useTranslations("homepage");

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-center border-b border-zinc-200 bg-zinc-100/75 py-3.5 backdrop-blur-lg sm:h-12 dark:border-zinc-800 dark:bg-zinc-950/75">
      <div className="relative flex h-full w-full max-w-7xl items-center justify-between">
        <Image
          className="h-full w-auto lg:top-6 lg:left-1/4 dark:invert"
          src={rbLogo}
          alt="Radoslav Bley logo"
          priority
        />

        <p className="dark:zinc-400 text-sm font-extralight text-zinc-600">
          {t("navbar.inDev")}
        </p>
      </div>
    </nav>
  );
}
