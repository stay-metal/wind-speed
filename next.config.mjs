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
};

export default nextConfig;
