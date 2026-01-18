import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";

export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    artisan?: string;
    isNew?: boolean;
    isBestseller?: boolean;
}

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <article className={styles.card}>
            <Link href={`/product/${product.slug}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className={styles.image}
                        priority={priority}
                    />

                    {/* Badges */}
                    <div className={styles.badges}>
                        {product.isNew && (
                            <span className={styles.badgeNew}>New</span>
                        )}
                        {product.isBestseller && (
                            <span className={styles.badgeBestseller}>Bestseller</span>
                        )}
                        {discount > 0 && (
                            <span className={styles.badgeDiscount}>-{discount}%</span>
                        )}
                    </div>
                </div>
            </Link>

            <div className={styles.content}>
                <p className={styles.category}>{product.category}</p>

                <h3 className={styles.name}>
                    <Link href={`/product/${product.slug}`} className={styles.nameLink}>
                        {product.name}
                    </Link>
                </h3>

                {product.artisan && (
                    <p className={styles.artisan}>by {product.artisan}</p>
                )}

                <div className={styles.priceWrapper}>
                    <span className={styles.price}>
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                        <span className={styles.originalPrice}>
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
