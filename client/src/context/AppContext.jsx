import React, { createContext, useEffect, useReducer, useState } from "react";
import { dummyCourses } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();
import humanizeDuration from "humanize-duration";

const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCouress] = useState([]);
  console.log(allCourses);
  const navigate = useNavigate();
  function fetchAllCourses() {
    setAllCouress(dummyCourses);
  }
  useEffect(() => {
    fetchAllCourses();
    console.log("hello");
  }, []);

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // function to calculate the course chapter time durations

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => {
      return (time += lecture.lectureDuration);
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };
  // function to calculate the course total time durations
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // function to calculate the course total number of lectures
  const calculateTotalLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) =>
      chapter.chapterContent.map((lecture) => (totalLectures += 1))
    );
    return totalLectures;
  };
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateTotalLectures,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
