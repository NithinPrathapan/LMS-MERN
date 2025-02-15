import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonial = () => {
  return (
    <div className="pb-14 px-8 md:px-0  text-center ">
      <h1 className="text-3xl font-medium text-gray-800 ">Testimonials</h1>
      <p className="md:text-base  text-gray-500 mt-3  ">
        Hear from the learners as they share their journeys of transformation,
        success and how our <br /> platform has made a diffrence in their lives
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  items-center justify-center  gap-4  md:max-w-7xl w-[80%] mx-auto mt-12">
        {dummyTestimonial.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="text-sm text-left border  border-gray-500/30 pb-6 rounded-lg bg-white
            
            shadow-[0px_4px_15px_0px] shadow-black overflow-hidden
            "
            >
              <div className="flex flex-col items-center py-4 bg-gray-500/10">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="">
                  <h1 className="text-lg font-medium text-gray-800">
                    {testimonial.name}
                  </h1>
                  <p
                    className="text-gray-800/80
                "
                  >
                    {testimonial.role}
                  </p>
                </div>
                <div className="p-5 pb-7">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <img
                        src={
                          i < Math.floor(testimonial.rating)
                            ? assets.star
                            : assets.star_blank
                        }
                        alt=" stars"
                        key={i}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 mt-5 ">{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
