/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/system", permanent: true },
      { source: "/products/:path*", destination: "/system", permanent: true },
      { source: "/careers", destination: "/", permanent: true },
      { source: "/careers/:path*", destination: "/", permanent: true },
      {
        source: "/services/business-automation",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
