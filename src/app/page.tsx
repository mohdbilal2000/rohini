import Image from "next/image";
import Link from "next/link";
import FavoritesTabs from "@/components/FavoritesTabs";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import { productsIn } from "@/lib/catalog";
import { site } from "@/lib/site";

const slides: Slide[] = [
  { image: "/images/hero-kundan-bride.jpg", alt: "Woman wearing a kundan necklace, maang tikka and earrings", href: "/collections/festive-edit", eyebrow: "Astavita curates", title: "Festive", italic: "Edit", cta: "Up to 20% off", position: "center 25%" },
  { image: "/images/temple-necklace-set.jpg", alt: "Gold temple necklace with ruby studs and matching earrings", href: "/collections/necklace-sets", eyebrow: "New season", title: "Temple", italic: "Gold", cta: "Explore", position: "center" },
  { image: "/images/hero-nath.jpg", alt: "Close-up of a bride wearing a nath, choker and maang tikka", href: "/collections/bridal", eyebrow: "For the wedding", title: "Bridal", italic: "Trousseau", cta: "Explore", position: "center 40%" },
  { image: "/images/ruby-kada-bangles.jpg", alt: "Stack of gold kada bangles with ruby-red stones", href: "/collections/bangles", eyebrow: "Stack them up", title: "Ruby", italic: "Kadas", cta: "Shop bangles", position: "center" },
];

const collectionTiles = [
  { href: "/collections/necklace-sets", label: "Necklaces", image: "/images/emerald-ruby-necklace.jpg" },
  { href: "/collections/earrings", label: "Earrings", image: "/images/life-chandbali.jpg" },
  { href: "/collections/bangles", label: "Bangles", image: "/images/life-bangles-wrist.jpg" },
  { href: "/collections/rings", label: "Rings", image: "/images/solitaire-ring.jpg" },
];

const feed = ["life-choker", "life-maang-tikka", "oxidised-jhumka", "life-ring-hand", "gold-bangle-stack", "hero-pastel-layered"];

function Ornament() {
  return (
    <svg className="ornament" viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M32 6c4 8 4 14 0 20-4-6-4-12 0-20zM32 58c4-8 4-14 0-20-4 6-4 12 0 20zM6 32c8-4 14-4 20 0-6 4-12 4-20 0zM58 32c-8-4-14-4-20 0 6 4 12 4 20 0z" />
        <path d="M14 14c8 2 11 6 12 12-6-1-10-4-12-12zM50 14c-8 2-11 6-12 12 6-1 10-4 12-12zM14 50c8-2 11-6 12-12-6 1-10 4-12 12zM50 50c-8-2-11-6-12-12 6 1 10 4 12 12z" />
        <circle cx="32" cy="32" r="4" />
      </g>
    </svg>
  );
}

export default function Home() {
  const favorites = [
    { label: "Necklaces", products: productsIn("necklace-sets").slice(0, 4) },
    { label: "Earrings", products: productsIn("earrings").slice(0, 4) },
    { label: "Bangles", products: productsIn("bangles").slice(0, 4) },
    { label: "Rings", products: productsIn("rings").slice(0, 4) },
  ];

  return (
    <>
      <h1 className="sr-only">Astavita: Indian jewellery online</h1>
      <HeroSlider slides={slides} />

      <section className="band">
        <Image src="/images/life-friends-kundan.jpg" alt="" fill sizes="100vw" style={{ objectPosition: "center 30%" }} />
        <div className="band__text">
          <h2 className="display display--light">
            Inspired <em>by</em>
            <br />
            Royal Craftsmanship
          </h2>
          <Link href="/about" className="btn btn--light">
            Discover now
          </Link>
        </div>
      </section>

      <section className="block wrap">
        <h2 className="display center">View Collections</h2>
        <div className="tiles">
          {collectionTiles.map((t) => (
            <Link key={t.href} href={t.href} className="tile">
              <span className="tile__img">
                <Image src={t.image} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" />
              </span>
              <span className="tile__label">{t.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="trust">
        <div className="wrap trust__grid">
          <div>
            <Ornament />
            <p>Worldwide shipping</p>
          </div>
          <div>
            <Ornament />
            <p>Cash on delivery</p>
          </div>
          <div>
            <Ornament />
            <p>{site.returnDays}-day easy returns</p>
          </div>
        </div>
      </section>

      <section className="block wrap">
        <p className="eyebrow eyebrow--dark center">Shop</p>
        <h2 className="display center">
          <em>all</em> FAVORITES
        </h2>
        <FavoritesTabs tabs={favorites} />
      </section>

      <section className="wrap bespoke">
        <div className="bespoke__img">
          <Image src="/images/life-bridal-red.jpg" alt="Bride in red wearing a gold necklace set and maang tikka" fill sizes="(max-width: 800px) 100vw, 50vw" style={{ objectPosition: "center 25%" }} />
        </div>
        <div className="bespoke__text">
          <span className="tag-box">Bridal</span>
          <h2 className="display caps">Bridal Trousseau</h2>
          <p>Statement sets, chandbalis and kadas for the wedding, sangeet and reception. Tell us your outfit and we will help you choose.</p>
          <Link href="/contact" className="btn">
            Inquire
          </Link>
        </div>
      </section>

      <section className="band band--tall">
        <Image src="/images/gold-bib-necklace.jpg" alt="" fill sizes="100vw" />
        <div className="band__text">
          <h2 className="display display--light caps">
            Rajwadi
            <br />
            Necklaces
          </h2>
          <p>Broad bib necklaces in matte gold, with matching earrings</p>
          <Link href="/products/rajwadi-bib-necklace-set" className="btn btn--light">
            Get yours
          </Link>
        </div>
      </section>

      <section className="block wrap">
        <p className="eyebrow eyebrow--dark center">@astavita.co</p>
        <h2 className="display center">Follow our feed</h2>
        <div className="feed">
          {feed.map((f) => (
            <a key={f} href={site.instagram} target="_blank" rel="noopener" className="feed__item" aria-label="Astavita on Instagram">
              <Image src={`/images/${f}.jpg`} alt="" fill sizes="(max-width: 700px) 33vw, 16vw" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
