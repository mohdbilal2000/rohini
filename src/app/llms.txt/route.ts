import { collections, products } from "@/lib/catalog";
import { articles, faqs } from "@/lib/content";
import { formatPrice } from "@/lib/format";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

// llms.txt: a plain-text summary of the store for AI assistants and answer engines.
export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Free shipping in India above ₹${site.freeShippingThreshold}. Cash on delivery available. Returns within ${site.returnDays} days. Ships worldwide. Contact: ${site.email}.`,
    "",
    "## Collections",
    ...collections.map((c) => `- [${c.title}](${absoluteUrl(`/collections/${c.slug}`)}): ${c.description}`),
    "",
    "## Products",
    ...products.map((p) => `- [${p.name}](${absoluteUrl(`/products/${p.slug}`)}): ${formatPrice(p.price)}. ${p.material}; ${p.stones}; ${p.finish}.`),
    "",
    "## Guides",
    ...articles.map((a) => `- [${a.title}](${absoluteUrl(`/journal/${a.slug}`)}): ${a.description}`),
    "",
    "## FAQs",
    ...faqs.map((f) => `- ${f.q} ${f.a}`),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
