import { site } from "./site";

const free = `₹${site.freeShippingThreshold.toLocaleString("en-IN")}`;

// Plain question-and-answer pairs. Used on /faq and in FAQPage structured data.
export const faqs: { q: string; a: string }[] = [
  { q: "What is Astavita jewellery made of?", a: "Most pieces are gold-plated or rhodium-plated brass set with kundan, American diamonds (cubic zirconia), coloured stones or faux pearls. Rings and small earrings are often gold-plated silver. Each product page lists the exact material, stones and finish." },
  { q: "Is this real gold?", a: "No. Astavita sells plated fashion jewellery, not solid gold. That keeps prices accessible while giving the look of traditional gold jewellery." },
  { q: "How long does delivery take?", a: `Orders are dispatched in ${site.dispatchDays}. Delivery takes ${site.deliveryDays}. International delivery usually takes 7 to 14 working days.` },
  { q: "Is shipping free?", a: `Shipping is free within India on orders above ${free}. Below that, a flat fee of ₹${site.shippingFee} applies. International shipping is calculated at checkout.` },
  { q: "Do you offer cash on delivery?", a: "Yes, cash on delivery is available on most pin codes in India." },
  { q: "What is your return policy?", a: `You can return unused pieces in their original packaging within ${site.returnDays} days of delivery. Earrings cannot be returned for hygiene reasons unless they arrive damaged.` },
  { q: "How do I choose my bangle size?", a: "Measure the inside diameter of a bangle that fits you. 2.4 is about 5.7 cm, 2.6 is about 6.0 cm, 2.8 is about 6.4 cm and 2.10 is about 6.7 cm. If you are between sizes, choose the larger one." },
  { q: "How do I care for plated jewellery?", a: "Keep it away from water, perfume and sweat. Wipe it with a soft dry cloth after wearing and store each piece in its own pouch or box, away from air and moisture." },
  { q: "Do you ship outside India?", a: "Yes, we ship worldwide. Duties and taxes in the destination country are paid by the buyer." },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  sections: { heading: string; body: string[] }[];
};

// Guides that answer common questions in plain language.
export const articles: Article[] = [
  {
    slug: "kundan-vs-polki",
    title: "Kundan vs polki: what is the difference?",
    description: "Kundan and polki look alike but are made differently. Here is how to tell them apart and which one suits you.",
    image: "/images/hero-kundan-bride.jpg",
    imageAlt: "Woman wearing a kundan necklace, maang tikka and earrings",
    date: "2026-10-15",
    sections: [
      { heading: "The short answer", body: ["Kundan is a setting technique. Polki is a type of stone. Kundan work sets stones in a bed of gold foil. Polki means uncut, unpolished diamonds, which are usually set using the kundan technique."] },
      { heading: "What is kundan?", body: ["Kundan comes from the royal courts of Rajasthan and Gujarat. The craftsman builds a frame, packs it with layers of fine gold foil and presses each stone into place. In fine jewellery the stones are gems. In fashion jewellery, including most kundan sold online, the stones are glass and the frame is plated brass."] },
      { heading: "What is polki?", body: ["Polki is a diamond in its natural, uncut form. It is not faceted like a modern diamond, so it has a soft, silvery shine rather than sparkle. Real polki is expensive. Polki-style jewellery uses crystals or cubic zirconia to recreate the look."] },
      { heading: "How to tell them apart", body: ["Look at the shine. Kundan glass stones have a flat, mirror-like surface and a foil backing that gives them a bright, even colour. Polki has an irregular surface and a softer, cloudy glow.", "Check the price. Real polki costs many times more than kundan. A low price almost always means kundan or polki-style stones."] },
      { heading: "Which should you choose?", body: ["For a wedding where you want heirloom value, real polki in gold is the traditional choice. For festivals, sangeet, guest outfits and anything you want to wear often, kundan or polki-style fashion jewellery gives the same look for a fraction of the cost."] },
    ],
  },
  {
    slug: "how-to-care-for-plated-jewellery",
    title: "How to care for gold-plated jewellery",
    description: "Simple steps to keep plated necklaces, jhumkas and bangles shining for years.",
    image: "/images/gold-bangle-stack.jpg",
    imageAlt: "Stack of gold bangles on a dark surface",
    date: "2026-10-12",
    sections: [
      { heading: "Why plated jewellery fades", body: ["Plating is a thin layer of gold over a base metal such as brass. Water, sweat, perfume and air slowly wear it away and can darken the base metal underneath."] },
      { heading: "Put it on last, take it off first", body: ["Wear jewellery after make-up, perfume and hairspray have dried. Remove it before bathing, swimming, exercise or sleeping."] },
      { heading: "Clean it gently", body: ["After each wear, wipe pieces with a soft dry cotton cloth. Do not use water, soap, toothpaste or silver polish on plated jewellery."] },
      { heading: "Store it properly", body: ["Keep each piece in its own pouch or box so stones do not scratch each other. Add a sachet of silica gel to absorb moisture. Store kundan sets flat so the stones stay in place."] },
      { heading: "When to replate", body: ["If a favourite piece fades after years of use, a local jeweller can usually replate it for a small fee."] },
    ],
  },
  {
    slug: "bridal-jewellery-checklist",
    title: "Bridal jewellery checklist for every function",
    description: "What to wear for the haldi, mehendi, sangeet, wedding and reception, and how to plan your jewellery budget.",
    image: "/images/life-bridal-red.jpg",
    imageAlt: "Bride in a red lehenga with a gold necklace set and maang tikka",
    date: "2026-10-08",
    sections: [
      { heading: "Start with the wedding outfit", body: ["Choose the main wedding set after your outfit is final. Match the metal tone to the embroidery: antique gold suits zari and red, while lighter gold and kundan suit pastels."] },
      { heading: "The core pieces", body: ["A choker or short necklace, a long rani haar, statement earrings or chandbalis, a maang tikka, bangles or kadas, and a ring. Many brides add a nath and a hathphool."] },
      { heading: "Lighter looks for other functions", body: ["Haldi and mehendi: floral or light kundan earrings and a single bangle stack.", "Sangeet: statement earrings and a bold ring, with a light necklace or none.", "Reception: American diamond or polki-style sets work well with evening wear."] },
      { heading: "Plan for comfort", body: ["Try heavy earrings on for an hour before the day. Ask for ear chains or supports if needed. Choose adjustable necklaces so they sit right with each neckline."] },
      { heading: "Order early", body: ["Order four to six weeks before the wedding so there is time for exchanges or size changes."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
