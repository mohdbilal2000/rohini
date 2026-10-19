import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { discountPercent, formatPrice } from "@/lib/format";

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const off = discountPercent(product.price, product.compareAt);
  return (
    <Link href={`/products/${product.slug}`} className="card">
      <div className="card__media">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
          priority={priority}
        />
        {off > 0 && <span className="card__tag">{off}% off</span>}
      </div>
      <h3 className="card__name">{product.name}</h3>
      <p className="card__price">
        {formatPrice(product.price)}
        {off > 0 && <s>{formatPrice(product.compareAt!)}</s>}
      </p>
    </Link>
  );
}

export function ProductGrid({ products, priorityCount = 0 }: { products: Product[]; priorityCount?: number }) {
  return (
    <div className="grid">
      {products.map((p, i) => (
        <ProductCard key={p.slug} product={p} priority={i < priorityCount} />
      ))}
    </div>
  );
}
