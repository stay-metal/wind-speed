/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable type checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint checks during build
    ignoreDuringBuilds: true,
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

export default nextConfig;
