/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',  // 
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/styles', './node_modules/bootstrap/scss'],
    // No need for custom logger 
  },
  // ... any other existing config
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
