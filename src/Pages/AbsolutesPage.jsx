import React from "react";
import PaginatedTable from "../Components/PaginatedTable";
import { AbsolutesData } from "../Data/Data";

const AbsolutesPage = () => {
  return (
    <div>
      <PaginatedTable Heading="Absolutes" data={AbsolutesData} />
    </div>
  );
};

export default AbsolutesPage;
