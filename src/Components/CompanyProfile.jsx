import React from "react";

const CompanyProfile = () => {
  return (
    <div className="w-full bg-red-50">
      <div className="w-full ">
        <h1 className="text-center text-2xl lg:text-3xl font-bold p-4 pb-2">
          Company Profile
        </h1>
        <div className="text-center w-full mb-7">
          <hr className=" mx-auto w-1/2 h-1 bg-slate-300" />
        </div>
      </div>
      <div className="w-full ">
        <p className="text-lime-600 text-lg md:text-xl mb-2 break-words ">
          Offering the finest Essential oils and much more...
        </p>
        <p className=" md:w-3/4 mx-2 sm:mx-auto">
          For over two decades, our organization, Crystal Aromatics, have been
          offering high end aroma therapy products to clients spread across
          industry verticals. We have in our collection nearly 150 varieties of
          essential oils. Their extensive application as base ingredient or
          fragrance enhancing channel have made them highly sought after among
          our clients.
        </p>
      </div>
      <div class="flex justify-center mt-3 mb-10">
        <img
          src="https://certbodies.co.uk/wp-content/uploads/2021/03/ISO-certification-scaled.jpeg"
          alt="Quality Certified Logo 1"
          class="w-30 h-20 mx-8 my-5"
        />
        <img
          src="https://trustseal.indiamart.com/trustseal-logos/trustseal.gif"
          alt="Quality Certified Logo 2"
          class="w-16 h-16 mx-8 my-5"
        />
      </div>
    </div>
  );
};

export default CompanyProfile;
