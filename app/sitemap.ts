import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ava.radobley.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      alternates: {
        languages: {
          cs: "https://ava.radobley.com/cs",
          de: "https://ava.radobley.com/de",
          en: "https://ava.radobley.com/en",
          es: "https://ava.radobley.com/es",
          fr: "https://ava.radobley.com/fr",
          ja: "https://ava.radobley.com/ja",
          ko: "https://ava.radobley.com/ko",
          pl: "https://ava.radobley.com/pl",
          pt: "https://ava.radobley.com/pt",
          ru: "https://ava.radobley.com/ru",
          sk: "https://ava.radobley.com/sk",
          zh: "https://ava.radobley.com/zh",
        },
      },
    },
  ];
}
