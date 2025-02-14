import React from 'react'
import { Link } from 'react-router-dom';

const CourseSection = () => {
  return (
    <div className="py-16 sm:px-28 md:px-50 lg:px-60 px-8 flex flex-col items-center justify-center gap-4  ">
      <h2 className="text-3xl font-medium text-gray-800 text-center ">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi
        sunt doloremque qui odit! Nihil quaerat voluptatem, vero perspiciatis
        doloremque laudantium? Quasi reiciendis totam nostrum eum quibusdam quia
        quisquam, sequi cupiditate dolor! Ad, veniam rem.
      </p>
      <Link
        className=" text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
        onClick={() => scrollTo(0, 0)}
        to="/course-list"
      >
        See all courses{" "}
      </Link>
    </div>
  );
}

export default CourseSection;