/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // Let Vercel handle output optimization by default
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
