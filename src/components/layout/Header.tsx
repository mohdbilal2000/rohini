"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import styles from "./Header.module.css";

const navigation = [
    { name: "Jewellery", href: "/category/jewellery" },
    { name: "Pashmina Shawls", href: "/category/pashmina-shawls" },
    { name: "Clothing", href: "/category/womens-clothing" },
    { name: "Fragrances", href: "/category/perfumes" },
    { name: "Our Story", href: "/about" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <a href="#main-content" className={styles.skipLink}>
                Skip to main content
            </a>

            <div className={`container ${styles.container}`}>
                {/* Mobile menu button */}
                <button
                    type="button"
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? (
                        <X size={24} aria-hidden="true" />
                    ) : (
                        <Menu size={24} aria-hidden="true" />
                    )}
                </button>

                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>Heritage Artisans</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav} aria-label="Main navigation">
                    <ul className={styles.navList}>
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Actions */}
                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.actionBtn}
                        aria-label="Search products"
                    >
                        <Search size={20} aria-hidden="true" />
                    </button>

                    <Link href="/account" className={styles.actionBtn} aria-label="My account">
                        <User size={20} aria-hidden="true" />
                    </Link>

                    <Link href="/cart" className={styles.cartBtn} aria-label="Shopping cart">
                        <ShoppingBag size={20} aria-hidden="true" />
                        <span className={styles.cartCount}>0</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""}`}
                aria-label="Mobile navigation"
                aria-hidden={!mobileMenuOpen}
            >
                <ul className={styles.mobileNavList}>
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={() => setMobileMenuOpen(false)}
                                tabIndex={mobileMenuOpen ? 0 : -1}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
