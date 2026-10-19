import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ title: "Terms of service", description: "Terms for buying from Astavita.", path: "/terms" });

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of service", path: "/terms" }]} />
      <div className="wrap prose">
        <h1>Terms of service</h1>
        <p>By placing an order with {site.name} you agree to these terms.</p>
        <h2>Products</h2>
        <p>Our jewellery is plated fashion jewellery unless stated otherwise. Colours may vary slightly from photos because of lighting and screen settings. Handcrafted pieces may have small variations.</p>
        <h2>Prices and orders</h2>
        <p>Prices are in Indian rupees and include taxes. An order is confirmed only after we accept it by message or email. We may cancel an order if an item is out of stock or a price is shown in error, and we will refund any payment in full.</p>
        <h2>Shipping and returns</h2>
        <p>Our shipping and returns policy forms part of these terms.</p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </>
  );
}
