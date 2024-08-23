// pages/index.js
import React from 'react';
import ProductPreview from '../components/ProductPreview';
import "@/app/styles/ProductPreview.module.css"; 
import Category from '../components/Category';


const products = [
  {
    name: "Minimalist Black Watch",
    description: "A sleek, understated design for a modern look.",
    price: "$199.99",
    image: "/images/women-1.jpg"
  },
  {
    name: "Chronograph Watch",
    description: "A bold timepiece with multiple functions.",
    price: "$29.99",
    image: "/images/women-2.jpg"
  }, 
  {
    name: "Vintage Leather Watch",
    description: "A classic design with a genuine leather strap for timeless style.",
    price: "$19.99",
    image: "/images/women-3.jpg"
  },
  {
    name: "Smart Fitness Watch",
    description: "Track your fitness with style using this advanced smart watch.",
    price: "$24.99",
    image: "/images/men-4.jpg"
  },
  {
    name: "Luxury Gold Watch",
    description: "An elegant gold-plated watch for those special occasions.",
    price: "$49.99",
    image: "/images/women-4.jpg"
  },
  {
    name: "Sport Chronograph",
    description: "Rugged and reliable, perfect for the active adventurer.",
    price: "$99.99",
    image: "/images/women-5.jpg"
  }
];

const MenWatches = () => {
  return (
    <>
    <Category/>
   
    <section>
    <div className='product-preview-mens'>
      <h1>Product Previews</h1>
      <div className='product-preview-mens-container'>
        {products.map(product => (
          <ProductPreview key={product.name} product={product} />
        ))}
      </div>
    </div>
    </section>
    </>
  );
};

export default MenWatches ;
