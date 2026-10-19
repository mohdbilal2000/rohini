"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { useCart } from "./CartProvider";
import { useCartTotals } from "./CartView";

// No payment gateway is connected yet. The order is sent to the store on WhatsApp
// (or by email if no WhatsApp number is set) and paid by cash on delivery or UPI link.
export default function CheckoutForm() {
  const { ready, clear } = useCart();
  const { items, subtotal, shipping, total } = useCartTotals();
  const [sent, setSent] = useState<string | null>(null);

  if (!ready) return <div className="wrap page-pad" aria-busy="true" />;

  if (sent)
    return (
      <div className="wrap page-pad empty">
        <h2>Thank you</h2>
        <p>Your order request {sent} has been prepared. Send the message that opened to confirm it. We will reply with payment and delivery details.</p>
        <Link href="/collections/all" className="btn btn--solid">
          Continue shopping
        </Link>
      </div>
    );

  if (items.length === 0)
    return (
      <div className="wrap page-pad empty">
        <p>Your bag is empty.</p>
        <Link href="/collections/all" className="btn btn--solid">
          Shop jewellery
        </Link>
      </div>
    );

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const id = "AV" + Date.now().toString().slice(-6);
    const lines = items.map((l) => `- ${l.product.name}${l.size ? ` (size ${l.size})` : ""} x${l.qty}: ${formatPrice(l.product.price * l.qty)}`);
    const text = [
      `New order ${id}`,
      ...lines,
      `Subtotal: ${formatPrice(subtotal)}`,
      `Shipping: ${shipping === 0 ? "Free" : formatPrice(shipping)}`,
      `Total: ${formatPrice(total)}`,
      `Payment: ${f.get("payment")}`,
      "",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Email: ${f.get("email")}`,
      `Address: ${f.get("address")}, ${f.get("city")}, ${f.get("state")} ${f.get("pincode")}, ${f.get("country")}`,
    ].join("\n");
    const url = site.whatsapp
      ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
      : `mailto:${site.email}?subject=${encodeURIComponent(`Order ${id}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    clear();
    setSent(id);
  }

  return (
    <form className="wrap cart" onSubmit={submit}>
      <div className="form">
        <h2>Delivery details</h2>
        <label>
          Full name
          <input name="name" id="name" required autoComplete="name" />
        </label>
        <div className="form__row">
          <label>
            Mobile number
            <input name="phone" id="phone" type="tel" required autoComplete="tel" inputMode="tel" />
          </label>
          <label>
            Email
            <input name="email" id="email" type="email" required autoComplete="email" />
          </label>
        </div>
        <label>
          Address
          <input name="address" id="address" required autoComplete="street-address" />
        </label>
        <div className="form__row">
          <label>
            City
            <input name="city" id="city" required autoComplete="address-level2" />
          </label>
          <label>
            State
            <input name="state" id="state" required autoComplete="address-level1" />
          </label>
        </div>
        <div className="form__row">
          <label>
            PIN code
            <input name="pincode" id="pincode" required inputMode="numeric" autoComplete="postal-code" />
          </label>
          <label>
            Country
            <input name="country" id="country" defaultValue="India" required autoComplete="country-name" />
          </label>
        </div>
        <fieldset className="form__pay">
          <legend>Payment</legend>
          <label>
            <input type="radio" name="payment" value="Cash on delivery" defaultChecked /> Cash on delivery
          </label>
          <label>
            <input type="radio" name="payment" value="UPI / payment link" /> UPI or payment link (we send it after confirming)
          </label>
        </fieldset>
      </div>
      <aside className="summary">
        <h2>Your order</h2>
        <ul className="summary__items">
          {items.map((l) => (
            <li key={l.slug + (l.size ?? "")}>
              <span>
                {l.product.name} × {l.qty}
              </span>
              <span>{formatPrice(l.product.price * l.qty)}</span>
            </li>
          ))}
        </ul>
        <dl>
          <dt>Subtotal</dt>
          <dd>{formatPrice(subtotal)}</dd>
          <dt>Shipping</dt>
          <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
          <dt className="summary__total">Total</dt>
          <dd className="summary__total">{formatPrice(total)}</dd>
        </dl>
        <button type="submit" className="btn btn--solid btn--block">
          Place order
        </button>
        <p className="muted small">Your order opens in {site.whatsapp ? "WhatsApp" : "your email app"} for you to send. We confirm every order personally.</p>
      </aside>
    </form>
  );
}
