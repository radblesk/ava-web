import Image from "next/image";

// Image Import
import screen from "@/public/screen2.webp";
import { useTranslations } from "next-intl";

export default function FeatureBlock2() {
  const t = useTranslations("homepage.features.feature2");

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2">
      <div className="order-1 flex flex-col gap-10 sm:order-2">
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
      <Image
        src={screen}
        alt="Ava Screenshot 2"
        className="order-2 h-[80vh] w-auto sm:order-1"
      />
    </div>
  );
}
