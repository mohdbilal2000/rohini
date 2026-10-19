"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { announcement } from "@/lib/site";
import { useCart } from "./CartProvider";

export const navLinks = [
  { href: "/collections/necklace-sets", label: "Necklace sets" },
  { href: "/collections/earrings", label: "Earrings" },
  { href: "/collections/bangles", label: "Bangles" },
  { href: "/collections/rings", label: "Rings" },
  { href: "/collections/bridal", label: "Bridal" },
  { href: "/collections/festive-edit", label: "Festive edit" },
  { href: "/journal", label: "Journal" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count, ready } = useCart();

  // Close the drawer whenever the route changes.
  // eslint-disable-next-line react-hooks/set-state-in-effect -- closing UI in response to navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="announce">{announcement}</div>
      <header className="header">
        <div className="header__bar">
          <button className="icon-btn header__menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
          <Link href="/" className="logo" aria-label="Astavita home">
            ASTAVITA
          </Link>
          <div className="header__actions">
            <Link href="/search" className="icon-btn" aria-label="Search">
              <Search size={22} strokeWidth={1.5} />
            </Link>
            <Link href="/cart" className="icon-btn bag" aria-label={`Bag, ${ready ? count : 0} items`}>
              <ShoppingBag size={22} strokeWidth={1.5} />
              {ready && count > 0 && <span className="bag__count">{count}</span>}
            </Link>
          </div>
        </div>
        <nav className="nav" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "nav__link is-active" : "nav__link"}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className={open ? "drawer is-open" : "drawer"} aria-hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel" role="dialog" aria-label="Menu">
          <div className="drawer__head">
            <span className="logo logo--sm">ASTAVITA</span>
            <button className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="drawer__nav" aria-label="Mobile">
            <Link href="/collections/all">Shop all</Link>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <Link href="/about">About us</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
