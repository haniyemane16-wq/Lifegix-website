import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lifegix.nl";
  return [
    { url: `${base}/`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/roi`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/bestellen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`,   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/voorwaarden`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
