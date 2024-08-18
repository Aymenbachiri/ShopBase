import { generateSitemapXML } from "@/app/sitemap";
import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = generateSitemapXML();
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
