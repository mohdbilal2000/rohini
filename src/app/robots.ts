import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

// Search engines and AI assistants are welcome; private pages are kept out of indexes.
export default function robots(): MetadataRoute.Robots {
  const disallow = ["/cart", "/checkout", "/search"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended"], allow: "/", disallow },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
