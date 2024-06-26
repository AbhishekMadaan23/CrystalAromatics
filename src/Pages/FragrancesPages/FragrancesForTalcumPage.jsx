import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_TalcumData } from "../../Data/Data";

const FragrancesForTalcumPage = () => {
  const Heading = "Fragrances For Talcum";
  return (
    <div className="bg-gradient-to-r from-white via-red-100  to-red-200">
      <PaginatedTableV2 Heading={Heading} data={Fragrances_TalcumData} />
    </div>
  );
};

export default FragrancesForTalcumPage;
