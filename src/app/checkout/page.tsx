import CheckoutForm from "@/components/CheckoutForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Checkout", description: "Enter your delivery details to place your order.", path: "/checkout", noIndex: true });

export default function CheckoutPage() {
  return (
    <>
      <header className="page-head wrap">
        <h1>Checkout</h1>
      </header>
      <CheckoutForm />
    </>
  );
}
