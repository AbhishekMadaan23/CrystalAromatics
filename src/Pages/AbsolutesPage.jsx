import React from "react";
import PaginatedTable from "../Components/PaginatedTable";
import { AbsolutesData } from "../Data/Data";
import Footer from "../Components/Footer";

const AbsolutesPage = () => {
  return (
    <div>
      <PaginatedTable Heading="Absolutes" data={AbsolutesData} />
      <Footer />
    </div>
  );
};

export default AbsolutesPage;
