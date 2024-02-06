import React from "react";
import PaginatedTableV2 from "../Components/PaginatedTableV2";
import { CarrierOilData } from "../Data/Data";

const CarrierOilPage = () => {
  const Heading = "Carrier Oils";
  return (
    <div>
      <PaginatedTableV2 Heading={Heading} data={CarrierOilData} />
    </div>
  );
};

export default CarrierOilPage;
