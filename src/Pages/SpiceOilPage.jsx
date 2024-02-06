import React from "react";
import PaginatedTableV2 from "../Components/PaginatedTableV2";
import { SpiceOilData } from "../Data/Data";

const SpiceOilPage = () => {
  const Heading = "Spice Oils";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={SpiceOilData} />
    </div>
  );
};

export default SpiceOilPage;
