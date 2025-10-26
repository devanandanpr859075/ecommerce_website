import React from 'react';
import "./Category.css";

const CategoryCard = ({ img, name }) => (
  <div className="category-card">
    <div className="category-card__image-wrapper">
      <img src={img} alt={name} className="category-card__image" />
    </div>
    <p className="category-card__name">{name}</p>
  </div>
);

export default CategoryCard;