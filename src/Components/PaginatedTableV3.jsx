import React, { useState } from "react";

const ITEMS_PER_PAGE = 40;

const PaginatedTableV3 = ({ Heading, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div>
      <div className="w-[80vw] mx-auto  py-5 ">
        <h2 class="text-2xl font-bold leading-8 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight px-3">
          {Heading}
        </h2>
        <hr className="w-3/4 mt-2 mb-5 mx-auto h-0.5 border-0 bg-gray-400" />
        <div className=" flex justify-end mt-5 items-center  mb-5">
          <button
            className="py-2 px-4 mx-3 bg-indigo-700 text-white rounded hover:bg-white hover:text-indigo-700 border-2 border-indigo-700"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="font-bold ">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="py-2 px-4 mx-3 bg-indigo-700 text-white rounded hover:bg-white hover:text-indigo-700 border-2 border-indigo-700"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <table className="min-w-[80vw] divide-y mx-auto divide-gray-200">
        <thead className="bg-gray-100"></thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {selectedItems.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-green-50" : "bg-green-100"}`}
            >
              <td
                className={`${
                  item.botanicalName === ""
                    ? "px-6 py-4 font-semibold"
                    : "px-6 py-4 font-bold text-lg md:text-xl underline bg-green-300"
                } `}
              >
                {item.essentialName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-around items-center mt-4 mb-8">
        <button
          className="py-2 px-4 bg-indigo-700 text-white rounded hover:bg-white hover:text-indigo-700 border-2 border-indigo-700"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="font-bold ">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="py-2 px-4 bg-indigo-700 text-white rounded hover:bg-white hover:text-indigo-700 border-2 border-indigo-700"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedTableV3;
