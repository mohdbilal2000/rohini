// Product catalogue. Replace names, prices, details and photos with real stock before launch.
// Photos live in /public/images; swap a file and keep the same name to update it everywhere.

export type CollectionSlug = "necklace-sets" | "earrings" | "bangles" | "rings";

export type Collection = {
  slug: CollectionSlug | "all" | "festive-edit" | "bridal";
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  collection: CollectionSlug;
  image: string;
  imageAlt: string;
  price: number;
  compareAt?: number;
  material: string;
  stones: string;
  finish: string;
  size: string;
  description: string;
  bridal?: boolean;
  isNew?: boolean;
  bestseller?: boolean;
};

export const collections: Collection[] = [
  {
    slug: "all",
    name: "Shop all",
    title: "All jewellery",
    description: "Shop every Astavita piece: necklace sets, earrings, bangles and rings.",
    intro: "Every piece in the store, newest first.",
    image: "/images/hero-long-necklace.jpg",
  },
  {
    slug: "necklace-sets",
    name: "Necklace sets",
    title: "Necklace sets",
    description:
      "Kundan, temple and stone necklace sets with matching earrings, for weddings, festivals and everyday wear.",
    intro: "Kundan, temple and stone necklaces, most with matching earrings.",
    image: "/images/life-saree-necklace.jpg",
  },
  {
    slug: "earrings",
    name: "Earrings",
    title: "Earrings",
    description: "Jhumkas, chandbalis, drops, studs and hoops in gold tones, pearls and coloured stones.",
    intro: "Jhumkas, drops, studs and hoops.",
    image: "/images/life-chandbali.jpg",
  },
  {
    slug: "bangles",
    name: "Bangles",
    title: "Bangles and kadas",
    description: "Gold-tone bangles, kadas and bangle sets with rubies, American diamonds and textured finishes.",
    intro: "Single bangles, pairs and stacks. Sizes 2.4 to 2.10.",
    image: "/images/life-bangles-wrist.jpg",
  },
  {
    slug: "rings",
    name: "Rings",
    title: "Rings",
    description: "Cocktail rings, solitaire-style rings, bands and stacking sets.",
    intro: "Cocktail rings, bands and stacking sets. Adjustable unless stated.",
    image: "/images/life-ring-hand.jpg",
  },
  {
    slug: "festive-edit",
    name: "Festive edit",
    title: "Festive edit",
    description: "Festive offers on selected necklace sets, earrings and bangles.",
    intro: "Selected pieces at festive prices, while stock lasts.",
    image: "/images/hero-kundan-bride.jpg",
  },
  {
    slug: "bridal",
    name: "Bridal",
    title: "Bridal jewellery",
    description: "Statement necklace sets, chandbalis and bangles chosen for brides and the wedding party.",
    intro: "Statement pieces for the wedding, the sangeet and the reception.",
    image: "/images/life-bridal-red.jpg",
  },
];

export const products: Product[] = [
  // Necklace sets
  { slug: "temple-gold-necklace-set", name: "Temple Gold Necklace Set", collection: "necklace-sets", image: "/images/temple-necklace-set.jpg", imageAlt: "Gold temple necklace with ruby studs and matching earrings on black", price: 8450, compareAt: 10560, material: "Gold-plated brass", stones: "Ruby-red stones", finish: "Antique gold", size: "Adjustable cord, 16 to 20 in", description: "A South Indian temple-style necklace with a dense row of gold drops and ruby-red accents. Comes with matching stud earrings.", bridal: true, bestseller: true },
  { slug: "ruby-drop-pendant-necklace", name: "Ruby Drop Pendant Necklace", collection: "necklace-sets", image: "/images/ad-pendant-necklace.jpg", imageAlt: "Gold chain necklace with a ruby and white stone pendant and pearl fringe", price: 6950, material: "Gold-plated brass", stones: "American diamonds, ruby-red stones, faux pearls", finish: "Yellow gold", size: "Long, 22 in with adjustable back", description: "A fine gold chain with a pear-shaped pendant of white and ruby-red stones and a pearl fringe along the neckline.", isNew: true },
  { slug: "emerald-ruby-statement-necklace", name: "Emerald and Ruby Statement Set", collection: "necklace-sets", image: "/images/emerald-ruby-necklace.jpg", imageAlt: "Statement necklace with green and pink stones and matching drop earrings", price: 9800, material: "Rhodium and gold-plated brass", stones: "American diamonds, green and pink stones", finish: "Two-tone", size: "Adjustable, 15 to 18 in", description: "A layered statement necklace in paisley shapes set with white, green and pink stones. Matching drop earrings included.", bridal: true, isNew: true },
  { slug: "rajwadi-bib-necklace-set", name: "Rajwadi Bib Necklace Set", collection: "necklace-sets", image: "/images/gold-bib-necklace.jpg", imageAlt: "Gold bib necklace and long earrings on display stands", price: 7250, compareAt: 8990, material: "Gold-plated brass", stones: "None", finish: "Matte gold", size: "Adjustable cord", description: "A broad bib necklace in textured gold with long matching earrings. A strong piece for silk sarees and lehengas.", bridal: true },
  { slug: "multistone-rani-haar", name: "Multi-stone Rani Haar", collection: "necklace-sets", image: "/images/multistone-long-necklace.jpg", imageAlt: "Long necklace with green and pink stones, silver-tone pendant and matching earrings", price: 8900, material: "Silver-tone brass", stones: "Green and pink stones, faux pearls", finish: "Oxidised silver", size: "Long, 28 in", description: "A long rani haar with rows of green and pink stones and a carved pendant with a pearl fringe. Matching earrings included.", bestseller: true },
  { slug: "pastel-kundan-necklace-set", name: "Pastel Kundan Necklace Set", collection: "necklace-sets", image: "/images/pastel-kundan-necklace.jpg", imageAlt: "Kundan necklace with pastel stones, pearls and matching jhumka earrings", price: 6450, material: "Gold-plated brass", stones: "Kundan, pastel stones, faux pearls", finish: "Two-tone", size: "Adjustable cord", description: "Kundan work with soft pink and green stones and a pearl edge. Comes with matching earrings.", isNew: true },
  { slug: "antique-ruby-necklace-set", name: "Antique Ruby Necklace Set", collection: "necklace-sets", image: "/images/antique-ruby-necklace.jpg", imageAlt: "Antique gold necklace with ruby beads and chandbali earrings on a black stand", price: 11200, material: "Gold-plated brass", stones: "Ruby-red beads", finish: "Antique gold", size: "Adjustable cord", description: "A heavy antique-finish necklace with a central pendant and ruby bead drops, paired with chandbali earrings.", bridal: true },
  { slug: "red-stone-necklace-set", name: "Red Stone Necklace Set", collection: "necklace-sets", image: "/images/red-stone-necklace-set.jpg", imageAlt: "Gold necklace with green and red stones and matching earrings on red", price: 3950, compareAt: 4650, material: "Gold-plated brass", stones: "Green and red stones", finish: "Yellow gold", size: "Adjustable thread", description: "A light everyday necklace with small gold petals and green accents, with matching studs." },
  { slug: "emerald-teardrop-set", name: "Emerald Teardrop Set", collection: "necklace-sets", image: "/images/green-bust-set.jpg", imageAlt: "Gold necklace with green teardrop stones and earrings on a green stand", price: 5850, material: "Gold-plated brass", stones: "Green stones, American diamonds", finish: "Yellow gold", size: "Adjustable, 16 to 19 in", description: "A delicate necklace of gold links with green teardrop stones and matching long earrings.", isNew: true },

  // Earrings
  { slug: "ruby-teardrop-earrings", name: "Ruby Teardrop Earrings", collection: "earrings", image: "/images/ruby-drop-earrings.jpg", imageAlt: "Pair of teardrop earrings with ruby-red centres and white stones", price: 2450, material: "Rhodium-plated brass", stones: "American diamonds, ruby-red stones", finish: "Silver tone", size: "Drop length 6 cm", description: "Teardrop earrings with a ruby-red centre framed in white stones.", bestseller: true },
  { slug: "oxidised-silver-jhumka", name: "Oxidised Silver Jhumka", collection: "earrings", image: "/images/oxidised-jhumka.jpg", imageAlt: "Silver and gold-tone jhumka earrings with pearl beads", price: 1650, compareAt: 1990, material: "Brass", stones: "Faux pearls", finish: "Oxidised silver with gold tone", size: "Drop length 5 cm", description: "Two-tone jhumkas with a carved top and a fringe of small pearls. Light enough for all-day wear.", bestseller: true },
  { slug: "ruby-pearl-drop-earrings", name: "Ruby and Pearl Earrings", collection: "earrings", image: "/images/ruby-pearl-earrings.jpg", imageAlt: "Earring with a red stone cluster and a large pearl", price: 1950, material: "Gold-plated brass", stones: "Red stones, faux pearl", finish: "Yellow gold", size: "Drop length 3.5 cm", description: "A cluster of red stones above a single round pearl." },
  { slug: "pearl-gold-studs", name: "Pearl Gold Studs", collection: "earrings", image: "/images/pearl-gold-studs.jpg", imageAlt: "Pair of large pearl stud earrings with gold backs", price: 1250, material: "Gold-plated silver", stones: "Freshwater pearls", finish: "Yellow gold", size: "Pearl 10 mm", description: "Large freshwater pearls on gold-plated studs. A simple pair for every day.", isNew: true },
  { slug: "pearl-hoop-earrings", name: "Pearl Hoop Earrings", collection: "earrings", image: "/images/pearl-hoops.jpg", imageAlt: "Small gold hoop earrings with pearl drops", price: 1450, material: "Gold-plated silver", stones: "Freshwater pearls", finish: "Yellow gold", size: "Hoop 15 mm", description: "Small gold hoops with a pearl at the end. Easy to wear with western and Indian outfits." },
  { slug: "kundan-filigree-drops", name: "Kundan Filigree Drops", collection: "earrings", image: "/images/filigree-drop-earrings.jpg", imageAlt: "Long filigree drop earrings with clear stones on a stand", price: 2250, compareAt: 2650, material: "Gold-plated brass", stones: "Kundan", finish: "Light gold", size: "Drop length 7 cm", description: "Long open-work drops set with clear kundan stones. Statement earrings that stay light." },
  { slug: "antique-gold-studs", name: "Antique Gold Studs", collection: "earrings", image: "/images/gold-stud-earrings.jpg", imageAlt: "Round antique gold stud earrings with carved detail", price: 1850, material: "Gold-plated brass", stones: "None", finish: "Antique gold", size: "Stud 2 cm", description: "Round carved studs in antique gold that pair well with temple necklaces." },

  // Bangles
  { slug: "ruby-kada-bangles", name: "Ruby Kada Bangles", collection: "bangles", image: "/images/ruby-kada-bangles.jpg", imageAlt: "Stack of gold kada bangles set with round ruby-red stones", price: 5450, material: "Gold-plated brass", stones: "Ruby-red stones", finish: "Yellow gold", size: "2.4, 2.6, 2.8", description: "Broad kadas set with round ruby-red stones. Sold as a set of two.", bridal: true, bestseller: true },
  { slug: "textured-gold-bangle-set", name: "Textured Gold Bangle Set", collection: "bangles", image: "/images/gold-bangle-stack.jpg", imageAlt: "Stack of thin textured gold bangles on a dark surface", price: 4800, compareAt: 5650, material: "Gold-plated brass", stones: "None", finish: "Yellow gold", size: "2.4, 2.6, 2.8", description: "Six thin textured bangles that stack well together or with a kada.", bestseller: true },
  { slug: "american-diamond-bangles", name: "American Diamond Bangle Pair", collection: "bangles", image: "/images/ad-bangles.jpg", imageAlt: "Pair of gold bangles set with white American diamonds", price: 3650, material: "Gold-plated brass", stones: "American diamonds", finish: "Yellow gold", size: "2.4, 2.6, 2.8", description: "A pair of bangles set with square white stones for evening and party wear.", isNew: true },
  { slug: "twin-line-gold-bangles", name: "Twin Line Gold Bangles", collection: "bangles", image: "/images/gold-bangles-box.jpg", imageAlt: "Pair of gold bangles with clear stone accents beside a carved wooden box", price: 2950, material: "Gold-plated brass", stones: "Clear stones", finish: "Yellow gold", size: "2.4, 2.6, 2.8", description: "Slim double-line bangles with small clear stone accents. Sold as a pair." },
  { slug: "rose-gold-leaf-bangle", name: "Rose Gold Leaf Bangle", collection: "bangles", image: "/images/rose-gold-bangle.jpg", imageAlt: "Rose gold bangle with a leaf pattern on pink", price: 2150, material: "Rose gold-plated brass", stones: "Clear stones", finish: "Rose gold", size: "2.4, 2.6, 2.8", description: "A single rose gold bangle with an open leaf pattern.", isNew: true },
  { slug: "ruby-polki-bangles", name: "Ruby Polki Bangles", collection: "bangles", image: "/images/ruby-polki-bangles.jpg", imageAlt: "Pair of ornate gold bangles with ruby centres", price: 6250, compareAt: 7350, material: "Gold-plated brass", stones: "Polki-style stones, ruby-red stones", finish: "Antique gold", size: "2.4, 2.6, 2.8", description: "A wide, ornate pair with ruby centres and polki-style stones. Pairs with bridal sets.", bridal: true },
  { slug: "antique-ruby-kangan", name: "Antique Ruby Kangan", collection: "bangles", image: "/images/antique-gold-bangles.jpg", imageAlt: "Two gold bangles with ruby stones on velvet", price: 4350, material: "Gold-plated brass", stones: "Ruby-red stones", finish: "Antique gold", size: "2.4, 2.6, 2.8", description: "Textured antique-gold kangan with small ruby-red stones. Sold as a pair." },
  { slug: "classic-gold-bangle", name: "Classic Gold Bangle", collection: "bangles", image: "/images/gold-bangle-marble.jpg", imageAlt: "Plain gold bangle on a white marble dish", price: 1850, material: "Gold-plated brass", stones: "None", finish: "High-polish gold", size: "2.4, 2.6, 2.8", description: "A plain polished bangle for everyday wear. Add one or two to any stack." },

  // Rings
  { slug: "emerald-cut-solitaire-ring", name: "Emerald-cut Solitaire Ring", collection: "rings", image: "/images/solitaire-ring.jpg", imageAlt: "Gold ring with a large emerald-cut clear stone", price: 2650, material: "Gold-plated silver", stones: "Cubic zirconia", finish: "Yellow gold", size: "Adjustable", description: "A single emerald-cut stone on a fine band with side stones.", isNew: true },
  { slug: "pink-stone-halo-ring", name: "Pink Stone Halo Ring", collection: "rings", image: "/images/pink-halo-ring.jpg", imageAlt: "Rose gold ring with a pink rectangular stone and halo", price: 2350, compareAt: 2790, material: "Rose gold-plated silver", stones: "Pink stone, cubic zirconia", finish: "Rose gold", size: "Adjustable", description: "A pink rectangular stone framed by a halo of small clear stones." },
  { slug: "champagne-cluster-ring", name: "Champagne Cluster Ring", collection: "rings", image: "/images/rose-gold-cluster-ring.jpg", imageAlt: "Gold cocktail ring with a cluster of champagne stones", price: 1950, material: "Gold-plated brass", stones: "Champagne stones", finish: "Rose gold", size: "Adjustable", description: "A cocktail ring with a cluster of warm champagne-coloured stones." },
  { slug: "rose-gold-band-ring", name: "Rose Gold Band Ring", collection: "rings", image: "/images/diamond-band-ring.jpg", imageAlt: "Rose gold ring with a small square stone on a dark background", price: 1650, material: "Rose gold-plated silver", stones: "Cubic zirconia", finish: "Rose gold", size: "Sizes 6 to 9", description: "A slim rose gold band with a small square stone." },
  { slug: "floral-stacking-ring-set", name: "Floral Stacking Ring Set", collection: "rings", image: "/images/rings-tray.jpg", imageAlt: "Three floral gold rings in a white ring box", price: 2450, material: "Gold-plated silver", stones: "Cubic zirconia", finish: "Yellow gold", size: "Adjustable", description: "Three fine floral rings to wear together or apart.", bestseller: true },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsIn(slug: Collection["slug"]) {
  if (slug === "all") return products;
  if (slug === "festive-edit") return products.filter((p) => p.compareAt && p.compareAt > p.price);
  if (slug === "bridal") return products.filter((p) => p.bridal);
  return products.filter((p) => p.collection === slug);
}

export function relatedProducts(product: Product, count = 4) {
  return products.filter((p) => p.collection === product.collection && p.slug !== product.slug).slice(0, count);
}

export const categoryLinks = collections.filter((c) =>
  ["necklace-sets", "earrings", "bangles", "rings"].includes(c.slug),
);
