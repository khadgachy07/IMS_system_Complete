// next.config.ts
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    }, // Enables Turbopack bundler
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web', // Resolving react-native to react-native-web
    }

    // Mock react-native modules to avoid issues with `react-native-sqlite-storage`
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      'react-native': false, // Mock react-native to avoid module resolution issues
    }

    return config
  },
}
export default nextConfig