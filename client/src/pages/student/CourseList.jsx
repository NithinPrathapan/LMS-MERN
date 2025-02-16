import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { IoClose } from "react-icons/io5";

const CourseList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  console.log(input);
  const [filteredCourse, setFilterCourse] = useState([]);
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      let tempCourses = allCourses.slice();

      input
        ? setFilterCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilterCourse(tempCourses);
    }
  }, [allCourses, input]);
  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <h1 className="text-4xl text-gray-800 ">Course List</h1>
          <p className="text-gray-500">
            <span
              className="text-blue-500 cursor-pointer "
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            / <span>Course List</span>
          </p>
          {input && (
          <div className="flex items-center justify-between bg-gray-100 p-4 mt-4 rounded">
            <span className="text-gray-700">{input}</span>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => navigate("/course-list")}
            >
              <IoClose size={20} />
            </button>
          </div>
        )}
        </div>
        <SearchBar data={input} />
        
      </div>
      <div className="grid grid-cols-4 gap-4  mt-12 mb-12 max-w-7xl mx-auto">
        {filteredCourse.map((course, index) => {
          return <CourseCard course={course} />;
        })}
      </div>
    </>
  );
};

export default CourseList;
