import React from "react";
import PaginatedTableV3 from "../Components/PaginatedTableV3";
import { AromatherapyOilData } from "../Data/Data";

const AromatherapyOilPage = () => {
  const Heading = "Aromatherapy Oils";
  return (
    <div>
      <PaginatedTableV3 Heading={Heading} data={AromatherapyOilData} />
    </div>
  );
};

export default AromatherapyOilPage;
