import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div
        className="flex md:flex-row items-start px-8 md:px-0 
        justify-center gap-10 md:gap-32 py-10 border-b border-white/30
       "
      >
        <div className="flex flex-col md:items-start items-center w-full ">
          <img src={assets.logo_dark} alt="logo" />
          <p className=" mt-6 text-center md:text-left text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae,
            ipsum ullam veniam praesentium qui in expedita libero provident,
            tempora nisi repellendus! Deserunt, eos cumque.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <p>Copyright 2025 Synnefo Solutions All Rights Reserved</p>
      <div></div>
    </footer>
  );
};

export default Footer;
