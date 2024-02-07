import React from "react";
import PaginatedTableV2 from "../../Components/PaginatedTableV2";
import { Fragrances_CandlesIncenseSticks } from "../../Data/Data";
const FragrancesForCandlesAndIncenseSticks = () => {
  const Heading = "Fragrances For Candles And Incense Sticks";
  return (
    <div>
      <PaginatedTableV2
        Heading={Heading}
        data={Fragrances_CandlesIncenseSticks}
      />
    </div>
  );
};

export default FragrancesForCandlesAndIncenseSticks;
