/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby", </sitemap.xml>; rel="sitemap", </.well-known/api-catalog>; rel="api-catalog"',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/dashboard/algorithms',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/typography',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/client-guide',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/idea-builder',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/image-studio',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
