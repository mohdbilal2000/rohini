"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { image: string; alt: string; href: string; label: string; position?: string };

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(i + 1), 6000);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured jewellery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, n) => (
        <Link
          key={s.image}
          href={s.href}
          className={n === i ? "hero__slide is-active" : "hero__slide"}
          aria-hidden={n !== i}
          tabIndex={n === i ? 0 : -1}
          aria-label={s.label}
        >
          <Image src={s.image} alt={s.alt} fill priority={n === 0} sizes="100vw" style={{ objectPosition: s.position ?? "center 30%" }} />
        </Link>
      ))}
      <button className="hero__arrow hero__arrow--prev" aria-label="Previous slide" onClick={() => go(i - 1)}>
        <ChevronLeft size={32} strokeWidth={1.25} />
      </button>
      <button className="hero__arrow hero__arrow--next" aria-label="Next slide" onClick={() => go(i + 1)}>
        <ChevronRight size={32} strokeWidth={1.25} />
      </button>
      <div className="hero__dots">
        {slides.map((s, n) => (
          <button key={s.image} aria-label={`Show slide ${n + 1}`} aria-current={n === i} className={n === i ? "is-active" : ""} onClick={() => go(n)} />
        ))}
      </div>
    </section>
  );
}
