import React from "react";
import PaginatedTableV2 from "../Components/PaginatedTableV2";
import { AromatherapyOilData } from "../Data/Data";
import Footer from "../Components/Footer";
import PaginatedTable from "../Components/PaginatedTable";

const AromatherapyOilPage = () => {
  const Heading = "Aromatherapy Oils";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={AromatherapyOilData} />
      <Footer />
    </div>
  );
};

export default AromatherapyOilPage;
