"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type Story = { eyebrow: string; title: string; text: string; href: string; cta: string; image: string; alt: string };

// Coloured text panel beside a large photo, with dots to move between stories.
export default function StorySlider({ stories }: { stories: Story[] }) {
  const [i, setI] = useState(0);
  const s = stories[i];
  return (
    <section className="story">
      <div className="story__panel">
        <div className="story__text" aria-live="polite">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="title">{s.title}</h2>
          <p>{s.text}</p>
          <Link href={s.href} className="text-link">
            {s.cta}
          </Link>
        </div>
        <div className="story__dots">
          {stories.map((st, n) => (
            <button key={st.title} aria-label={`Show ${st.title}`} aria-current={n === i} className={n === i ? "is-active" : ""} onClick={() => setI(n)} />
          ))}
        </div>
      </div>
      <div className="story__img">
        {stories.map((st, n) => (
          <Image key={st.image} src={st.image} alt={st.alt} fill sizes="(max-width: 800px) 100vw, 66vw" className={n === i ? "is-active" : ""} />
        ))}
      </div>
    </section>
  );
}
