/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
