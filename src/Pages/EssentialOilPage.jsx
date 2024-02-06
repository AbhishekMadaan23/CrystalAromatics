import React from "react";
import PaginatedTable from "../Components/PaginatedTable";
import { EssentialOilData } from "../Data/Data";
import Footer from "../Components/Footer";

const EssentialOilPage = () => {
  const Heading = "Essential Oils";
  return (
    <div>
      <PaginatedTable Heading={Heading} data={EssentialOilData} />
      <Footer />
    </div>
  );
};

export default EssentialOilPage;
