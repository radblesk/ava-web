import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

// Types
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Helpers
const ogLocaleMap: Record<string, string> = {
  en: "en_US",
  sk: "sk_SK",
  cs: "cs_CZ",
  es: "es_ES",
  de: "de_DE",
  fr: "fr_FR",
  pt: "pt_BR",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR",
  ru: "ru_RU",
};

// MARK: - Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Detect locale from params and get translations for metadata
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    // Base
    metadataBase: new URL("https://ava.radobley.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "cs-CZ": "/cs",
        "de-DE": "/de",
        "en-US": "/en",
        "es-ES": "/es",
        "fr-FR": "/fr",
        "ja-JP": "/ja",
        "ko-KR": "/ko",
        "pt-BR": "/pt",
        "ru-RU": "/ru",
        "sk-SK": "/sk",
        "zh-CN": "/zh",
      },
    },
    title: {
      template: "%s | Ava",
      default: t("title"),
    },
    description: t("description"),
    generator: "Next.js",
    applicationName: "Ava for Reddit",
    referrer: "origin-when-cross-origin",
    keywords: t("keywords").split(","),
    authors: [{ name: "Radoslav Bley", url: "https://www.radobley.sk/" }],
    creator: "Radoslav Bley",
    publisher: "Vercel",
    category: "Mobile Application",

    // Format Detection
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    // Open Graph
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://ava.radobley.com",
      siteName: t("title"),
      images: [
        {
          url: "https://ava.radobley.com/opengraph-image.png", // Must be an absolute URL
          width: 1800,
          height: 1600,
        },
      ],
      locale: ogLocaleMap[locale] || "en_US",
      type: "website",
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://ava.radobley.com/twitter-image.jpg"], // Must be an absolute URL
    },

    // Verification
    verification: {
      google: "google",
      other: {
        me: ["mailto:support@radobley.com"],
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Ava for Reddit",
    operatingSystem: "iOS",
    applicationCategory: "SocialNetworkingApplication",
    description: t("description"),
    image: "https://ava.radobley.com/icon.png",
    url: `https://ava.radobley.com/${locale}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Radoslav Bley",
    },
    sameAs: ["https://www.reddit.com/r/AvaApp"],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
