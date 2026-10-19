import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <h2 className="footer__title">Know More</h2>
          <ul>
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/shipping-returns">Shipping and Returns</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Shop</h2>
          <ul>
            <li><Link href="/collections/necklace-sets">Necklaces</Link></li>
            <li><Link href="/collections/earrings">Earrings</Link></li>
            <li><Link href="/collections/bangles">Bangles</Link></li>
            <li><Link href="/collections/rings">Rings</Link></li>
            <li><Link href="/collections/bridal">Bridal</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Contact</h2>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email.toUpperCase()}</a></li>
            <li><Link href="/contact">Write to us</Link></li>
            <li><a href={site.instagram} target="_blank" rel="noopener">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__base">
        © {new Date().getFullYear()}, <strong>ASTAVITA</strong>. All rights reserved.
      </div>
    </footer>
  );
}
