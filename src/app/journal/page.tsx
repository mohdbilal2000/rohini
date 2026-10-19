import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { articles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Journal", description: "Guides to Indian jewellery: kundan and polki, bridal checklists and how to care for plated jewellery.", path: "/journal" });

export default function JournalPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Journal", path: "/journal" }]} />
      <header className="page-head wrap">
        <h1>Journal</h1>
        <p className="muted">Plain-language guides to choosing and caring for Indian jewellery.</p>
      </header>
      <div className="wrap journal">
        {articles.map((a, i) => (
          <Link key={a.slug} href={`/journal/${a.slug}`} className="journal__card">
            <span className="journal__img">
              <Image src={a.image} alt={a.imageAlt} fill priority={i === 0} sizes="(max-width: 700px) 100vw, 33vw" />
            </span>
            <h2>{a.title}</h2>
            <p className="muted">{a.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
