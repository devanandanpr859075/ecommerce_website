import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    title: "Shop Smarter, Live Better",
    description: "Find the best deals and exclusive offers only at AN Shopy.",
    bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    title: "Latest Gadgets, Unbeatable Prices",
    description: "Explore the newest tech and gadgets in our collection.",
    bg: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    title: "Upgrade Your Style",
    description: "Discover trendy fashion items to elevate your look.",
    bg: "bg-gradient-to-r from-green-400 to-blue-500",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slider__slide ${slide.bg} ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="hero-slider__content">
            <h2 className="hero-slider__title">{slide.title}</h2>
            <p className="hero-slider__description">{slide.description}</p>
            <button className="hero-slider__button">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
