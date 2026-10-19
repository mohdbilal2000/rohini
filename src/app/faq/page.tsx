import Breadcrumbs from "@/components/Breadcrumbs";
import { faqs } from "@/lib/content";
import { JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Frequently asked questions", description: "Answers about Astavita materials, shipping, cash on delivery, returns, bangle sizes and jewellery care.", path: "/faq" });

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQs", path: "/faq" }]} />
      <div className="wrap prose">
        <h1>Frequently asked questions</h1>
        <dl className="faq">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    </>
  );
}
