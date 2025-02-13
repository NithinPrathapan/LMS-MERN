import React from 'react'
import { assets } from '../../assets/assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="relative font-bold text-gray-800 max-w-3xl mx-auto text-center md:text-4xl sm:text-3xl lg:text-5xl  text-2xl   ">
        Empower your future with the courses defined to{" "}
        <span className="text-blue-600">fit your choice</span>{" "}
        <img
          src={assets.sketch}
          alt="sketch"
          className="hidden md:block absolute -bottom-7 right-0"
        />
      </h1>
      <p className="md:block text-gray-500 max-w-2xl mx-auto ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
        molestiae deserunt neque vel ad, libero magni modi fugit earum placeat
        ducimus animi tempora labore nam voluptas totam adipisci minima commodi?
      </p>
    </div>
  );
}

export default Hero;