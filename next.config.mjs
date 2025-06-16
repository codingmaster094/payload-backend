import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can keep other valid config options here
  experimental: {
    // Only include valid experimental flags recognized by Next.js
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
