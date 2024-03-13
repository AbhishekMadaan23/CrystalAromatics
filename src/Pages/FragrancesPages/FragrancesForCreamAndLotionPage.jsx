import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_CreamLotionData } from "../../Data/Data";
const FragrancesForCreamAndLotionPage = () => {
  const Heading = "Fragrances For Cream And Lotion";
  return (
    <div className="bg-gradient-to-r from-white via-red-100  to-red-200">
      <PaginatedTableV2 Heading={Heading} data={Fragrances_CreamLotionData} />
    </div>
  );
};

export default FragrancesForCreamAndLotionPage;
