import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
  ],
};

export default withNextIntl(nextConfig);
