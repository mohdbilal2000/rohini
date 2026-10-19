import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CollectionView from "@/components/CollectionView";
import { collections, getCollection, productsIn } from "@/lib/catalog";
import { JsonLd, absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = getCollection(slug);
  if (!c) return {};
  return pageMetadata({ title: c.title, description: c.description, path: `/collections/${c.slug}`, image: c.image });
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const c = getCollection(slug);
  if (!c) notFound();
  const list = productsIn(c.slug);

  return (
    <>
      <section className="banner">
        <Image src={c.image} alt="" fill priority sizes="100vw" style={{ objectPosition: "center 30%" }} />
        <div className="banner__text">
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </div>
      </section>
      <Breadcrumbs items={[{ name: c.title, path: `/collections/${c.slug}` }]} />
      <CollectionView products={list} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: c.title,
          description: c.description,
          url: absoluteUrl(`/collections/${c.slug}`),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/products/${p.slug}`), name: p.name })),
          },
        }}
      />
    </>
  );
}
