"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = { slug: string; qty: number; size?: string };

type CartState = {
  lines: CartLine[];
  ready: boolean;
  count: number;
  add: (slug: string, qty?: number, size?: string) => void;
  setQty: (slug: string, size: string | undefined, qty: number) => void;
  remove: (slug: string, size?: string) => void;
  clear: () => void;
};

const KEY = "astavita-cart-v1";
const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage once, after mount
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {}
  }, [lines, ready]);

  const same = (l: CartLine, slug: string, size?: string) => l.slug === slug && (l.size ?? "") === (size ?? "");

  const add = useCallback((slug: string, qty = 1, size?: string) => {
    setLines((cur) => {
      const hit = cur.find((l) => same(l, slug, size));
      if (hit) return cur.map((l) => (same(l, slug, size) ? { ...l, qty: Math.min(10, l.qty + qty) } : l));
      return [...cur, { slug, qty, size }];
    });
  }, []);

  const setQty = useCallback((slug: string, size: string | undefined, qty: number) => {
    setLines((cur) =>
      qty <= 0 ? cur.filter((l) => !same(l, slug, size)) : cur.map((l) => (same(l, slug, size) ? { ...l, qty: Math.min(10, qty) } : l)),
    );
  }, []);

  const remove = useCallback((slug: string, size?: string) => {
    setLines((cur) => cur.filter((l) => !same(l, slug, size)));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(
    () => ({ lines, ready, count: lines.reduce((n, l) => n + l.qty, 0), add, setQty, remove, clear }),
    [lines, ready, add, setQty, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
