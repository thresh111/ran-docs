import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // devIndicators: false,

  images: {
    remotePatterns: [
      new URL('https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/**'),
    ],
  },
};

export default withMDX(nextConfig);
