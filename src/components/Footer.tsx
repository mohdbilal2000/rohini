import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <h2 className="footer__title">Contact us</h2>
          <ul className="footer__contact">
            <li><MapPin size={16} strokeWidth={1.25} /> India · ships worldwide</li>
            <li><Mail size={16} strokeWidth={1.25} /> <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Instagram size={16} strokeWidth={1.25} /> <a href={site.instagram} target="_blank" rel="noopener">@astavita.co</a></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Customer service</h2>
          <ul>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/shipping-returns">Shipping &amp; returns</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/journal/how-to-care-for-plated-jewellery">Jewellery care</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">About</h2>
          <ul>
            <li><Link href="/about">About Astavita</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms of service</Link></li>
          </ul>
        </div>
        <div className="footer__join">
          <h2 className="footer__title">Shop</h2>
          <ul>
            <li><Link href="/collections/necklace-sets">Necklaces</Link></li>
            <li><Link href="/collections/earrings">Earrings</Link></li>
            <li><Link href="/collections/bangles">Bangles</Link></li>
            <li><Link href="/collections/rings">Rings</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">© {new Date().getFullYear()} Astavita</div>
    </footer>
  );
}
