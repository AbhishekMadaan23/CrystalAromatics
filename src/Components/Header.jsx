import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-white to-blue-200 p-1 md:p-2 lg:p-2">
      <h2 className="text-center text-black text-lg md:text-xl lg:text-2xl font-bold animate-slide-in">
        CRYSTAL AROMATICS
      </h2>
    </div>
  );
};

export default Header;
