import React from "react";

const ProductPage = () => {
  return (
    <div>
      {/* CONTENT */}
      <div className=" flex flex-col px-4 md:flex-row md:w-3/4 md:mx-auto md:gap-4">
        {/* IMAGE DIV */}
        <div className="flex justify-center h-[50vh] md:h-full items-center my-4 ">
          <img
            className="max-w-full max-h-full"
            src="https://i.pinimg.com/564x/d7/d0/de/d7d0de9c45128af5f1882186f7d96b9b.jpg"
            alt=""
          />
        </div>
        {/* CONTENT DIV */}
        <div>
          {/* PRODUCT NAME */}
          <h1 className="font-bold underline text-xl text-gray-800 mt-4">
            BASIL OIL
          </h1>
          {/* PRODUCT INFO */}
          <div className="my-3 md:my-6 lg:my-8 md:h-full">
            <div class="container mx-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="bg-gray-100 py-2 px-4 font-bold border-gray-200 border-2">
                      Botanical Name
                    </th>
                    <th class=" border-gray-200 border-b-2 py-2 px-4">
                      Pimenta dioica / Pimenta officinalis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-gray-200 border-b-2 font-semibold bg-gray-100 py-2 px-4">
                      Origin
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      South America
                    </td>
                  </tr>

                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Mode of Extraction
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      Steam distillation
                    </td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Parts Used
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      Seed/barries
                    </td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      color
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      Cocoa Brown
                    </td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Consistency
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">Thin</td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold  border-b-2 bg-gray-100 py-2 px-4">
                      Note Classification
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">Middle</td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Appearance
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      A yellow to reddish pink colored liquid
                    </td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Strength of Inital Aroma
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">Strong</td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Organoleptic properties
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      Spicy odour and taste / Sharp yet sweet with a spicy
                      cinnamon and clove like aroma
                    </td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Origin
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      South America
                    </td>
                  </tr>
                  <tr>
                    <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                      Mode of Extraction
                    </td>
                    <td class="border-gray-200 border-b-2 py-2 px-4">
                      Steam distillation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Botanical Name</span>
              </div>
              <div className=""> Pimenta Racemosa</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Origin</span>
              </div>
              <div className=""> West Indies</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Mode of Extraction</span>
              </div>
              <div className=""> Steam distillation</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Parts Used</span>
              </div>
              <div className=""> Leaves</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Note Classification</span>
              </div>
              <div className=""> Top</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Appearence</span>
              </div>
              <div className=""> A Pale Yellowish Coloured clear Liquid</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 mb-2">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Organoleptic properties</span>
              </div>
              <div className=""> Sweet Fresh and Spicy Odour</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Refractive index at 20 °C :</span>
              </div>
              <div className=""> 1.4752 - 1.533</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Specific Gravity at 20 °C :</span>
              </div>
              <div className=""> 0.9286 –1.0230</div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Solubility</span>
              </div>
              <div className="">
                Insoluble in water; soluble in organic solvents
              </div>
            </div>
            <div class="flex gap-6 border-b-2 border-gray-200 ">
              <div className="border-r-2 border-gray-200">
                <span className="p-2">Storage :</span>
              </div>
              <div className="">
                Well closed in air tight containers away from sunlight and heat
                preferably in dark colour glass or aluminium containers.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
