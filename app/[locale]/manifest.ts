import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ava for Reddit",
    short_name: "Ava",
    description:
      "Ava is a fast, clean, and fully native Reddit client for iOS, focused on performance, privacy, and a distraction-free experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#3A7FF2",
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
