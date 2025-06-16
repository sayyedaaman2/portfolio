import type { NextConfig } from "next";
import nextPwa from 'next-pwa';
// Type for the PWA configuration
type PWAPluginConfig = {
  dest: string;
  register: boolean;
  skipWaiting: boolean;
  disable?: boolean;
  // Add other PWA config options as needed
};

const pwaConfig: PWAPluginConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
};

// Type assertion for the withPWA function
const withPWA = nextPwa as (config: PWAPluginConfig) => (nextConfig: NextConfig) => NextConfig;

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

// Compose the final config with proper typing
const configWithPWA: NextConfig = withPWA(pwaConfig)(nextConfig);

export default configWithPWA;