import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { articles, getArticle } from "@/lib/content";
import { JsonLd, absoluteUrl, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({ title: a.title, description: a.description, path: `/journal/${a.slug}`, image: a.image });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const date = new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <Breadcrumbs items={[{ name: "Journal", path: "/journal" }, { name: a.title, path: `/journal/${a.slug}` }]} />
      <article className="wrap prose article">
        <h1>{a.title}</h1>
        <p className="muted">
          {site.name} · <time dateTime={a.date}>{date}</time>
        </p>
        <div className="article__img">
          <Image src={a.image} alt={a.imageAlt} fill priority sizes="(max-width: 760px) 100vw, 720px" />
        </div>
        <p className="lead">{a.description}</p>
        {a.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((b) => (
              <p key={b.slice(0, 40)}>{b}</p>
            ))}
          </section>
        ))}
        <p>
          <Link href="/collections/all" className="btn btn--outline">
            Shop jewellery
          </Link>
        </p>
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          image: [absoluteUrl(a.image)],
          datePublished: a.date,
          dateModified: a.date,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
          mainEntityOfPage: absoluteUrl(`/journal/${a.slug}`),
        }}
      />
    </>
  );
}
