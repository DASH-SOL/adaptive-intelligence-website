/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the distDir line
  // distDir: 'build',
  
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/styles', './node_modules/bootstrap/scss'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;