import React, { useState, useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import "./Category.css";

const categories = [
  { name: "Electronics", img: "https://imgs.search.brave.com/4vF5-VINQutgfUoOfouWEq3FOHwtZ5f6MuX8f_IkyQo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9nYWRn/ZXRzLWFjY2Vzc29y/aWVzLWdhZGdldHMt/YWNjZXNzb3JpZXMt/aXNvbGF0ZWQtd2hp/dGUtYmFja2dyb3Vu/ZC0xMzM0MjkwMDQu/anBn" },
  { name: "Fashion", img: "https://via.placeholder.com/100" },
  { name: "Home", img: "https://via.placeholder.com/100" },
  { name: "Toys", img: "https://via.placeholder.com/100" },
  { name: "Books", img: "https://via.placeholder.com/100" },
  { name: "Sports", img: "https://via.placeholder.com/100" },
  { name: "Beauty", img: "https://via.placeholder.com/100" },
];

const CategorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [numDots, setNumDots] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const checkScrollable = () => {
      if (gridRef.current) {
        const { scrollWidth, clientWidth } = gridRef.current;
        const isNowScrollable = scrollWidth > clientWidth;
        setIsScrollable(isNowScrollable);
        setShowNext(isNowScrollable);
        setShowPrev(gridRef.current.scrollLeft > 0);
        if (isNowScrollable) {
          // Calculate pages based on item width for more accuracy
          setNumDots(Math.ceil(scrollWidth / clientWidth));
        }
      }
    };

    // Check on mount and when categories change
    checkScrollable();

    // Re-check on window resize
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [categories]);

  const handleScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = gridRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth); // For dots
      setActiveIndex(newIndex);

      // For arrow buttons visibility
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 1); // -1 for floating point precision
    }
  };

  const scroll = (direction) => {
    if (gridRef.current) {
      const { clientWidth } = gridRef.current;
      const scrollAmount = direction === 'next' ? clientWidth : -clientWidth;
      gridRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="category-section">
      <h3 className="category-section__title">Shop by Category</h3>
      <div className="category-scroll-container">
        {showPrev && <button className="scroll-arrow prev" onClick={() => scroll('prev')}>&#8249;</button>}
        <div
          className="category-section__grid"
          ref={gridRef}
          onScroll={handleScroll}
        >
          {categories.map((cat, index) => (
            <CategoryCard key={`${cat.name}-${index}`} name={cat.name} img={cat.img} />
          ))}
        </div>
        {showNext && <button className="scroll-arrow next" onClick={() => scroll('next')}>&#8250;</button>}
      </div>
      {isScrollable && (
        <div className="category-section__dots">
          {Array.from({ length: numDots }).map((_, index) => (
            <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></span>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
