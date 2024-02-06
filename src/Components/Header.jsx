import React from "react";
import "./header.css";
//bg-gradient-to-r from-white to-blue-200
const Header = () => {
  return (
    // <div className="bg-gradient-to-r from-custom-blue to-custom-black p-1 md:p-2 lg:p-2">
    <div className="bg-gradient-to-r from-white to-blue-200 p-1 md:p-2 lg:p-2">
      <h2 className="text-center text-black text-lg md:text-xl lg:text-xlg font-bold animate-slide-in">
        CRYSTAL AROMATICS
      </h2>
    </div>
  );
};

export default Header;

// bg-gradient-to-r from-blue-400 via-teal-400 to-green-400
