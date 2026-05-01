/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['swiper', 'ssr-window', 'dom7'],
  webpack: (config) => {
    config.resolve.alias['@plootus/common'] = path.resolve(
      __dirname,
      '../PlootusMonorepo/packages/common'
    );
    return config;
  },
};

module.exports = nextConfig;

