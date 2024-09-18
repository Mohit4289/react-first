/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/react-first',  // This should match the GitHub Pages path
    images: {
      unoptimized: true,
    },
};

export default nextConfig;
