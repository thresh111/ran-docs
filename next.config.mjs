import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // devIndicators: false,

  images: {
    remotePatterns: [
      new URL('https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/**'),
      new URL('https://pic1.imgdb.cn/**'),
    ],
  },
};

export default withMDX(nextConfig);
