import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for AWS Amplify SSR deployment
  output: "standalone",
  // Forward env vars into the standalone server bundle (Amplify SSR Lambda workaround)
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY ?? "",
    AWS_REGION: process.env.AWS_REGION ?? "",
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ?? "",
    // Amplify's SSR runtime Lambda execution role is not reachable by the
    // AWS SDK credential chain, so we ship explicit IAM-user credentials.
    // Amplify reserves the "AWS_" env-var prefix, so we use KAOSMT_AWS_*
    // and pass them explicitly to the SDK in src/lib/dynamo.ts.
    KAOSMT_AWS_ACCESS_KEY_ID: process.env.KAOSMT_AWS_ACCESS_KEY_ID ?? "",
    KAOSMT_AWS_SECRET_ACCESS_KEY: process.env.KAOSMT_AWS_SECRET_ACCESS_KEY ?? "",
  },
};

export default nextConfig;
