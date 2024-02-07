import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./header.css";

const slideImages = [
  {
    url: "https://images5.alphacoders.com/111/1113724.jpg",
  },
  {
    url: "https://images.pexels.com/photos/1172675/pexels-photo-1172675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    url: "https://images.pexels.com/photos/6621308/pexels-photo-6621308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    url: "https://images.pexels.com/photos/7436119/pexels-photo-7436119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToNext();
  //   }, 6000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    setCurrentIndex(isFirstImage ? slideImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === slideImages.length - 1;
    setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-full h-[45vh] lg:h-[70vh]">
      <div className=" w-full h-full   bg-slate-400">
        <div className="relative  w-full h-full overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slideImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-full min-w-full bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
              );
            })}
          </div>
          {/* <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 bg-white bg-opacity-50 text-lg flex items-center justify-center rounded-full cursor-pointer z-10"
            onClick={goToNext}
          >
            ❯
          </button>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 h-10 w-10 bg-white bg-opacity-50 text-lg flex items-center justify-center rounded-full cursor-pointer z-10"
            onClick={goToPrevious}
          >
            ❮
          </button> */}

          <div class="absolute inset-8 shadow-sm flex justify-center items-center bg-slate-600 bg-opacity-10 text-white">
            <div class="text-center">
              <h1 class="text-2xl lg:text-5xl font-bold font-serif animate-fade-in">
                CRYSTAL AROMATICS
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
