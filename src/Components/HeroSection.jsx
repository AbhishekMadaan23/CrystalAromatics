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

// const Slider = styled.div`
//   height: 80vh;
//   width: 100%;
// `;

// const SliderDiv = styled.div`
//   position: relative;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   margin: 0 auto;
// `;

// const SliderWrapper = styled.div`
//   position: relative;
//   background-color: white;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   transition: transform 1s ease-in-out;
//   transform: ${(props) => `translateX(-${props.index * 100}%)`};
// `;

// const Slide = styled.div`
//   height: 100%;
//   min-width: 100%;
//   background-image: url(${(props) => props.src});
//   background-size: cover;
//   background-position: center;
// `;

// const NextButton = styled.div`
//   position: absolute;
//   height: 40px;
//   width: 40px;
//   text-align: center;
//   font-size: 1.5em;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   background-color: rgba(255, 255, 255, 0.5);
//   border: none;
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
// `;
// const PrevButton = styled.div`
//   position: absolute;
//   height: 40px;
//   width: 40px;
//   text-align: center;
//   font-size: 1.5em;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-50%);
//   background-color: rgba(255, 255, 255, 0.5);
//   border: none;
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
// `;

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   const goToPrevious = () => {
//     const isFirstImage = currentIndex === 0;
//     setCurrentIndex(isFirstImage ? slideImages.length - 1 : currentIndex - 1);
//   };

//   const goToNext = () => {
//     const isLastImage = currentIndex === slideImages.length - 1;
//     setCurrentIndex(isLastImage ? 0 : currentIndex + 1);
//   };

//   return (
//     <div>
//       <Slider>
//         <SliderDiv>
//           <SliderWrapper index={currentIndex}>
//             {slideImages.map((image, index) => {
//               return <Slide src={image.url} />;
//             })}
//           </SliderWrapper>
//           <PrevButton onClick={goToPrevious}>❰</PrevButton>
//           <NextButton onClick={goToNext}>❱</NextButton>
//         </SliderDiv>
//       </Slider>
//     </div>
//   );
// };

// export default HeroSection;
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

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
          <button
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
          </button>

          <div class="absolute h-20 lg:h-40 mt-9 top-1/2 left-5 bg-slate-600 bg-opacity-50 text-white py-10 lg:py-20">
            <h1 class="text-2xl h-full lg:text-5xl font-bold text-left font-sans animate-fade-in">
              CRYSTAL AROMATICS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
