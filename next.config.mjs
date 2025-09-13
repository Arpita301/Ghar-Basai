// next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['plus.unsplash.com', 'images.unsplash.com'],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

