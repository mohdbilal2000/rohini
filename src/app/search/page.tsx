import { ProductGrid } from "@/components/ProductCard";
import { products } from "@/lib/catalog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Search", description: "Search Astavita jewellery.", path: "/search", noIndex: true });

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const results = terms.length
    ? products.filter((p) => {
        const hay = `${p.name} ${p.collection} ${p.material} ${p.stones} ${p.finish} ${p.description}`.toLowerCase();
        return terms.every((t) => hay.includes(t));
      })
    : [];

  return (
    <>
      <header className="page-head wrap">
        <h1>Search</h1>
        <form action="/search" className="searchbar" role="search">
          <label htmlFor="q" className="sr-only">
            Search jewellery
          </label>
          <input id="q" name="q" type="search" defaultValue={q} placeholder="Try jhumka, kundan, ruby, bangles" />
          <button className="btn btn--solid" type="submit">
            Search
          </button>
        </form>
      </header>
      <div className="wrap page-pad">
        {terms.length > 0 && (
          <p className="muted">
            {results.length} {results.length === 1 ? "result" : "results"} for “{q}”
          </p>
        )}
        {results.length > 0 && <ProductGrid products={results} />}
      </div>
    </>
  );
}
