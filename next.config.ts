import type { NextConfig } from "next";
import redirects from "./content/redirects.json";

const nextConfig: NextConfig = {
  trailingSlash: true,
  serverExternalPackages: ["mongodb"],
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
