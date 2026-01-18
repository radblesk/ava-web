import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [
    "cs",
    "de",
    "en",
    "es",
    "fr",
    "ja",
    "ko",
    "pl",
    "pt",
    "ru",
    "sk",
    "zh",
  ],

  // Used when no locale matches
  defaultLocale: "en",
});
