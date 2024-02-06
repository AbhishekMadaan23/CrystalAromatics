import React from "react";
import { AromaticChemicalsData } from "../Data/Data";
import PaginatedTableV2 from "../Components/PaginatedTableV2";

const AromaticChemicalsPage = () => {
  const Heading = "Aromatic Chemicals";
  return (
    <div>
      <PaginatedTableV2 data={AromaticChemicalsData} Heading={Heading} />
    </div>
  );
};

export default AromaticChemicalsPage;
