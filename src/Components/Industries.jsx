import React from "react";

const Industries = () => {
  return (
    <div className="w-full ">
      <div className="w-full ">
        <h1 className="text-center text-2xl lg:text-3xl font-bold p-4 pb-2">
          Industries We Serve
        </h1>
        <div className="text-center w-full mb-7">
          <hr className=" mx-auto w-1/2 h-1 bg-slate-300" />
        </div>
      </div>
      <div className="w-full ">
        <p className=" md:w-3/4 mx-2 sm:mx-auto ">
          Our wide range of Floral Water, Essential Oils, Absolutes, Spice Oils,
          Flower Oils/Flavors have immense application across industry
          verticals. With the growth of the awareness about the efficacy of
          these special oils and extracts our client base shown a vertical
          progress. Some of the industries where our products are used are as
          follows:
        </p>

        <ol class="list-decimal md:w-3/4 mx-6 sm:mx-auto md:px-10 my-3">
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Aroma therapists
          </li>
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Herbalists
          </li>
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Naturopaths
          </li>
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Medical
          </li>
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Cosmetic and toiletries manufacturers
          </li>
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Soap Manufacturers
          </li>
          <li class="mb-2 underline italic text-lg text-left text-gray-800">
            Candle makers
          </li>
          <li class="text-lg underline italic text-left text-gray-800">
            Food and Beverages Manufacturers
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Industries;
