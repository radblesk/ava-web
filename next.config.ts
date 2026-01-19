import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.1.19"],
  crossOrigin: "anonymous",
  generateBuildId: async () => {
    return process.env.GIT_HASH || null;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
