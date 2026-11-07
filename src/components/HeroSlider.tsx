"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export type Slide = { image: string; alt: string; href: string; position?: string };

// Full-bleed hero that fades between photos, sitting under the transparent header.
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(i + 1), 5500);
    return () => clearTimeout(t);
  }, [i, go]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured jewellery">
      {slides.map((s, n) => (
        <Link key={s.image} href={s.href} className={n === i ? "hero__slide is-active" : "hero__slide"} aria-hidden={n !== i} tabIndex={n === i ? 0 : -1}>
          <Image src={s.image} alt={s.alt} fill priority={n === 0} sizes="100vw" style={{ objectPosition: s.position ?? "center 30%" }} />
        </Link>
      ))}
      <div className="hero__dots">
        {slides.map((s, n) => (
          <button key={s.image} aria-label={`Show slide ${n + 1}`} aria-current={n === i} className={n === i ? "is-active" : ""} onClick={() => go(n)} />
        ))}
      </div>
    </section>
  );
}
