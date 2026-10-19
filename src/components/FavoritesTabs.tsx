"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";
import ProductCard from "./ProductCard";

export default function FavoritesTabs({ tabs }: { tabs: { label: string; products: Product[] }[] }) {
  const [t, setT] = useState(0);
  return (
    <>
      <div className="tabs" role="tablist">
        {tabs.map((tab, n) => (
          <button key={tab.label} role="tab" aria-selected={n === t} className={n === t ? "is-on" : ""} onClick={() => setT(n)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rail" role="tabpanel">
        {tabs[t].products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
