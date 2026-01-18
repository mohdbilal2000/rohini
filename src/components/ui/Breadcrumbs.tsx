import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `https://heritageartisans.com${item.href}` : undefined,
        })),
    };

    return (
        <>
            <nav aria-label="Breadcrumb" className={styles.nav}>
                <ol className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.item}>
                            {item.href ? (
                                <Link href={item.href} className={styles.link}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={styles.current} aria-current="page">
                                    {item.label}
                                </span>
                            )}
                            {index < items.length - 1 && (
                                <ChevronRight
                                    size={14}
                                    className={styles.separator}
                                    aria-hidden="true"
                                />
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </>
    );
}
