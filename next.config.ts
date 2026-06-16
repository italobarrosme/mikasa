import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Builds a self-contained server bundle for the Docker runtime image.
  output: 'standalone',
  images: {
    remotePatterns: [
      // Hygraph (GraphCMS) asset CDN.
      { protocol: 'https', hostname: '**.graphassets.com' },
      { protocol: 'https', hostname: 'media.graphassets.com' },
    ],
  },
}

export default nextConfig
