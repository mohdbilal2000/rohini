"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const footerNavigation = {
    shop: [
        { name: "Jewellery", href: "/category/jewellery" },
        { name: "Pashmina Shawls", href: "/category/pashmina-shawls" },
        { name: "Women's Clothing", href: "/category/womens-clothing" },
        { name: "Men's Clothing", href: "/category/mens-clothing" },
        { name: "Essential Oils", href: "/category/essential-oils" },
        { name: "Perfumes", href: "/category/perfumes" },
    ],
    company: [
        { name: "Our Story", href: "/about" },
        { name: "Artisan Partners", href: "/artisans" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faq" },
        { name: "Shipping & Returns", href: "/shipping-returns" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Care Instructions", href: "/care" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const certifications = [
    "GI Certified",
    "Handmade Verified",
    "Fair Trade",
    "Sustainable Crafts",
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                {/* Main Footer */}
                <div className={styles.mainFooter}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            Heritage Artisans
                        </Link>
                        <p className={styles.brandDescription}>
                            Preserving India&apos;s rich heritage through authentic handcrafted
                            treasures. Each piece carries the legacy of centuries-old traditions
                            and the skill of master artisans.
                        </p>

                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <MapPin size={16} aria-hidden="true" />
                                <span>Agra, Uttar Pradesh, India</span>
                            </div>
                            <div className={styles.contactItem}>
                                <Phone size={16} aria-hidden="true" />
                                <a href="tel:+911234567890">+91 123 456 7890</a>
                            </div>
                            <div className={styles.contactItem}>
                                <Mail size={16} aria-hidden="true" />
                                <a href="mailto:hello@heritageartisans.com">
                                    hello@heritageartisans.com
                                </a>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className={styles.certifications}>
                            {certifications.map((cert) => (
                                <span key={cert} className={styles.certBadge}>
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className={styles.navColumns}>
                        <div className={styles.navColumn}>
                            <h3 className={styles.navTitle}>Shop</h3>
                            <ul className={styles.navList}>
                                {footerNavigation.shop.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className={styles.navLink}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.navColumn}>
                            <h3 className={styles.navTitle}>Company</h3>
                            <ul className={styles.navList}>
                                {footerNavigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className={styles.navLink}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.navColumn}>
                            <h3 className={styles.navTitle}>Support</h3>
                            <ul className={styles.navList}>
                                {footerNavigation.support.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className={styles.navLink}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className={styles.newsletter}>
                    <div className={styles.newsletterContent}>
                        <h3 className={styles.newsletterTitle}>
                            Join the Heritage Community
                        </h3>
                        <p className={styles.newsletterText}>
                            Get early access to new collections, artisan stories, and exclusive
                            offers.
                        </p>
                    </div>
                    <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="email-input" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email-input"
                            name="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                            required
                        />
                        <button type="submit" className={styles.newsletterBtn}>
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} Heritage Artisans. All rights reserved.
                    </p>
                    <ul className={styles.legalLinks}>
                        {footerNavigation.legal.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className={styles.legalLink}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
