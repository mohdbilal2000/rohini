import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToBag from "@/components/AddToBag";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ProductGrid } from "@/components/ProductCard";
import { getCollection, getProduct, products, relatedProducts } from "@/lib/catalog";
import { discountPercent, formatPrice } from "@/lib/format";
import { JsonLd, pageMetadata, productLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMetadata({
    title: p.name,
    description: `${p.name} in ${p.finish.toLowerCase()}. ${p.description} ${formatPrice(p.price)}.`,
    path: `/products/${p.slug}`,
    image: p.image,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const c = getCollection(p.collection)!;
  const off = discountPercent(p.price, p.compareAt);
  const sizes = p.collection === "bangles" ? p.size.split(",").map((s) => s.trim()) : undefined;
  const free = site.freeShippingThreshold.toLocaleString("en-IN");

  const qa = [
    { q: `What is the ${p.name} made of?`, a: `${p.material}, with ${p.stones.toLowerCase() === "none" ? "no stones" : p.stones.toLowerCase()}, in a ${p.finish.toLowerCase()} finish.` },
    { q: "When will it arrive?", a: `It is dispatched in ${site.dispatchDays} and delivered in ${site.deliveryDays}. Shipping is free in India on orders above ₹${free}.` },
    { q: "Can I return it?", a: `Yes, unused pieces in original packaging can be returned within ${site.returnDays} days of delivery.${p.collection === "earrings" ? " Earrings can only be returned if they arrive damaged." : ""}` },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: c.title, path: `/collections/${c.slug}` }, { name: p.name, path: `/products/${p.slug}` }]} />
      <article className="wrap pdp">
        <div className="pdp__media">
          <Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
        <div className="pdp__info">
          <h1>{p.name}</h1>
          <p className="pdp__price">
            {formatPrice(p.price)}
            {off > 0 && (
              <>
                <s>{formatPrice(p.compareAt!)}</s>
                <span className="pdp__off">{off}% off</span>
              </>
            )}
          </p>
          <p className="muted small">Inclusive of all taxes. Free shipping in India above ₹{free}.</p>
          <p className="pdp__desc">{p.description}</p>
          <AddToBag slug={p.slug} sizes={sizes} />
          <table className="specs">
            <tbody>
              <tr><th scope="row">Material</th><td>{p.material}</td></tr>
              <tr><th scope="row">Stones</th><td>{p.stones}</td></tr>
              <tr><th scope="row">Finish</th><td>{p.finish}</td></tr>
              <tr><th scope="row">Size</th><td>{p.size}</td></tr>
            </tbody>
          </table>
          <div className="qa">
            {qa.map((x) => (
              <details key={x.q}>
                <summary>{x.q}</summary>
                <p>{x.a}</p>
              </details>
            ))}
            <details>
              <summary>How do I care for it?</summary>
              <p>
                Keep it away from water and perfume, wipe it with a soft dry cloth and store it in its pouch. Read our{" "}
                <Link href="/journal/how-to-care-for-plated-jewellery">care guide</Link>.
              </p>
            </details>
          </div>
        </div>
      </article>

      <section className="section wrap">
        <h2 className="section__title">You may also like</h2>
        <ProductGrid products={relatedProducts(p)} />
      </section>

      <JsonLd data={productLd(p)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: qa.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
        }}
      />
    </>
  );
}
