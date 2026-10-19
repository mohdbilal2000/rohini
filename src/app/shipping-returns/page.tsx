import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ title: "Shipping and returns", description: `Free shipping in India above ₹${site.freeShippingThreshold}, cash on delivery, worldwide shipping and ${site.returnDays}-day returns.`, path: "/shipping-returns" });

export default function ShippingPage() {
  const free = site.freeShippingThreshold.toLocaleString("en-IN");
  return (
    <>
      <Breadcrumbs items={[{ name: "Shipping and returns", path: "/shipping-returns" }]} />
      <div className="wrap prose">
        <h1>Shipping and returns</h1>
        <h2>Shipping in India</h2>
        <p>Orders are dispatched in {site.dispatchDays} and delivered in {site.deliveryDays}. Shipping is free on orders above ₹{free}. Below that, a flat fee of ₹{site.shippingFee} applies. Cash on delivery is available on most pin codes.</p>
        <h2>International shipping</h2>
        <p>We ship worldwide with tracking. Delivery usually takes 7 to 14 working days. Customs duties and taxes in the destination country are paid by the buyer.</p>
        <h2>Returns</h2>
        <p>You can return unused pieces in their original packaging within {site.returnDays} days of delivery. Write to <a href={`mailto:${site.email}`}>{site.email}</a> with your order number to start a return. Refunds are made to the original payment method, or by bank transfer for cash on delivery orders, within 7 working days of us receiving the return.</p>
        <h2>Items that cannot be returned</h2>
        <p>Earrings cannot be returned for hygiene reasons unless they arrive damaged. Sale items can be exchanged but not refunded.</p>
        <h2>Damaged or wrong item</h2>
        <p>If your order arrives damaged or is not what you ordered, email us within 48 hours of delivery with a photo and an unboxing video. We will replace it or refund you in full.</p>
      </div>
    </>
  );
}
