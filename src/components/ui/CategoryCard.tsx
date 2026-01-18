import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryCard.module.css";

export interface Category {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: string;
    productCount?: number;
}

interface CategoryCardProps {
    category: Category;
    priority?: boolean;
    size?: "default" | "large";
}

export default function CategoryCard({
    category,
    priority = false,
    size = "default",
}: CategoryCardProps) {
    return (
        <article className={`${styles.card} ${size === "large" ? styles.large : ""}`}>
            <Link href={`/category/${category.slug}`} className={styles.link}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes={size === "large" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                        className={styles.image}
                        priority={priority}
                    />
                    <div className={styles.overlay} />
                </div>

                <div className={styles.content}>
                    <h3 className={styles.name}>{category.name}</h3>
                    <p className={styles.description}>{category.description}</p>
                    {category.productCount && (
                        <span className={styles.count}>
                            {category.productCount} Products
                        </span>
                    )}
                </div>
            </Link>
        </article>
    );
}
