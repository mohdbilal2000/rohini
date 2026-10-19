import type { Metadata } from "next";
import { site } from "./site";
import type { Product } from "./catalog";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-kundan-bride.jpg",
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: image }], type: "website", siteName: site.name, locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON; escape "<" so content can't close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function productLd(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: [absoluteUrl(p.image)],
    sku: p.slug,
    brand: { "@type": "Brand", name: site.name },
    material: p.material,
    color: p.finish,
    url: absoluteUrl(`/products/${p.slug}`),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${p.slug}`),
      priceCurrency: site.currency,
      price: p.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: site.name },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "IN" },
        shippingRate: { "@type": "MonetaryAmount", value: p.price >= site.freeShippingThreshold ? 0 : site.shippingFee, currency: site.currency },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: site.returnDays,
      },
    },
  };
}
