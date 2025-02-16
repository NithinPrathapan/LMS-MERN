import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();
  const { allCourses, calculateRating } = useContext(AppContext);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const selectedCourse = allCourses.find((course) => course._id === id);
      setCourse(selectedCourse);
    }
  }, [allCourses, id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return course ? (
    <div
      className="flex md:flex-row flex-col-reverse gap-10 relative 
    items-start justify-between md:px-36 px-8 md:pt-20 text-left"
    >
      <div
        className="absolute top-0 left-0 w-full h-[500px] -z-10 bg-gradient-to-b
       from-cyan-100/70"
      ></div>
      {/* left section */}
      <div>
        <h1 className="text-2xl font-semibold">{course.courseTitle}</h1>
        <p
          className="pt-4"
          dangerouslySetInnerHTML={{
            __html: course.courseDescription.slice(0, 200),
          }}
        ></p>
        {/* review and rating */}

        <div className="flex items-center space-x-2 px-3">
          <p>{calculateRating(course).toFixed(1)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                className="w-3.5 h-3.5"
                key={i}
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt="star"
              />
            ))}
          </div>
          <p>
            {course.courseRatings.length}{" "}
            {course.courseRatings.length > 1 ? "ratings" : "rating"}{" "}
          </p>
        </div>
        <p className="text-sm">Course by Synnefo Solutions</p>
      </div>
      {/* right section */}
    </div>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
