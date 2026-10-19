import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ title: "Privacy policy", description: "How Astavita collects and uses your information.", path: "/privacy-policy" });

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy policy", path: "/privacy-policy" }]} />
      <div className="wrap prose">
        <h1>Privacy policy</h1>
        <p>This policy explains what information {site.name} collects when you use {site.url.replace("https://", "")} and how we use it.</p>
        <h2>What we collect</h2>
        <p>When you place an order we collect your name, phone number, email address and delivery address. Your bag is saved in your own browser and is not sent to us until you place an order.</p>
        <h2>How we use it</h2>
        <p>We use your details only to confirm, ship and support your order, and to reply when you contact us. We share your address with our courier partners for delivery. We do not sell your information.</p>
        <h2>Your choices</h2>
        <p>You can ask us to see, correct or delete the information we hold about you by writing to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </>
  );
}
