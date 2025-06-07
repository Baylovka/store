import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isGithubPages ? '/store' : '',
  assetPrefix: isGithubPages ? '/store/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
