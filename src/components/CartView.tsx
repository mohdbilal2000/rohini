"use client";

import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { useCart } from "./CartProvider";

export function useCartTotals() {
  const { lines } = useCart();
  const items = lines
    .map((l) => ({ ...l, product: getProduct(l.slug) }))
    .filter((l): l is typeof l & { product: NonNullable<typeof l.product> } => !!l.product);
  const subtotal = items.reduce((n, l) => n + l.product.price * l.qty, 0);
  const shipping = subtotal === 0 || subtotal >= site.freeShippingThreshold ? 0 : site.shippingFee;
  return { items, subtotal, shipping, total: subtotal + shipping };
}

export default function CartView() {
  const { ready, setQty, remove } = useCart();
  const { items, subtotal, shipping, total } = useCartTotals();

  if (!ready) return <div className="wrap page-pad" aria-busy="true" />;

  if (items.length === 0)
    return (
      <div className="wrap page-pad empty">
        <p>Your bag is empty.</p>
        <Link href="/collections/all" className="btn btn--solid">
          Shop jewellery
        </Link>
      </div>
    );

  const left = site.freeShippingThreshold - subtotal;

  return (
    <div className="wrap cart">
      <ul className="cart__lines">
        {items.map((l) => (
          <li key={l.slug + (l.size ?? "")} className="line">
            <Link href={`/products/${l.slug}`} className="line__img">
              <Image src={l.product.image} alt={l.product.imageAlt} fill sizes="120px" />
            </Link>
            <div className="line__info">
              <Link href={`/products/${l.slug}`} className="line__name">
                {l.product.name}
              </Link>
              {l.size && <p className="muted">Size {l.size}</p>}
              <p>{formatPrice(l.product.price)}</p>
              <div className="line__actions">
                <div className="qty">
                  <button aria-label="Decrease quantity" onClick={() => setQty(l.slug, l.size, l.qty - 1)}>
                    −
                  </button>
                  <span>{l.qty}</span>
                  <button aria-label="Increase quantity" onClick={() => setQty(l.slug, l.size, l.qty + 1)}>
                    +
                  </button>
                </div>
                <button className="link-btn" onClick={() => remove(l.slug, l.size)}>
                  Remove
                </button>
              </div>
            </div>
            <p className="line__total">{formatPrice(l.product.price * l.qty)}</p>
          </li>
        ))}
      </ul>
      <aside className="summary">
        <h2>Order summary</h2>
        <dl>
          <dt>Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
          <dt>Shipping in India</dt>
          <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
          <dt className="summary__total">Total</dt>
          <dd className="summary__total">{formatPrice(total)}</dd>
        </dl>
        {left > 0 && <p className="muted">Add {formatPrice(left)} more for free shipping.</p>}
        <Link href="/checkout" className="btn btn--solid btn--block">
          Checkout
        </Link>
        <Link href="/collections/all" className="link-btn">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
