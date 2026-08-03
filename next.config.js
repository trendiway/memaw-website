/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the two lines below ONLY if the site will be at https://username.github.io/repo-name
  // (leave them commented if you’re using a custom domain)
  // basePath: '/YOUR_REPO_NAME',
  // assetPrefix: '/YOUR_REPO_NAME/',
}

module.exports = nextConfig
