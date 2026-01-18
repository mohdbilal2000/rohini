import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";
import styles from "./page.module.css";

export const metadata = {
    title: "Shopping Cart",
    description: "Review your cart and proceed to checkout at Heritage Artisans.",
};

// Sample cart items (in real app, would come from state/context)
const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[3], quantity: 2 },
];

export default function CartPage() {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 10000 ? 0 : 500;
    const total = subtotal + shipping;

    const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Shopping Cart" }];

    return (
        <>
            <div className="container">
                <Breadcrumbs items={breadcrumbs} />
            </div>

            <section className="section">
                <div className="container">
                    <h1 className={styles.title}>Shopping Cart</h1>

                    {cartItems.length > 0 ? (
                        <div className={styles.cartLayout}>
                            {/* Cart Items */}
                            <div className={styles.cartItems}>
                                <div className={styles.cartHeader}>
                                    <span className={styles.headerProduct}>Product</span>
                                    <span className={styles.headerPrice}>Price</span>
                                    <span className={styles.headerQuantity}>Quantity</span>
                                    <span className={styles.headerTotal}>Total</span>
                                </div>

                                {cartItems.map((item) => (
                                    <article key={item.id} className={styles.cartItem}>
                                        <div className={styles.itemProduct}>
                                            <Link
                                                href={`/product/${item.slug}`}
                                                className={styles.itemImageLink}
                                            >
                                                <div className={styles.itemImage}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        sizes="100px"
                                                        className={styles.image}
                                                    />
                                                </div>
                                            </Link>
                                            <div className={styles.itemDetails}>
                                                <p className={styles.itemCategory}>{item.category}</p>
                                                <h3 className={styles.itemName}>
                                                    <Link href={`/product/${item.slug}`}>{item.name}</Link>
                                                </h3>
                                                {item.artisan && (
                                                    <p className={styles.itemArtisan}>by {item.artisan}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className={styles.itemPrice}>
                                            <span className={styles.priceLabel}>Price:</span>
                                            <span>₹{item.price.toLocaleString("en-IN")}</span>
                                        </div>

                                        <div className={styles.itemQuantity}>
                                            <span className={styles.quantityLabel}>Quantity:</span>
                                            <div className={styles.quantityControl}>
                                                <button
                                                    type="button"
                                                    className={styles.quantityBtn}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className={styles.quantityValue}>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    className={styles.quantityBtn}
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className={styles.itemTotal}>
                                            <span className={styles.totalLabel}>Total:</span>
                                            <span className={styles.totalValue}>
                                                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                            </span>
                                        </div>

                                        <button
                                            type="button"
                                            className={styles.removeBtn}
                                            aria-label={`Remove ${item.name} from cart`}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </article>
                                ))}

                                <Link href="/category/pashmina-shawls" className={styles.continueLink}>
                                    <ArrowLeft size={16} />
                                    Continue Shopping
                                </Link>
                            </div>

                            {/* Order Summary */}
                            <aside className={styles.summary}>
                                <h2 className={styles.summaryTitle}>Order Summary</h2>

                                <div className={styles.summaryRow}>
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                                </div>

                                <div className={styles.summaryRow}>
                                    <span>Shipping</span>
                                    <span>
                                        {shipping === 0 ? (
                                            <span className={styles.freeShipping}>Free</span>
                                        ) : (
                                            `₹${shipping.toLocaleString("en-IN")}`
                                        )}
                                    </span>
                                </div>

                                {shipping === 0 && (
                                    <p className={styles.shippingNote}>
                                        You qualify for free shipping!
                                    </p>
                                )}

                                <div className={styles.summaryDivider} />

                                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                                    <span>Total</span>
                                    <span>₹{total.toLocaleString("en-IN")}</span>
                                </div>

                                <p className={styles.taxNote}>Including all applicable taxes</p>

                                <Button href="/checkout" size="lg" fullWidth>
                                    Proceed to Checkout
                                </Button>

                                <div className={styles.trustBadges}>
                                    <span>🔒 Secure Checkout</span>
                                    <span>📦 Free Returns</span>
                                </div>
                            </aside>
                        </div>
                    ) : (
                        <div className={styles.emptyCart}>
                            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
                            <p className={styles.emptyText}>
                                Discover our handcrafted treasures and add items to your cart.
                            </p>
                            <Button href="/category/pashmina-shawls" size="lg">
                                Start Shopping
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
