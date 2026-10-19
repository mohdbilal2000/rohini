import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ title: "Contact us", description: "Write to Astavita about orders, sizes, returns or custom requests.", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact us", path: "/contact" }]} />
      <div className="wrap prose">
        <h1>Contact us</h1>
        <p>For orders, sizes, returns or bulk and bridal requests, write to us. We reply within one working day.</p>
        <h2>Email</h2>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        {site.whatsapp && (
          <>
            <h2>WhatsApp</h2>
            <p>
              <a href={`https://wa.me/${site.whatsapp}`}>+{site.whatsapp}</a>
            </p>
          </>
        )}
        <h2>Instagram</h2>
        <p>
          <a href={site.instagram} rel="noopener" target="_blank">
            @astavita.co
          </a>
        </p>
        <p className="muted">Please include your order number if you are writing about an order.</p>
      </div>
    </>
  );
}
