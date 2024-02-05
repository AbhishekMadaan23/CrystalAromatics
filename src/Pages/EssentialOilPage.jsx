import React from "react";
import PaginatedTable from "../Components/PaginatedTable";
import { EssentialOilData } from "../Data/Data";

const EssentialOilPage = () => {
  const Heading = "Essential Oils";
  return (
    <div>
      <PaginatedTable Heading={Heading} data={EssentialOilData} />
    </div>
  );
};

export default EssentialOilPage;
