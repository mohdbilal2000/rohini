import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/ui/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import styles from "./page.module.css";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

// Generate metadata dynamically
export async function generateMetadata({
    params,
}: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: category.name,
        description: `Shop authentic ${category.name.toLowerCase()} from Heritage Artisans. ${category.description}`,
        openGraph: {
            title: `${category.name} | Heritage Artisans`,
            description: category.description,
            images: [{ url: category.image, alt: category.name }],
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    // Filter products by category name
    const categoryProducts = products.filter(
        (p) =>
            p.category.toLowerCase().replace(/\s+/g, "-") === slug ||
            p.category.toLowerCase().includes(category.name.split(" ")[0].toLowerCase())
    );

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: category.name },
    ];

    return (
        <>
            <div className="container">
                <Breadcrumbs items={breadcrumbs} />
            </div>

            {/* Category Header */}
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{category.name}</h1>
                    <p className={styles.description}>{category.description}</p>
                    <p className={styles.count}>
                        {categoryProducts.length} {categoryProducts.length === 1 ? "Product" : "Products"}
                    </p>
                </div>
            </section>

            {/* SEO Content */}
            <section className={styles.seoContent}>
                <div className="container">
                    <div className={styles.seoText}>
                        <h2 className={styles.seoTitle}>About {category.name}</h2>
                        <p>
                            Discover our exquisite collection of {category.name.toLowerCase()}, each piece
                            handcrafted by skilled artisans who have inherited their craft through
                            generations. From the intricate patterns to the premium materials,
                            every item tells a story of dedication and artistry.
                        </p>
                        <p>
                            At Heritage Artisans, we work directly with craftsmen across India to
                            bring you authentic, GI-certified products. Each purchase supports
                            traditional art forms and the families who keep them alive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.toolbar}>
                        <p className={styles.showing}>
                            Showing all {categoryProducts.length} results
                        </p>
                        <div className={styles.filters}>
                            <label htmlFor="sort" className="sr-only">
                                Sort by
                            </label>
                            <select id="sort" className={styles.sortSelect}>
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest First</option>
                            </select>
                        </div>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className={styles.productsGrid}>
                            {categoryProducts.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    priority={index < 4}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.empty}>
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Category Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: category.name,
                        description: category.description,
                        url: `https://heritageartisans.com/category/${slug}`,
                        mainEntity: {
                            "@type": "ItemList",
                            numberOfItems: categoryProducts.length,
                            itemListElement: categoryProducts.map((product, index) => ({
                                "@type": "ListItem",
                                position: index + 1,
                                item: {
                                    "@type": "Product",
                                    name: product.name,
                                    url: `https://heritageartisans.com/product/${product.slug}`,
                                },
                            })),
                        },
                    }),
                }}
            />
        </>
    );
}
