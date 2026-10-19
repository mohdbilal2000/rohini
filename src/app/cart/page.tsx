import CartView from "@/components/CartView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Your bag", description: "Review the pieces in your bag.", path: "/cart", noIndex: true });

export default function CartPage() {
  return (
    <>
      <header className="page-head wrap">
        <h1>Your bag</h1>
      </header>
      <CartView />
    </>
  );
}
