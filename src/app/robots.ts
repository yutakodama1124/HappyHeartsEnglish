import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: new URL(siteConfig.url).host,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
