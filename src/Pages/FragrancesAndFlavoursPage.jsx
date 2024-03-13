import React from "react";
import PaginatedTable from "../Components/PaginatedTableV2";
import { FlavoursData } from "../Data/Data";

const FragrancesAndFlavoursPage = () => {
  return (
    <div className="bg-gradient-to-r from-white via-red-100  to-red-200">
      <div className="w-[80vw] mx-auto  py-5 ">
        <h2 class="text-2xl font-bold leading-8 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight px-3">
          Fragrances
        </h2>
        <hr className="w-1/2 mt-2 mb-5 mx-auto h-0.5 border-0 bg-gray-400" />
      </div>
      {/* <ul className="list-disc  md:w-3/4 mx-6 sm:mx-auto md:px-10 my-3">
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
      </ul> */}
      <div className="w-[80%] lg:w-[50%] mx-auto pt-10 pb-20">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-3 md:gap-x-8 md:gap-y-6">
          <div className="flex justify-center items-center gap-2 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black hover:shadow-xl">
            <a href="/fragrances-flavours/hair-oil">
              <h1>Fragrances For Hair Oil</h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              {" "}
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center gap-2 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black">
            <a href="/fragrances-flavours/cream-lotion">
              <h1>Fragrances For Cream And Lotion</h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              {" "}
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center gap-2 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black hover:shadow-xl">
            <a href="/fragrances-flavours/face-pack">
              <h1>Fragrances For Face Pack</h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              {" "}
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center gap-2 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black">
            <a href="/fragrances-flavours/soaps">
              <h1>Fragrances For Soaps</h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              {" "}
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>

          <div className="flex justify-center items-center gap-2 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black">
            <a href="/fragrances-flavours/candles-incense-sticks">
              <h1>Fragrances For Candles And Incense Sticks</h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy  min-h-5 min-w-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center gap-1 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black">
            <a href="/fragrances-flavours/personal-fragrances-aerosols-air-freshners">
              <h1>
                Fragrances For Personal Fragrances, Aerosols & Air Freshners
              </h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy min-h-5 min-w-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center items-center gap-2 bg-gray-900  cursor-pointer bold border-solid border-gray-700 border-2 text-white p-2  hover:bg-transparent hover:text-black hover:shadow-xl">
            <a href="/fragrances-flavours/talcum">
              <h1>Fragrances For Talcum</h1>
            </a>
            <svg
              class="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              {" "}
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Flavours Page */}
      <PaginatedTable Heading={"Flavours"} data={FlavoursData} />
    </div>
  );
};

export default FragrancesAndFlavoursPage;
