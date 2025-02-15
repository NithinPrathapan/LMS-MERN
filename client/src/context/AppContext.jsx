import React, { createContext, useEffect, useReducer, useState } from "react";
import { dummyCourses } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCouress] = useState([]);
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
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
