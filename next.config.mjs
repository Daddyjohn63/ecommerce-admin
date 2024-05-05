/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: '127.0.0.1',
        hostname: '**.cloudinary.com',
        port: ''
        // pathname: '/ddouq4zuy/image/upload/**'
      }
    ]
  }
};

export default nextConfig;
