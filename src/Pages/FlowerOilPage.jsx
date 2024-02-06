import React from "react";
import PaginatedTableV2 from "../Components/PaginatedTableV2";
import { FlowerOilData } from "../Data/Data";

const FlowerOilPage = () => {
  const Heading = "Flower Oils";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={FlowerOilData} />
    </div>
  );
};

export default FlowerOilPage;
