"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.gallery}>
            {/* Main Image */}
            <div className={styles.mainImageWrapper}>
                <Image
                    src={images[currentIndex]}
                    alt={`${productName} - Image ${currentIndex + 1}`}
                    fill
                    priority
                    className={styles.mainImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={goToPrevious}
                            className={`${styles.navBtn} ${styles.navBtnLeft}`}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            type="button"
                            onClick={goToNext}
                            className={`${styles.navBtn} ${styles.navBtnRight}`}
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                    <div className={styles.counter}>
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className={styles.thumbnails}>
                    {images.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={`${styles.thumbnail} ${index === currentIndex ? styles.thumbnailActive : ""
                                }`}
                            aria-label={`View image ${index + 1}`}
                            aria-current={index === currentIndex ? "true" : undefined}
                        >
                            <Image
                                src={image}
                                alt={`${productName} thumbnail ${index + 1}`}
                                fill
                                className={styles.thumbnailImage}
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
