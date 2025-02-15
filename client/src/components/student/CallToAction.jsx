import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col gap-4  items-center pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-500 font-semibold">
        Learn anything, anytime anywhere
      </h1>
      <p className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
        facilis exercitationem rerum maxime doloribus.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button className="bg-blue-500 rounded px-4 py-3 text text-white  font-semibold">
          Get Started
        </button>
        <button className="flex items-center justify-center gap-2 font-semibold">
          Learn More
          <img
            className="mt-1 w-3.5 h-3.5"
            src={assets.arrow_icon}
            alt="arrow_icon"
          />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
