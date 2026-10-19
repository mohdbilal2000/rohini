"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToBag({ slug, sizes }: { slug: string; sizes?: string[] }) {
  const { add } = useCart();
  const [size, setSize] = useState(sizes?.[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="buy">
      {sizes && sizes.length > 1 && (
        <fieldset className="buy__sizes">
          <legend>Size</legend>
          <div>
            {sizes.map((s) => (
              <label key={s} className={s === size ? "chip is-on" : "chip"}>
                <input type="radio" name="size" value={s} checked={s === size} onChange={() => setSize(s)} />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className="buy__row">
        <div className="qty" aria-label="Quantity">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
            −
          </button>
          <span aria-live="polite">{qty}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))}>
            +
          </button>
        </div>
        <button
          type="button"
          className="btn btn--solid buy__add"
          onClick={() => {
            add(slug, qty, sizes && sizes.length > 1 ? size : undefined);
            setAdded(true);
          }}
        >
          Add to bag
        </button>
      </div>
      {added && (
        <p className="buy__added" role="status">
          Added to your bag. <Link href="/cart">View bag</Link>
        </p>
      )}
    </div>
  );
}
