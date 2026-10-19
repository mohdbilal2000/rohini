import Image from "next/image";
import Link from "next/link";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import { ProductGrid } from "@/components/ProductCard";
import { categoryLinks, products } from "@/lib/catalog";
import { articles, faqs } from "@/lib/content";
import { JsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const slides: Slide[] = [
  { image: "/images/hero-kundan-bride.jpg", alt: "Woman wearing a kundan necklace, maang tikka and earrings", href: "/collections/bridal", label: "Shop bridal jewellery", position: "center 25%" },
  { image: "/images/hero-pastel-layered.jpg", alt: "Woman in a pastel saree wearing a layered pearl necklace", href: "/collections/necklace-sets", label: "Shop necklace sets", position: "center 30%" },
  { image: "/images/hero-nath.jpg", alt: "Close-up of a bride wearing a nath, choker and maang tikka", href: "/collections/festive-edit", label: "Shop the festive edit", position: "center 40%" },
  { image: "/images/hero-kundan-choker.jpg", alt: "Woman wearing a stone necklace and long earrings", href: "/collections/earrings", label: "Shop earrings", position: "center 30%" },
];

export default function Home() {
  const newIn = products.filter((p) => p.isNew).slice(0, 8);
  const best = products.filter((p) => p.bestseller).slice(0, 8);
  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="feature">
        <p className="eyebrow">Astavita curates</p>
        <h1 className="feature__title">
          <em>Festive</em> Edit
        </h1>
        <p className="feature__sub">Kundan, temple and stone jewellery at festive prices.</p>
        <Link href="/collections/festive-edit" className="btn btn--outline">
          Up to 20% off
        </Link>
      </section>

      <section className="section wrap">
        <h2 className="section__title">Shop by category</h2>
        <div className="cats">
          {categoryLinks.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="cat">
              <span className="cat__img">
                <Image src={c.image} alt="" fill sizes="(max-width: 700px) 45vw, 22vw" />
              </span>
              <span className="cat__name">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="section__head">
          <h2 className="section__title">New in</h2>
          <Link href="/collections/all" className="link-underline">
            View all
          </Link>
        </div>
        <ProductGrid products={newIn} />
      </section>

      <section className="split">
        <Link href="/collections/bridal" className="split__item">
          <Image src="/images/life-bridal-red.jpg" alt="Bride in red wearing a gold necklace set" fill sizes="(max-width: 700px) 100vw, 50vw" style={{ objectPosition: "center 25%" }} />
          <span className="split__label">
            <span className="eyebrow">For the wedding</span>
            <span className="split__title">Bridal</span>
          </span>
        </Link>
        <Link href="/collections/earrings" className="split__item">
          <Image src="/images/life-chandbali.jpg" alt="Close-up of a gold chandbali earring with pearls" fill sizes="(max-width: 700px) 100vw, 50vw" />
          <span className="split__label">
            <span className="eyebrow">Everyday</span>
            <span className="split__title">Jhumkas and drops</span>
          </span>
        </Link>
      </section>

      <section className="section wrap">
        <div className="section__head">
          <h2 className="section__title">Bestsellers</h2>
          <Link href="/collections/all" className="link-underline">
            View all
          </Link>
        </div>
        <ProductGrid products={best} />
      </section>

      <section className="promise">
        <div className="wrap promise__grid">
          <div>
            <h3>Free shipping</h3>
            <p>On orders above ₹{site.freeShippingThreshold.toLocaleString("en-IN")} in India</p>
          </div>
          <div>
            <h3>Cash on delivery</h3>
            <p>Available on most pin codes</p>
          </div>
          <div>
            <h3>Easy returns</h3>
            <p>Within {site.returnDays} days of delivery</p>
          </div>
          <div>
            <h3>Ships worldwide</h3>
            <p>Insured and tracked</p>
          </div>
        </div>
      </section>

      <section className="section wrap two-col">
        <div>
          <h2 className="section__title">Questions, answered</h2>
          <dl className="faq">
            {homeFaqs.map((f) => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
          <Link href="/faq" className="link-underline">
            All FAQs
          </Link>
        </div>
        <div>
          <h2 className="section__title">From the journal</h2>
          <ul className="posts">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/journal/${a.slug}`}>
                  <span className="posts__img">
                    <Image src={a.image} alt="" fill sizes="120px" />
                  </span>
                  <span>
                    <strong>{a.title}</strong>
                    <span className="muted">{a.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </>
  );
}
