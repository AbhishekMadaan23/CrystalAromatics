import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/ProductPageData";

function getObjectByName(name) {
  return Data.find((obj) => {
    return obj.essentialName === name;
  });
}
const ProductPage = () => {
  const { name } = useParams();
  const [routeObject, setRouteObject] = useState(null);

  useEffect(() => {
    const object = getObjectByName(name);
    setRouteObject(object);
  }, [name]);
  console.log("///fffee", routeObject?.["refractiveIndexAt20°C"]);
  return (
    <div>
      {/* CONTENT */}
      <div className=" flex flex-col px-4 md:flex-row  md:w-[90%] md:mx-auto md:gap-2 ">
        {/* IMAGE DIV */}
        <div className="flex justify-center h-[50vh] md:w-[30%]  md:h-[100vh] items-center my-4 ">
          <div className="h-1/2 w-[70%] flex justify-center items-center">
            <img className=" " src={routeObject?.img} alt="" />
          </div>
        </div>
        {/* CONTENT DIV */}
        <div className="  md:w-[70%]">
          {/* PRODUCT NAME */}
          <h1 className="font-bold underline text-xl md:text-3xl  text-gray-800 mt-6 mb-2">
            {name}
          </h1>
          {/* PRODUCT INFO */}
          <div className="my-3 md:my-6 lg:my-8 md:h-full">
            <div class="container mx-auto">
              <table class="w-full shadow-lg">
                <thead>
                  <tr>
                    <th class="bg-gray-100 py-2 px-4 font-bold border-gray-200 border-2">
                      Botanical Name
                    </th>
                    <th class=" border-gray-200 border-b-2 py-2 px-4">
                      {routeObject?.botanicalName}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* ---------indianName */}
                  {routeObject?.indianName ? (
                    <tr>
                      <td class="border-gray-200 border-b-2 font-semibold bg-gray-100 py-2 px-4">
                        Indian Name
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.indianName}
                      </td>
                    </tr>
                  ) : null}
                  {/* ---------Habitat */}
                  {routeObject?.habitat ? (
                    <tr>
                      <td class="border-gray-200 border-b-2 font-semibold bg-gray-100 py-2 px-4">
                        Habitat
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.habitat}
                      </td>
                    </tr>
                  ) : null}
                  {/* ---------Origin */}
                  {routeObject?.origin ? (
                    <tr>
                      <td class="border-gray-200 border-b-2 font-semibold bg-gray-100 py-2 px-4">
                        Origin
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.origin}
                      </td>
                    </tr>
                  ) : null}
                  {/* PartsUsed---------- */}
                  {routeObject?.partsUsed ? (
                    <tr>
                      <td class="border-gray-200 border-b-2 font-semibold bg-gray-100 py-2 px-4">
                        Parts Used
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.partsUsed}
                      </td>
                    </tr>
                  ) : null}
                  {/* Color---------- */}
                  {routeObject?.color ? (
                    <tr>
                      <td class="border-gray-200 border-b-2 font-semibold bg-gray-100 py-2 px-4">
                        Color
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.color}
                      </td>
                    </tr>
                  ) : null}
                  {/* --------------Mode of Extraction */}
                  {routeObject?.modeOfExtraction ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Mode of Extraction
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.modeOfExtraction}
                      </td>
                    </tr>
                  ) : null}

                  {/* --------------Appearance */}
                  {routeObject?.appearance ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Appearance
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.appearance}
                      </td>
                    </tr>
                  ) : null}

                  {/* --------------organolepticProperties */}
                  {routeObject?.organolepticProperties ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Organoleptic Properties
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.organolepticProperties}
                      </td>
                    </tr>
                  ) : null}

                  {/* --------------perfumeNote */}
                  {routeObject?.perfumeNote ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Perfume Note
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.perfumeNote}
                      </td>
                    </tr>
                  ) : null}

                  {/* --------------strengthOfInitialAroma */}
                  {routeObject?.strengthOfInitialAroma ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Strength Of Initial Aroma
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.strengthOfInitialAroma}
                      </td>
                    </tr>
                  ) : null}

                  {/* ----------Consistency */}
                  {routeObject?.consistency ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Consistency
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.consistency}
                      </td>
                    </tr>
                  ) : null}

                  {/* ----------"refractiveIndexAt20°C" */}
                  {routeObject?.["refractiveIndexAt20°C"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Refractive Index At 20°C
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["refractiveIndexAt20°C"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* ----------"specificGravityAt20°C" */}
                  {routeObject?.["specificGravityAt20°C"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Specific Gravity At 20°C
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["specificGravityAt20°C"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* ----------"specificGravityAt25°C" */}
                  {routeObject?.["specificGravityAt25°C"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Specific Gravity At 25°C
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["specificGravityAt25°C"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* ----------"solubility" */}
                  {routeObject?.["solubility"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Solubility
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["solubility"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* ----------"constituents" */}
                  {routeObject?.["constituents"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Constituents
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["constituents"]}
                      </td>
                    </tr>
                  ) : null}
                  {/* ----------"majorConstituents" */}
                  {routeObject?.["majorConstituents"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Major Constituents
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["majorConstituents"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------activeConstituents */}
                  {routeObject?.["activeConstituents"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Active Constituents
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["activeConstituents"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------uses */}
                  {routeObject?.["uses"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Uses
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["uses"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------possible uses */}
                  {routeObject?.["possibleUses"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Possible Uses
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["possibleUses"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------safetyInformation */}
                  {routeObject?.["safetyInformation"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Safety Information
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["safetyInformation"]}
                      </td>
                    </tr>
                  ) : null}
                  {/* -----------importantNote */}
                  {routeObject?.["importantNote"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Important Note
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["importantNote"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------precautions */}
                  {routeObject?.["precautions"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Precautions
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["precautions"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------importantNote */}
                  {routeObject?.["purity"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        purity
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["purity"]}
                      </td>
                    </tr>
                  ) : null}

                  {/* -----------Storage */}
                  {routeObject?.["storage"] ? (
                    <tr>
                      <td class="border-gray-200 font-semibold border-b-2 bg-gray-100 py-2 px-4">
                        Storage
                      </td>
                      <td class="border-gray-200 border-b-2 py-2 px-4">
                        {routeObject?.["storage"]}
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
