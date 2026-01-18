import styles from "./Skeleton.module.css";

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    className?: string;
}

export default function Skeleton({
    width = "100%",
    height = 20,
    borderRadius = "var(--radius-md)",
    className = "",
}: SkeletonProps) {
    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{
                width: typeof width === "number" ? `${width}px` : width,
                height: typeof height === "number" ? `${height}px` : height,
                borderRadius,
            }}
            aria-hidden="true"
        />
    );
}

export function ProductCardSkeleton() {
    return (
        <div className={styles.productCard}>
            <Skeleton height={320} borderRadius="var(--radius-lg) var(--radius-lg) 0 0" />
            <div className={styles.productContent}>
                <Skeleton width={80} height={12} />
                <Skeleton height={24} />
                <Skeleton width={120} height={16} />
                <Skeleton width={100} height={20} />
            </div>
        </div>
    );
}
