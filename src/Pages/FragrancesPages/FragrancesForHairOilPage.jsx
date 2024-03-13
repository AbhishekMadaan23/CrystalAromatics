import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_HairOilData } from "../../Data/Data";

const FragrancesForHairOilPage = () => {
  const Heading = "Fragrances For Hair Oil";
  return (
    <div className="bg-gradient-to-r from-white via-red-100  to-red-200">
      <PaginatedTableV2 Heading={Heading} data={Fragrances_HairOilData} />
    </div>
  );
};

export default FragrancesForHairOilPage;
