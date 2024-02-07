import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_FacePackData } from "../../Data/Data";

const FragrancesForFacePackPage = () => {
  const Heading = "Fragrances For Face Pack";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={Fragrances_FacePackData} />
    </div>
  );
};

export default FragrancesForFacePackPage;
