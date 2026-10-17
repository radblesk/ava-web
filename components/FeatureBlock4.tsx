import Image from "next/image";

// Media Import
import image from "@/public/duo-promo.webp";
import { useTranslations } from "next-intl";

export default function FeatureBlock4() {
  const t = useTranslations("homepage.features.feature4");

  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-y-12 text-center sm:grid-cols-2 sm:text-left">
      <div className="order-1 flex flex-col gap-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          {t("headline")}
        </h2>
        <p className="max-w-sm leading-8 text-zinc-600 dark:text-zinc-400">
          {t.rich("description", {
            highlighted: (chunks) => (
              <span className="font-medium text-zinc-950 dark:text-zinc-50">
                {chunks}
              </span>
            ),
            br: () => <br></br>,
          })}
        </p>
      </div>

      <div className="relative isolate order-2 flex drop-shadow-2xl">
        <Image
          loading="lazy"
          src={image}
          alt="iPhone Duo Promo Image"
          width={2391}
          height={1901}
          sizes="(max-width: 640px) 100vw, 565px"
          className="z-10 h-auto max-h-200 w-auto"
        />
      </div>
    </div>
  );
}
