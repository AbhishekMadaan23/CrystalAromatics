import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_PersonalAersolsAirFreshnersData } from "../../Data/Data";

const FragrancesForPersonalFragrancesAerosolsAirFreshnersPage = () => {
  const Heading = "Fragrances For Personal Fragrances Aerosols Air Freshners";
  return (
    <div>
      <PaginatedTableV2
        Heading={Heading}
        data={Fragrances_PersonalAersolsAirFreshnersData}
      />
    </div>
  );
};

export default FragrancesForPersonalFragrancesAerosolsAirFreshnersPage;
