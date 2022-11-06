/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrties() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:555/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
