import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-pad empty">
      <h1>Page not found</h1>
      <p>The page you were looking for has moved or no longer exists.</p>
      <Link href="/collections/all" className="btn btn--solid">
        Shop all jewellery
      </Link>
    </div>
  );
}
