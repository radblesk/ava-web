import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import footerLogo from "@/public/wide-dark.svg";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("homepage");

  return (
    <footer className="relative mx-auto flex max-w-md flex-col items-center gap-8 px-6 pb-12 text-center text-xs text-zinc-600 dark:text-zinc-400">
      <SectionHeader text={t("headers.footer")} />
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
      <div className="flex items-center gap-2">
        <p>{t("footer.reserved")}</p>
        <div className="h-3 w-px -skew-12 bg-orange-600 dark:bg-orange-500"></div>
        <a
          href="/privacy"
          className="transition-colors hover:text-orange-600 dark:hover:text-orange-500"
        >
          {t("footer.privacyPolicyLink")}
        </a>
        <div className="h-3 w-px -skew-12 bg-orange-600 dark:bg-orange-500"></div>
        <a
          href="/release-notes"
          className="transition-colors hover:text-orange-600 dark:hover:text-orange-500"
        >
          {t("footer.releaseNotesLink")}
        </a>
      </div>
    </footer>
  );
}
