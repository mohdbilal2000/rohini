"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Shield, Truck, Heart } from "lucide-react";
import { categories } from "@/data/categories";
import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import CategoryCard from "@/components/ui/CategoryCard";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

const trustBadges = [
  {
    icon: Award,
    title: "GI Certified",
    description: "Authenticated origin guarantee",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Handpicked by experts",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description: "Secure international delivery",
  },
  {
    icon: Heart,
    title: "Artisan Direct",
    description: "Supporting craftsmen families",
  },
];

const craftStories = [
  {
    title: "The Art of Pashmina",
    description:
      "A journey through Kashmir's 600-year-old tradition of weaving the world's finest wool.",
    image:
      "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&q=80",
    href: "/stories/art-of-pashmina",
  },
  {
    title: "Kannauj: India's Perfume Capital",
    description:
      "Discover the ancient art of attar making, where flowers become timeless fragrances.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    href: "/stories/kannauj-perfumes",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>✨ New Collection 2026</span>
            <h1 className={styles.heroTitle}>
              Where Tradition
              <br />
              <span className={styles.heroTitleAccent}>Meets Elegance</span>
            </h1>
            <p className={styles.heroDescription}>
              Discover exquisite handcrafted jewellery, luxurious Pashmina shawls,
              elegant ethnic wear, and captivating fragrances. Each piece celebrates
              India&apos;s rich heritage and master craftsmanship.
            </p>
            <div className={styles.heroCtas}>
              <Button href="/category/jewellery" size="lg">
                Shop Jewellery
              </Button>
              <Button href="/category/pashmina-shawls" variant="outline" size="lg">
                Explore Pashmina
              </Button>
            </div>
            <div className={styles.heroTrust}>
              <div className={styles.heroTrustItem}>
                <span className={styles.heroTrustIcon}>🛡️</span>
                <span>Authenticity Guaranteed</span>
              </div>
              <div className={styles.heroTrustItem}>
                <span className={styles.heroTrustIcon}>✈️</span>
                <span>Free Worldwide Shipping</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageMain}>
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Elegant handcrafted Indian jewellery"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className={styles.heroImageSecondary}>
              <Image
                src="https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&q=80"
                alt="Luxurious Pashmina shawl"
                fill
                className={styles.heroImage}
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className={styles.heroImageTertiary}>
              <Image
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80"
                alt="Premium perfume collection"
                fill
                className={styles.heroImage}
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className={styles.heroFloatingCard}>
              <span className={styles.floatingCardIcon}>⭐</span>
              <span className={styles.floatingCardText}>4.9/5 Rating</span>
              <span className={styles.floatingCardSubtext}>2,000+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className={styles.trustSection}>
        <div className={`container ${styles.trustContainer}`}>
          {trustBadges.map((badge, index) => (
            <div key={index} className={styles.trustBadge}>
              <badge.icon size={28} className={styles.trustIcon} aria-hidden="true" />
              <div>
                <h3 className={styles.trustTitle}>{badge.title}</h3>
                <p className={styles.trustDescription}>{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className={styles.categoriesHeader}>
            <span className={styles.categoriesBadge}>🌟 Shop by Category</span>
            <h2 className={styles.categoriesTitle}>Explore Our Collections</h2>
            <p className={styles.categoriesDescription}>
              From precious jewellery to luxurious fragrances, discover
              India&apos;s finest handcrafted treasures curated for the discerning connoisseur.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className={styles.bentoGrid}>
            {/* Large Featured Card - Jewellery */}
            <div className={styles.bentoLarge}>
              <CategoryCard
                category={categories[0]}
                size="large"
                priority
              />
            </div>

            {/* Stacked Cards - Pashmina & Women's */}
            <div className={styles.bentoStack}>
              <CategoryCard category={categories[1]} />
              <CategoryCard category={categories[2]} />
            </div>

            {/* Medium Cards Row - Men's, Oils, Perfumes */}
            <div className={styles.bentoRow}>
              <CategoryCard category={categories[3]} />
              <CategoryCard category={categories[4]} />
              <CategoryCard category={categories[5]} />
            </div>
          </div>

          {/* View All Link */}
          <div className={styles.categoriesFooter}>
            <Button href="/collections" variant="outline" size="lg">
              View All Collections <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured Pieces</h2>
              <p className={styles.sectionDescription}>
                Curated selection of our most sought-after artisan creations.
              </p>
            </div>
            <Button href="/products" variant="ghost">
              View All <ArrowRight size={16} />
            </Button>
          </div>
          <div className={styles.productsGrid}>
            {featuredProducts.slice(0, 4).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Banner */}
      <section className={styles.storyBanner}>
        <div className={`container ${styles.storyBannerContainer}`}>
          <div className={styles.storyBannerContent}>
            <span className={styles.storyBannerLabel}>Our Heritage</span>
            <h2 className={styles.storyBannerTitle}>
              Preserving Traditions, Empowering Artisans
            </h2>
            <p className={styles.storyBannerText}>
              Every purchase supports the families of skilled artisans who have
              preserved these time-honored techniques for generations. We work
              directly with over 200 craftsmen across India.
            </p>
            <Button href="/artisans" variant="secondary">
              Meet Our Artisans
            </Button>
          </div>
          <div className={styles.storyBannerStats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>200+</span>
              <span className={styles.statLabel}>Artisan Partners</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>15</span>
              <span className={styles.statLabel}>Indian States</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Craft Traditions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Stories */}
      <section className={`section ${styles.storiesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Craft Stories</h2>
              <p className={styles.sectionDescription}>
                Discover the history and artistry behind our collections.
              </p>
            </div>
            <Button href="/blog" variant="ghost">
              All Stories <ArrowRight size={16} />
            </Button>
          </div>
          <div className={styles.storiesGrid}>
            {craftStories.map((story, index) => (
              <article key={index} className={styles.storyCard}>
                <Link href={story.href} className={styles.storyImageLink}>
                  <div className={styles.storyImageWrapper}>
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className={styles.storyImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
                <div className={styles.storyContent}>
                  <h3 className={styles.storyTitle}>
                    <Link href={story.href}>{story.title}</Link>
                  </h3>
                  <p className={styles.storyDescription}>{story.description}</p>
                  <Link href={story.href} className={styles.storyLink}>
                    Read Story <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2 className={styles.ctaTitle}>Join the Heritage Community</h2>
          <p className={styles.ctaDescription}>
            Be the first to discover new collections, artisan stories, and
            exclusive offers. No spam, just beautiful craftsmanship.
          </p>
          <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Enter your email"
              className={styles.ctaInput}
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
