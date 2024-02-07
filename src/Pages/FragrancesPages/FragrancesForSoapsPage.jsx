import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_SoapsData } from "../../Data/Data";

const FragrancesForSoapsPage = () => {
  const Heading = "Fragrances For Soaps";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={Fragrances_SoapsData} />
    </div>
  );
};

export default FragrancesForSoapsPage;
