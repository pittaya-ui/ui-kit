import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
  analyzerMode: "static",
  logLevel: "error",
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default withBundleAnalyzer(nextConfig);
