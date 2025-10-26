import React from "react";
import ProductCard from "./Product/ProductCard";
import "./LatestArrivals.css";

const products = [
  { id: 5, name: "New Headphones", price: "₹3499", img: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=New" },
  { id: 6, name: "Gaming Mouse", price: "₹1299", img: "https://via.placeholder.com/150/5F9EA0/FFFFFF?text=New" },
  { id: 7, name: "4K Monitor", price: "₹15499", img: "https://via.placeholder.com/150/DC143C/FFFFFF?text=New" },
  { id: 8, name: "Mechanical Keyboard", price: "₹4999", img: "https://via.placeholder.com/150/2E8B57/FFFFFF?text=New" },
];

const LatestArrivalsSection = () => (
  <section className="latest-arrivals-section">
    <h3 className="latest-arrivals-section__title">LATEST ARRIVALS</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default LatestArrivalsSection;