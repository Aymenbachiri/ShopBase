import { MetadataRoute } from "next";

const baseUrl = "https://shop-base-eight.vercel.app";
const locales = ["en", "fr", "ar"];
const defaultLocale = "en";

const pages = [
  { url: "/", changefreq: "weekly", priority: "1.0", lastmod: "2024-08-17" },
  {
    url: "/about",
    changefreq: "weekly",
    priority: "0.8",
    lastmod: "2024-08-17",
  },
  {
    url: "/cart",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/dashboard",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/editProduct",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/login",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/products",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/register",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/sell",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
  {
    url: "/settings",
    changefreq: "weekly",
    priority: "0.7",
    lastmod: "2024-08-17",
  },
];

function generateSitemapXML(): string {
  const urlEntries = pages.map((page) => {
    const isMainPage = page.url === "/";
    const alternateLinks = [
      ...locales.map((locale) => ({
        hreflang: locale,
        href:
          locale === defaultLocale
            ? `${baseUrl}${page.url}`
            : `${baseUrl}/${locale}${page.url}`,
      })),
      ...(isMainPage
        ? [{ hreflang: "x-default", href: `${baseUrl}${page.url}` }]
        : []),
    ];

    return `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${alternateLinks
      .map(
        (link) =>
          `    <link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`
      )
      .join("\n")}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join("\n")}
</urlset>`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.lastmod),
    changeFrequency:
      page.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: parseFloat(page.priority),
  }));
}

export { generateSitemapXML };
