import Image from "next/image";

// Media Import
import bezel from "@/public/ipad-bezel.png";
import screen from "@/public/ipadscreen.webp";
import { useTranslations } from "next-intl";

export default function FeatureBlock3() {
  const t = useTranslations("homepage.features.feature3");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-20">
      <div className="order-1 flex max-w-xl flex-col items-center gap-10 text-center sm:order-2">
        <h2 className="text-3xl font-semibold tracking-tight">
          {t("headline")}
        </h2>
        <p className="leading-8 text-zinc-600 dark:text-zinc-400">
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

      <div className="relative isolate order-2 flex">
        <Image
          loading="lazy"
          src={bezel}
          alt=""
          width={1890}
          height={1450}
          sizes="1890px"
          className="z-10 aspect-auto drop-shadow-2xl h-auto max-h-200 w-full"
        />
        <div className="absolute top-1/2 left-1/2 z-0 aspect-9/16 h-[90%] w-[92%] -translate-1/2 overflow-hidden">
          <Image
            loading="lazy"
            src={screen}
            alt="Screenshot displaying app on an iPad"
            width={1890}
            height={1450}
            sizes="1890px"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
