import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    Truck,
    Shield,
    RotateCcw,
    Award,
    ChevronDown,
    Star,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import ProductGallery from "@/components/ui/ProductGallery";
import { products } from "@/data/products";
import styles from "./page.module.css";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

// Generate metadata dynamically
export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return { title: "Product Not Found" };
    }

    return {
        title: product.name,
        description: `Shop ${product.name} handcrafted by ${product.artisan || "master artisans"}. ${product.category} from Heritage Artisans. Price: ₹${product.price.toLocaleString("en-IN")}`,
        openGraph: {
            title: `${product.name} | Heritage Artisans`,
            description: `Handcrafted ${product.category.toLowerCase()} by ${product.artisan || "master artisans"}.`,
            images: [{ url: product.image, alt: product.name }],
            type: "website",
        },
    };
}

// Sample product details
const productDetails = {
    material: "100% Pure Pashmina (Cashmere)",
    technique: "Hand-woven Kani weave",
    origin: "Kashmir, India",
    dimensions: "200 cm x 70 cm",
    weight: "200 grams",
    careInstructions: "Dry clean only. Store with moth repellent.",
};

const features = [
    { icon: Truck, text: "Free shipping on orders above ₹10,000" },
    { icon: Shield, text: "Certificate of authenticity included" },
    { icon: RotateCcw, text: "15-day easy returns" },
    { icon: Award, text: "GI certified product" },
];

const faqs = [
    {
        question: "Is this product authentic?",
        answer:
            "Yes, all our products come with a GI (Geographical Indication) certificate and a certificate of authenticity. Each piece is handcrafted by verified artisans.",
    },
    {
        question: "How do I care for my Pashmina?",
        answer:
            "Pashmina shawls should be dry cleaned only. Store them in a breathable cotton bag with moth repellent. Avoid direct sunlight and moisture.",
    },
    {
        question: "What is the delivery time?",
        answer:
            "Domestic orders within India are delivered in 5-7 business days. International orders take 10-15 business days depending on the destination.",
    },
];

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    const discount = product.originalPrice
        ? Math.round(
            ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
        : 0;

    // For demo, using same image multiple times
    const productImages = [product.image, product.image, product.image];

    const breadcrumbs = [
        { label: "Home", href: "/" },
        {
            label: product.category,
            href: `/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`,
        },
        { label: product.name },
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: `Handcrafted ${product.category.toLowerCase()} by ${product.artisan || "master artisans"}.`,
        brand: {
            "@type": "Brand",
            name: "Heritage Artisans",
        },
        offers: {
            "@type": "Offer",
            url: `https://heritageartisans.com/product/${slug}`,
            priceCurrency: "INR",
            price: product.price,
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Heritage Artisans",
            },
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "24",
        },
    };

    return (
        <>
            <div className="container">
                <Breadcrumbs items={breadcrumbs} />
            </div>

            <section className={`section ${styles.productSection}`}>
                <div className="container">
                    <div className={styles.productGrid}>
                        {/* Gallery */}
                        <div className={styles.gallery}>
                            <ProductGallery images={productImages} productName={product.name} />
                        </div>

                        {/* Product Info */}
                        <div className={styles.info}>
                            {/* Badges */}
                            <div className={styles.badges}>
                                {product.isNew && <span className={styles.badgeNew}>New</span>}
                                {product.isBestseller && (
                                    <span className={styles.badgeBestseller}>Bestseller</span>
                                )}
                            </div>

                            <p className={styles.category}>{product.category}</p>
                            <h1 className={styles.title}>{product.name}</h1>

                            {product.artisan && (
                                <p className={styles.artisan}>
                                    Handcrafted by <strong>{product.artisan}</strong>
                                </p>
                            )}

                            {/* Rating */}
                            <div className={styles.rating}>
                                <div className={styles.stars}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={16}
                                            className={star <= 4 ? styles.starFilled : styles.starEmpty}
                                        />
                                    ))}
                                </div>
                                <span className={styles.ratingText}>4.8 (24 reviews)</span>
                            </div>

                            {/* Price */}
                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>
                                    ₹{product.price.toLocaleString("en-IN")}
                                </span>
                                {product.originalPrice && (
                                    <>
                                        <span className={styles.originalPrice}>
                                            ₹{product.originalPrice.toLocaleString("en-IN")}
                                        </span>
                                        <span className={styles.discount}>{discount}% off</span>
                                    </>
                                )}
                            </div>

                            <p className={styles.taxNote}>Inclusive of all taxes</p>

                            {/* Add to Cart */}
                            <div className={styles.actions}>
                                <div className={styles.quantity}>
                                    <label htmlFor="quantity" className="sr-only">
                                        Quantity
                                    </label>
                                    <select id="quantity" className={styles.quantitySelect}>
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <Button size="lg" fullWidth>
                                    Add to Cart
                                </Button>
                            </div>

                            {/* Features */}
                            <div className={styles.features}>
                                {features.map((feature, index) => (
                                    <div key={index} className={styles.feature}>
                                        <feature.icon size={18} className={styles.featureIcon} />
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Product Details */}
                            <div className={styles.details}>
                                <h2 className={styles.detailsTitle}>Product Details</h2>
                                <dl className={styles.detailsList}>
                                    {Object.entries(productDetails).map(([key, value]) => (
                                        <div key={key} className={styles.detailItem}>
                                            <dt className={styles.detailLabel}>
                                                {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                                            </dt>
                                            <dd className={styles.detailValue}>{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={`section ${styles.storySection}`}>
                <div className="container">
                    <div className={styles.storyContent}>
                        <h2 className={styles.storyTitle}>The Art Behind This Piece</h2>
                        <p>
                            This exquisite {product.category.toLowerCase()} represents centuries
                            of inherited craftsmanship. Each piece is meticulously handcrafted
                            using traditional techniques passed down through generations.
                        </p>
                        <p>
                            Our artisan partners spend weeks, sometimes months, perfecting every
                            detail. From selecting the finest materials to applying intricate
                            designs, this piece embodies the dedication and skill of India&apos;s
                            master craftsmen.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className={`section ${styles.faqSection}`}>
                <div className="container">
                    <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>
                                    {faq.question}
                                    <ChevronDown size={18} className={styles.faqIcon} />
                                </summary>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            <div className={styles.stickyMobile}>
                <div className={styles.stickyPrice}>
                    <span className={styles.stickyPriceValue}>
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                        <span className={styles.stickyOriginal}>
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                    )}
                </div>
                <Button size="lg">Add to Cart</Button>
            </div>

            {/* Product Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </>
    );
}
