// next.config.ts
import type { NextConfig } from "next";

/**
 * Configuration Next.js unifiée
 */
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.novatrix.dev',
      },
    ],
  },
  // Tu peux ajouter d'autres options ici
};

export default nextConfig;
