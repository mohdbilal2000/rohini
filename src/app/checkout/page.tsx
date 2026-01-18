"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Lock } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";
import styles from "./page.module.css";

// Sample cart items
const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[3], quantity: 2 },
];

export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        country: "India",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        const newErrors: Record<string, string> = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.pincode) newErrors.pincode = "PIN code is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit form
        alert("Order placed successfully!");
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 10000 ? 0 : 500;
    const total = subtotal + shipping;

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Cart", href: "/cart" },
        { label: "Checkout" },
    ];

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
        "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
        "Uttarakhand", "West Bengal",
    ];

    return (
        <>
            <div className="container">
                <Breadcrumbs items={breadcrumbs} />
            </div>

            <section className="section">
                <div className="container">
                    <div className={styles.layout}>
                        {/* Checkout Form */}
                        <div className={styles.formSection}>
                            <Link href="/cart" className={styles.backLink}>
                                <ChevronLeft size={18} />
                                Return to Cart
                            </Link>

                            <h1 className={styles.title}>Checkout</h1>

                            <form onSubmit={handleSubmit} className={styles.form} noValidate>
                                {/* Contact Information */}
                                <section className={styles.formGroup}>
                                    <h2 className={styles.groupTitle}>Contact Information</h2>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email Address <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                            placeholder="your@email.com"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        {errors.email && (
                                            <p id="email-error" className={styles.error}>
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="phone" className={styles.label}>
                                            Phone Number <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                                            placeholder="+91 12345 67890"
                                            aria-invalid={!!errors.phone}
                                        />
                                        {errors.phone && (
                                            <p className={styles.error}>{errors.phone}</p>
                                        )}
                                    </div>
                                </section>

                                {/* Shipping Address */}
                                <section className={styles.formGroup}>
                                    <h2 className={styles.groupTitle}>Shipping Address</h2>

                                    <div className={styles.row}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="firstName" className={styles.label}>
                                                First Name <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`${styles.input} ${errors.firstName ? styles.inputError : ""}`}
                                                aria-invalid={!!errors.firstName}
                                            />
                                            {errors.firstName && (
                                                <p className={styles.error}>{errors.firstName}</p>
                                            )}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="lastName" className={styles.label}>
                                                Last Name <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`${styles.input} ${errors.lastName ? styles.inputError : ""}`}
                                                aria-invalid={!!errors.lastName}
                                            />
                                            {errors.lastName && (
                                                <p className={styles.error}>{errors.lastName}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label htmlFor="address" className={styles.label}>
                                            Address <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className={`${styles.input} ${errors.address ? styles.inputError : ""}`}
                                            placeholder="House number, Street name, Area"
                                            aria-invalid={!!errors.address}
                                        />
                                        {errors.address && (
                                            <p className={styles.error}>{errors.address}</p>
                                        )}
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="city" className={styles.label}>
                                                City <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`${styles.input} ${errors.city ? styles.inputError : ""}`}
                                                aria-invalid={!!errors.city}
                                            />
                                            {errors.city && (
                                                <p className={styles.error}>{errors.city}</p>
                                            )}
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="pincode" className={styles.label}>
                                                PIN Code <span className={styles.required}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="pincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                className={`${styles.input} ${errors.pincode ? styles.inputError : ""}`}
                                                aria-invalid={!!errors.pincode}
                                            />
                                            {errors.pincode && (
                                                <p className={styles.error}>{errors.pincode}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="state" className={styles.label}>
                                                State
                                            </label>
                                            <select
                                                id="state"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className={styles.select}
                                            >
                                                <option value="">Select State</option>
                                                {states.map((state) => (
                                                    <option key={state} value={state}>
                                                        {state}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="country" className={styles.label}>
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className={styles.input}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </section>

                                {/* Submit */}
                                <Button type="submit" size="lg" fullWidth>
                                    <Lock size={18} />
                                    Place Order • ₹{total.toLocaleString("en-IN")}
                                </Button>

                                <p className={styles.secureNote}>
                                    <Lock size={14} />
                                    Your payment information is secure and encrypted
                                </p>
                            </form>
                        </div>

                        {/* Order Summary Sidebar */}
                        <aside className={styles.summary}>
                            <h2 className={styles.summaryTitle}>Order Summary</h2>

                            <div className={styles.items}>
                                {cartItems.map((item) => (
                                    <div key={item.id} className={styles.summaryItem}>
                                        <div className={styles.summaryItemImage}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                sizes="60px"
                                                className={styles.itemImage}
                                            />
                                            <span className={styles.itemQuantity}>{item.quantity}</span>
                                        </div>
                                        <div className={styles.summaryItemDetails}>
                                            <p className={styles.summaryItemName}>{item.name}</p>
                                            <p className={styles.summaryItemCategory}>{item.category}</p>
                                        </div>
                                        <span className={styles.summaryItemPrice}>
                                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.summaryDivider} />

                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
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

                            <div className={styles.summaryDivider} />

                            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                                <span>Total</span>
                                <span>₹{total.toLocaleString("en-IN")}</span>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
