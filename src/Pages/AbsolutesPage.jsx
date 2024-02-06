import React from "react";
import PaginatedTableV2 from "../Components/PaginatedTableV2";
import { AbsolutesData } from "../Data/Data";

const AbsolutesPage = () => {
  return (
    <div>
      <PaginatedTableV2 Heading="Absolutes" data={AbsolutesData} />
    </div>
  );
};

export default AbsolutesPage;
