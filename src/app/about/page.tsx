import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "About us", description: "Astavita brings kundan, temple and everyday Indian jewellery online, at fair prices and with honest descriptions.", path: "/about", image: "/images/life-friends-kundan.jpg" });

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About us", path: "/about" }]} />
      <div className="wrap about">
        <div className="about__img">
          <Image src="/images/life-friends-kundan.jpg" alt="Two women wearing kundan necklaces and maang tikkas" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="prose">
          <h1>About Astavita</h1>
          <p>Astavita is an online jewellery store for kundan, temple, stone and everyday Indian jewellery.</p>
          <p>We choose each design for how it looks on the day you wear it, and we describe every piece plainly: what it is made of, what stones it uses and how big it is. Our jewellery is plated fashion jewellery, not solid gold, which keeps traditional designs within reach for festivals, weddings and everyday wear.</p>
          <h2>What we promise</h2>
          <ul>
            <li>Clear photos and honest product details.</li>
            <li>Careful packing in a box you can store your jewellery in.</li>
            <li>Cash on delivery and easy returns.</li>
            <li>A real person on the other end when you write to us.</li>
          </ul>
          <p>
            <Link href="/collections/all" className="btn btn--solid">
              Shop the collection
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
