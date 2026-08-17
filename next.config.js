/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
    
  assetPrefix: '/memaw-website/',
}

module.exports = nextConfig
