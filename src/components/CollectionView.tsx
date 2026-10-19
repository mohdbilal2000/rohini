"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";
import { ProductGrid } from "./ProductCard";

const sorts = {
  featured: "Featured",
  new: "Newest",
  "price-asc": "Price, low to high",
  "price-desc": "Price, high to low",
} as const;

export default function CollectionView({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<keyof typeof sorts>("featured");

  const list = useMemo(() => {
    const l = [...products];
    if (sort === "price-asc") l.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l.sort((a, b) => b.price - a.price);
    if (sort === "new") l.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    return l;
  }, [products, sort]);

  return (
    <>
      <div className="toolbar wrap">
        <span>{products.length} pieces</span>
        <label>
          Sort by{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value as keyof typeof sorts)}>
            {Object.entries(sorts).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="wrap">
        <ProductGrid products={list} priorityCount={4} />
      </div>
    </>
  );
}
