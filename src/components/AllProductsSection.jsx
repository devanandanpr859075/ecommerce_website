import React from "react";
import ProductCard from "./Product/ProductCard";
import "./AllProducts.css";

const products = [
  { id: 1, name: "Smart Watch", price: "₹2499", img: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Sale" },
  { id: 2, name: "Bluetooth Speaker", price: "₹999", img: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Audio" },
  { id: 5, name: "New Headphones", price: "₹3499", img: "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=New" },
  { id: 4, name: "Sneakers", price: "₹1999", img: "https://via.placeholder.com/150/20B2AA/FFFFFF?text=Fashion" },
  { id: 6, name: "Gaming Mouse", price: "₹1299", img: "https://via.placeholder.com/150/5F9EA0/FFFFFF?text=Gaming" },
  { id: 7, name: "4K Monitor", price: "₹15499", img: "https://via.placeholder.com/150/DC143C/FFFFFF?text=HD" },
  { id: 3, name: "Wireless Earbuds", price: "₹1499", img: "https://via.placeholder.com/150/6A5ACD/FFFFFF?text=Audio" },
  { id: 8, name: "Mechanical Keyboard", price: "₹4999", img: "https://via.placeholder.com/150/2E8B57/FFFFFF?text=Gaming" },
];

const AllProductsSection = () => (
  <section className="all-products-section">
    <h3 className="all-products-section__title">All Products</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
    <div className="all-products-section__footer">
      <button className="all-products-section__view-all-btn">
        View All Products
      </button>
    </div>
  </section>
);

export default AllProductsSection;