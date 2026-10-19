// Single place for brand details. Update these before launch.
export const site = {
  name: "Astavita",
  legalName: "Astavita",
  url: "https://astavita.co",
  tagline: "Fine Indian jewellery",
  description:
    "Astavita is an online store for Indian jewellery: kundan and temple necklace sets, jhumkas, bangles and rings, shipped across India and worldwide.",
  email: "hello@astavita.co",
  // WhatsApp number with country code, digits only, e.g. "919876543210".
  // Leave empty until the business number is ready; order buttons then fall back to email.
  whatsapp: "",
  instagram: "https://www.instagram.com/astavita.co",
  currency: "INR",
  freeShippingThreshold: 2500,
  shippingFee: 99,
  returnDays: 7,
  dispatchDays: "1 to 3 working days",
  deliveryDays: "3 to 7 working days within India",
} as const;

export const announcement = `Free shipping in India on orders above ₹${site.freeShippingThreshold.toLocaleString("en-IN")} · Cash on delivery available · We ship worldwide`;
