import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./header.css";

const slideImages = [
  {
    url: "https://img.freepik.com/free-vector/realistic-essential-oil-ad_52683-54678.jpg?w=996&t=st=1707050397~exp=1707050997~hmac=6daa34a04038d43b81bf02cfe20e3094ed6afce61ef390ce1f86249a83824c17",
  },
  {
    url: "https://i.pinimg.com/564x/22/4c/01/224c01baaa24359718278582fa1c1dfa.jpg",
  },

  {
    url: "https://i.pinimg.com/564x/ca/42/c3/ca42c35a0129c08e4eaba9ec09848aef.jpg",
  },
  {
    url: "https://i.pinimg.com/564x/d8/66/dd/d866dd4e88eeea08533b746ffc7d2805.jpg",
  },

  {
    url: "http://4.imimg.com/data4/JN/YP/MY-798705/essential-oils-v-x-500x500.jpg",
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
    }, 3000);

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
    <div className="w-full h-[45vh] lg:h-[80vh]">
      <div className=" w-full h-full   bg-slate-400">
        <div className="relative bg-orange-300 w-full h-full overflow-hidden">
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
