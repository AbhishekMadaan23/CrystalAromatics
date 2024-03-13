import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_SoapsData } from "../../Data/Data";

const FragrancesForSoapsPage = () => {
  const Heading = "Fragrances For Soaps";
  return (
    <div className="bg-gradient-to-r from-white via-red-100  to-red-200">
      <PaginatedTableV2 Heading={Heading} data={Fragrances_SoapsData} />
    </div>
  );
};

export default FragrancesForSoapsPage;
