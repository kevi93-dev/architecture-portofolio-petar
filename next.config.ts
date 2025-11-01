import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Tell Next.js to output a static site
  output: "export",

  // ✅ Disable the built-in image optimizer (since static)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
