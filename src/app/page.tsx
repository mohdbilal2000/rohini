import Image from "next/image";
import Link from "next/link";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import StorySlider, { type Story } from "@/components/StorySlider";
import { products, productsIn } from "@/lib/catalog";

const slides: Slide[] = [
  { image: "/images/hero-kundan-bride.jpg", alt: "Woman wearing a kundan necklace, maang tikka and earrings", href: "/collections/bridal", position: "center 22%" },
  { image: "/images/hero-pastel-layered.jpg", alt: "Woman in a pastel saree wearing a layered pearl necklace", href: "/collections/necklace-sets", position: "center 28%" },
  { image: "/images/life-friends-kundan.jpg", alt: "Two women wearing kundan necklaces and maang tikkas", href: "/collections/festive-edit", position: "center 30%" },
];

const stories: Story[] = [
  { eyebrow: "Heritage", title: "Kundan", text: "Glass stones pressed into gold foil, the way Rajasthan's royal workshops set them. Chokers, long haars and matching earrings.", href: "/collections/necklace-sets", cta: "Shop", image: "/images/hero-kundan-choker.jpg", alt: "Woman wearing a stone necklace and long earrings" },
  { eyebrow: "South Indian", title: "Temple", text: "Antique gold drops and ruby-red accents, inspired by the jewellery made for temple deities.", href: "/products/temple-gold-necklace-set", cta: "Shop", image: "/images/life-saree-necklace.jpg", alt: "Woman in a red and gold saree wearing a temple necklace" },
  { eyebrow: "Everyday", title: "Jhumkas", text: "Bell-shaped earrings with pearl fringes, light enough to wear from morning to night.", href: "/collections/earrings", cta: "Shop", image: "/images/life-chandbali.jpg", alt: "Close-up of a gold chandbali earring with pearls" },
];

export default function Home() {
  const newIn = products.filter((p) => p.isNew).slice(0, 8);
  const bridal = productsIn("bridal").slice(0, 4);

  return (
    <>
      <h1 className="sr-only">Astavita: fine Indian jewellery</h1>
      <HeroSlider slides={slides} />

      <section className="strap">
        <p className="eyebrow">Kundan · Temple · Polki</p>
        <p className="strap__title">Fine Indian Jewellery</p>
      </section>

      <section className="block">
        <div className="wrap block__head">
          <div>
            <p className="eyebrow">Just in</p>
            <h2 className="title">New Arrivals</h2>
          </div>
          <Link href="/collections/all" className="text-link">
            Browse all
          </Link>
        </div>
        <div className="wrap rail">
          {newIn.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="quote">
        <blockquote>“Jewellery is how a family remembers. We make pieces worth handing down.”</blockquote>
        <p>Traditional Indian designs, made for the way you wear them today.</p>
      </section>

      <StorySlider stories={stories} />

      <section className="feature">
        <Image src="/images/life-ring-hand.jpg" alt="" fill sizes="100vw" style={{ objectPosition: "center 40%" }} />
        <div className="feature__text">
          <p className="eyebrow">Highlighting</p>
          <h2 className="title">Cocktail Rings</h2>
          <Link href="/collections/rings" className="text-link">
            Explore jewellery
          </Link>
        </div>
      </section>

      <section className="block duo wrap">
        <div className="duo__products">
          <p className="eyebrow center">For the wedding</p>
          <h2 className="title center">Bridal</h2>
          <div className="duo__grid">
            {bridal.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
        <div className="duo__img">
          <Image src="/images/life-bridal-red.jpg" alt="Bride in red wearing a gold necklace set and maang tikka" fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectPosition: "center 25%" }} />
        </div>
      </section>

      <section className="band">
        <Image src="/images/gold-bangle-stack.jpg" alt="" fill sizes="100vw" />
        <div className="band__text">
          <h2 className="title">Bangles</h2>
          <Link href="/collections/bangles" className="text-link text-link--light">
            Learn more
          </Link>
        </div>
      </section>

      <section className="touch">
        <h2 className="title">Get in touch</h2>
        <p>Looking for something for a wedding or a gift? Tell us and we will help you choose.</p>
        <Link href="/contact" className="text-link">
          Book a consultation
        </Link>
      </section>
    </>
  );
}
