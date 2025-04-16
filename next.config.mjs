import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // devIndicators: false,
};

export default withMDX(nextConfig);
