import Link from "next/link";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        {all.map((it, n) =>
          n < all.length - 1 ? (
            <span key={it.path}>
              <Link href={it.path}>{it.name}</Link>
              <span aria-hidden="true"> / </span>
            </span>
          ) : (
            <span key={it.path} aria-current="page">
              {it.name}
            </span>
          ),
        )}
      </nav>
      <JsonLd data={breadcrumbLd(all)} />
    </>
  );
}
