"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Each slide has a photo and its own caption block shown below it, as on Kesya.
export type Slide = {
  image: string;
  alt: string;
  href: string;
  eyebrow: string;
  title: string;
  italic: string;
  cta: string;
  position?: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [slides.length]);
  const s = slides[i];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(i + 1), 6000);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <section aria-roledescription="carousel" aria-label="Featured collections" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero">
        {slides.map((sl, n) => (
          <Link
            key={sl.image}
            href={sl.href}
            className={n === i ? "hero__slide is-active" : "hero__slide"}
            aria-hidden={n !== i}
            tabIndex={n === i ? 0 : -1}
            aria-label={`${sl.title} ${sl.italic}`}
          >
            <Image src={sl.image} alt={sl.alt} fill priority={n === 0} sizes="100vw" style={{ objectPosition: sl.position ?? "center 30%" }} />
          </Link>
        ))}
        <button className="hero__arrow hero__arrow--prev" aria-label="Previous slide" onClick={() => go(i - 1)}>
          <ChevronLeft size={34} strokeWidth={1} />
        </button>
        <button className="hero__arrow hero__arrow--next" aria-label="Next slide" onClick={() => go(i + 1)}>
          <ChevronRight size={34} strokeWidth={1} />
        </button>
        <div className="hero__dots">
          {slides.map((sl, n) => (
            <button key={sl.image} aria-label={`Show slide ${n + 1}`} aria-current={n === i} className={n === i ? "is-active" : ""} onClick={() => go(n)} />
          ))}
        </div>
      </div>
      <div className="hero__caption" aria-live="polite">
        <p className="eyebrow">{s.eyebrow}</p>
        <h2 className="display">
          {s.title} <em>{s.italic}</em>
        </h2>
        <Link href={s.href} className="btn">
          {s.cta}
        </Link>
      </div>
    </section>
  );
}
