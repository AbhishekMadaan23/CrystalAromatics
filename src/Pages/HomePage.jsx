import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CompanyProfile from "../Components/CompanyProfile";
import OurProducts from "../Components/OurProducts";
import Industries from "../Components/Industries";
import Promo from "../Components/Promo";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CompanyProfile />
      <Promo />
      <OurProducts />
      <Industries />
    </div>
  );
};

export default HomePage;
