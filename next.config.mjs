/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "image.tmdb.org" }],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828],
    imageSizes: [16, 32, 64, 128, 159, 256, 384],
  },
  experimental: { instrumentationHook: true },
  webpack(config, { isServer }) {
    if (isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/browser", alias: false });
      } else {
        config.resolve.alias["msw/browser"] = false;
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/node", alias: false });
      } else {
        config.resolve.alias["msw/node"] = false;
      }
    }

    return config;
  },
};

export default nextConfig;

//https://www.handongryong.com/post/msw/
