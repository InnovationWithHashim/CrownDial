// app/page.tsx or pages/index.tsx
import "@/app/styles/herosection.css";
import Image from "next/image";
import Link from 'next/link';

const Herosection = () => {
  return (
    <main className="main-section">
        <div className="hero-section">
      <div className="hero-content">
        <h1>Discover Timeless Elegance</h1>
        <p>"Explore our exclusive collection of luxury and stylish watches for every occasion." </p>
        <Link href="/collections" className="hero-button">Shop Now</Link>
      </div>
      <div className="hero-image">
        <Image
          src="/images/main-pic.jpeg"
          alt="Picture of a woman in the gym"
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      </div>
      <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-container">
      <div className="product-item">
        <h3>Classic Leather Watch</h3>
        <p>Description: Elegant and durable, perfect for any formal occasion.</p>
        <span>Price: $199.99</span>
        <Link href="/collections" className="hero-button">Shop Now</Link>
      </div>
      <div className="product-item">
        <h3>Sleek Stainless Steel Watch</h3>
        <p>Description: A modern design that combines style with functionality.</p>
        <span>Price: $249.99</span>
        <Link href="/collections" className="hero-button">Shop Now</Link>
      </div>
      </div>
    </section>
    </main>
  );
}

export default Herosection;
