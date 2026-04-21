import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for AWS Amplify SSR deployment
  output: "standalone",
  // Forward env vars into the standalone server bundle (Amplify SSR Lambda workaround)
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY ?? "",
  },
};

export default nextConfig;
