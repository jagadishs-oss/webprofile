import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog/hello-world", destination: "/blog", permanent: true },
      { source: "/blog/why-i-built-this-site", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
