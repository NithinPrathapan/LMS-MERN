import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);
  return (
    <div className="border  border-gray-500/30 pb-6 overflow-hidden rounded-lg">
      <Link
        className=""
        to={"/course/" + course._id}
        onClick={() => scrollTo(0, 0)}
      >
        <img className="w-full " src={course.courseThumbnail} alt="thumbnail" />
      </Link>
      <div className="p-3 text-left font-semibold ">
        <h3 className="text-base"> {course.courseTitle}</h3>
        <p className="text-gray-500">{course.educator.name}</p>
      </div>
      <div className="flex items-center space-x-2 px-3">
        <p>{calculateRating(course)}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <img className="w-3.5 h-3.5" key={i} src={assets.star} alt="star" />
          ))}
        </div>
        <p className="text-gray-500">22</p>
      </div>
      <p className="text-base font-semibold text-gray-500 px-3">
        {currency} {(course.coursePrice - course.discount / 100).toFixed(2)}
      </p>
    </div>
  );
};

export default CourseCard;
