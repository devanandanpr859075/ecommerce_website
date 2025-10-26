import React from "react";

const ProductCard = ({ name, price, img }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center">
    <img src={img} alt={name} className="mx-auto mb-3 rounded-md" />
    <h4 className="font-semibold">{name}</h4>
    <p className="text-accent font-bold">{price}</p>
    <button className="mt-2 bg-accent text-white px-4 py-1 rounded-lg hover:bg-blue-700">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
