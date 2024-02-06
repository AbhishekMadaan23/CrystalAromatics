import React from "react";
import PaginatedTableV2 from "../Components/PaginatedTableV2";
import { AromatherapyOilData } from "../Data/Data";

const AromatherapyOilPage = () => {
  const Heading = "Aromatherapy Oils";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={AromatherapyOilData} />
    </div>
  );
};

export default AromatherapyOilPage;
