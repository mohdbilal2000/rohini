"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "./CartProvider";

export const navLinks = [
  { href: "/collections/all", label: "Jewellery" },
  { href: "/collections/necklace-sets", label: "Necklaces" },
  { href: "/collections/earrings", label: "Earrings" },
  { href: "/collections/bangles", label: "Bangles" },
  { href: "/collections/rings", label: "Rings" },
  { href: "/collections/bridal", label: "Bridal" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count, ready } = useCart();
  const n = ready ? count : 0;
  const overlay = pathname === "/" && !scrolled && !open;

  // Close the drawer whenever the route changes.
  // eslint-disable-next-line react-hooks/set-state-in-effect -- closing UI in response to navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={overlay ? "header is-overlay" : "header"}>
        <div className="header__bar">
          <div className="header__left">
            <button className="icon-btn header__menu" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <Menu size={24} strokeWidth={1.25} />
            </button>
            <nav className="nav" aria-label="Main">
              {navLinks.slice(0, 3).map((l) => (
                <Link key={l.href} href={l.href} className={pathname === l.href ? "nav__link is-active" : "nav__link"}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/" className="logo" aria-label="Astavita home">
            Astavita
          </Link>
          <div className="header__actions">
            <nav className="nav" aria-label="More">
              {navLinks.slice(3).map((l) => (
                <Link key={l.href} href={l.href} className={pathname === l.href ? "nav__link is-active" : "nav__link"}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link href="/search" className="icon-btn" aria-label="Search">
              <Search size={20} strokeWidth={1.25} />
            </Link>
            <Link href="/cart" className="icon-btn bag" aria-label={`Bag, ${n} items`}>
              <ShoppingBag size={21} strokeWidth={1.25} />
              {n > 0 && <span className="bag__count">{n}</span>}
            </Link>
          </div>
        </div>
      </header>

      <div className={open ? "drawer is-open" : "drawer"} aria-hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel" role="dialog" aria-label="Menu">
          <div className="drawer__head">
            <span className="logo">Astavita</span>
            <button className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={24} strokeWidth={1.25} />
            </button>
          </div>
          <nav className="drawer__nav" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <Link href="/collections/festive-edit">Festive edit</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">Our story</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
