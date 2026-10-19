import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/catalog";
import { articles } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["/", "/about", "/contact", "/faq", "/shipping-returns", "/journal", "/privacy-policy", "/terms"];
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p), lastModified: now, priority: p === "/" ? 1 : 0.5 })),
    ...collections.map((c) => ({ url: absoluteUrl(`/collections/${c.slug}`), lastModified: now, priority: 0.8 })),
    ...products.map((p) => ({ url: absoluteUrl(`/products/${p.slug}`), lastModified: now, priority: 0.7, images: [absoluteUrl(p.image)] })),
    ...articles.map((a) => ({ url: absoluteUrl(`/journal/${a.slug}`), lastModified: new Date(a.date), priority: 0.6 })),
  ];
}
