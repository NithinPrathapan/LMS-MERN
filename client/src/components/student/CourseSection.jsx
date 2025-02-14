import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  console.log(allCourses);
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
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-4 gap-2 md:my-16  my-10 ">
        {allCourses.slice(0, 4).map((course, index) => {
          return <CourseCard key={index} course={course} />;
        })}
      </div>
      <Link
        className=" text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
        onClick={() => scrollTo(0, 0)}
        to="/course-list"
      >
        See all courses{" "}
      </Link>
    </div>
  );
};

export default CourseSection;
