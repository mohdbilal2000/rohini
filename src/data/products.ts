import { Product } from "@/components/ui/ProductCard";

export const products: Product[] = [
    // Jewellery
    {
        id: "1",
        slug: "kundan-bridal-necklace-set",
        name: "Kundan Bridal Necklace Set",
        price: 85000,
        originalPrice: 95000,
        image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
        category: "Jewellery",
        artisan: "Jaipur Jewels",
        isBestseller: true,
    },
    {
        id: "2",
        slug: "polki-diamond-earrings",
        name: "Polki Diamond Earrings",
        price: 45000,
        image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
        category: "Jewellery",
        artisan: "Royal Gems",
        isNew: true,
    },
    // Pashmina Shawls
    {
        id: "3",
        slug: "royal-kani-pashmina-shawl",
        name: "Royal Kani Pashmina Shawl",
        price: 45000,
        originalPrice: 52000,
        image:
            "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&q=80",
        category: "Pashmina Shawls",
        artisan: "Master Ghulam Nabi",
        isBestseller: true,
    },
    {
        id: "4",
        slug: "hand-embroidered-sozni-shawl",
        name: "Hand-Embroidered Sozni Shawl",
        price: 28000,
        originalPrice: 32000,
        image:
            "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=600&q=80",
        category: "Pashmina Shawls",
        artisan: "Fatima Begum",
    },
    // Women's Clothing
    {
        id: "5",
        slug: "banarasi-silk-saree",
        name: "Banarasi Silk Saree",
        price: 35000,
        originalPrice: 42000,
        image:
            "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
        category: "Women's Clothing",
        artisan: "Varanasi Weavers",
        isBestseller: true,
    },
    {
        id: "6",
        slug: "chanderi-anarkali-suit",
        name: "Chanderi Anarkali Suit",
        price: 18500,
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        category: "Women's Clothing",
        artisan: "Chanderi Creations",
        isNew: true,
    },
    // Men's Clothing
    {
        id: "7",
        slug: "lucknowi-chikan-kurta",
        name: "Lucknowi Chikan Kurta",
        price: 8500,
        image:
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        category: "Men's Clothing",
        artisan: "Lucknow Threads",
        isNew: true,
    },
    {
        id: "8",
        slug: "embroidered-sherwani",
        name: "Embroidered Sherwani",
        price: 65000,
        originalPrice: 75000,
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        category: "Men's Clothing",
        artisan: "Delhi Couture",
        isBestseller: true,
    },
    // Essential Oils
    {
        id: "9",
        slug: "pure-sandalwood-oil",
        name: "Pure Sandalwood Essential Oil",
        price: 3500,
        image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80",
        category: "Essential Oils",
        artisan: "Mysore Aromatics",
        isBestseller: true,
    },
    {
        id: "10",
        slug: "rose-otto-essential-oil",
        name: "Rose Otto Essential Oil",
        price: 4200,
        originalPrice: 4800,
        image:
            "https://images.unsplash.com/photo-1600428853876-fb5a50882329?w=600&q=80",
        category: "Essential Oils",
        artisan: "Kannauj Distillers",
        isNew: true,
    },
    // Perfumes
    {
        id: "11",
        slug: "royal-oud-attar",
        name: "Royal Oud Attar",
        price: 12000,
        originalPrice: 15000,
        image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
        category: "Perfumes",
        artisan: "Kannauj Perfumery",
        isBestseller: true,
    },
    {
        id: "12",
        slug: "mogra-jasmine-attar",
        name: "Mogra Jasmine Attar",
        price: 5500,
        image:
            "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&q=80",
        category: "Perfumes",
        artisan: "Grasse of India",
        isNew: true,
    },
];

export const featuredProducts = products.filter(
    (p) => p.isBestseller || p.isNew
);

export const newArrivals = products.filter((p) => p.isNew);

export const bestsellers = products.filter((p) => p.isBestseller);
