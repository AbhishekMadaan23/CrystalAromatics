import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CompanyProfile from "../Components/CompanyProfile";
import OurProducts from "../Components/OurProducts";
import Industries from "../Components/Industries";
import Promo from "../Components/Promo";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <CompanyProfile />
      <Promo />
      <OurProducts />
      <Industries />
      <Footer />
    </div>
  );
};

export default HomePage;
