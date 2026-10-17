import Image from "next/image";

// Media Import
import bezel from "@/public/bezel-portrait.png";
import screen from "@/public/feed-screen.webp"
import { useTranslations } from "next-intl";

export default function FeatureBlock1() {
  const t = useTranslations("homepage.features.feature1");

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
          src={bezel}
          alt=""
          width={565}
          height={1152}
          sizes="(max-width: 640px) 100vw, 565px"
          className="z-10 h-[80vh] max-h-200 w-auto"
        />
        <div className="absolute top-1/2 left-1/2 z-0 aspect-9/16 h-[96%] w-[90%] -translate-1/2 overflow-hidden rounded-[6%]">
          <Image
            loading="lazy"
            src={screen}
            alt=""
            width={1320}
            height={2868}
            sizes="(max-width: 640px) 100vw, 565px"
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
}
