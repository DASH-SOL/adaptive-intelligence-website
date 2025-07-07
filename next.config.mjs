/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/styles', './node_modules/bootstrap/scss'],
    // No need for custom logger 
  },
  // ... any other existing config
};

export default nextConfig;
