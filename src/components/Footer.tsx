import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Shop",
    links: [
      ["/collections/all", "Shop all"],
      ["/collections/necklace-sets", "Necklace sets"],
      ["/collections/earrings", "Earrings"],
      ["/collections/bangles", "Bangles"],
      ["/collections/rings", "Rings"],
      ["/collections/bridal", "Bridal"],
    ],
  },
  {
    title: "Help",
    links: [
      ["/faq", "FAQs"],
      ["/shipping-returns", "Shipping and returns"],
      ["/contact", "Contact us"],
      ["/journal/how-to-care-for-plated-jewellery", "Jewellery care"],
    ],
  },
  {
    title: "Astavita",
    links: [
      ["/about", "About us"],
      ["/journal", "Journal"],
      ["/privacy-policy", "Privacy policy"],
      ["/terms", "Terms of service"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <span className="logo">ASTAVITA</span>
          <p>{site.description}</p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h2 className="footer__title">{c.title}</h2>
            <ul>
              {c.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <a href={site.instagram} rel="noopener" target="_blank">
          Instagram
        </a>
      </div>
    </footer>
  );
}
