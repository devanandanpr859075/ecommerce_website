import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/Category/CategorySection";
import FeaturedProductBanner from "../components/FeaturedProductBanner";
import PopularProductsSection from "../components/PopularProductsSection";
import ServiceBlock from "../components/ServiceBlock";
import LatestArrivalsSection from '../components/LatestArrivalsSection';
import AdSection from '../components/AdSection/AdSection';
import AllProductsSection from '../components/AllProductsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <HeroSlider />
      <CategorySection />
      <AdSection />
       <LatestArrivalsSection />
      <PopularProductsSection />
       <ServiceBlock />
      <FeaturedProductBanner />
      <AllProductsSection />
      <Footer />
    </div>
  );
};

export default Home;
