import React from "react";
import PaginatedTable from "../Components/PaginatedTableV2";
import { FlavoursData } from "../Data/Data";

const FragrancesAndFlavoursPage = () => {
  return (
    <div>
      <div className="w-[80vw] mx-auto  py-5 ">
        <h2 class="text-2xl font-bold leading-8 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight px-3">
          Fragrances
        </h2>
        <hr className="w-1/2 mt-2 mb-5 mx-auto h-0.5 border-0 bg-gray-400" />
      </div>
      <ul className="list-disc  md:w-3/4 mx-6 sm:mx-auto md:px-10 my-3">
        <a href="/fragrances-flavours/hair-oil">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Hair Oil
          </li>
        </a>
        <a href="/fragrances-flavours/cream-lotion">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Cream And Lotion
          </li>
        </a>
        <a href="/fragrances-flavours/face-pack">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Face Pack
          </li>
        </a>
        <a href="/fragrances-flavours/soaps">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Soaps
          </li>
        </a>
        <a href="/fragrances-flavours/talcum">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Talcum
          </li>
        </a>
        <a href="/fragrances-flavours/candles-incense-sticks">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Candles And Incense Sticks
          </li>
        </a>
        <a href="/fragrances-flavours/personal-fragrances-aerosols-air-freshners">
          <li className="mb-2  text-bold text-lg sm:text-xl text-left text-gray-900 cursor-pointer hover:underline">
            Fragrances For Personal Fragrances, Aerosols & Air Freshners
          </li>
        </a>
      </ul>
      {/* Flavours Page */}
      <PaginatedTable Heading={"Flavours"} data={FlavoursData} />
    </div>
  );
};

export default FragrancesAndFlavoursPage;
