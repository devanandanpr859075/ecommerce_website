import React from "react";
import ProductCard from "./Product/ProductCard";
import "./PopularProducts.css";

const products = [
  { id: 1, name: "Smart Watch", price: "₹2499", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Bluetooth Speaker", price: "₹999", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Wireless Earbuds", price: "₹1499", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Sneakers", price: "₹1999", img: "https://via.placeholder.com/150" },
];

const PopularProductsSection = () => (
  <section className="popular-products-section">
    <h3 className="popular-products-section__title">Popular Products</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default PopularProductsSection;
