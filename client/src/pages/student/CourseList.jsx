import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";

const CourseList = () => {
  const { navigate } = useContext(AppContext);
  const { input } = useParams();
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
            / <span >Course List</span>
          </p>
        </div>
        <SearchBar data={input} />
      </div>
    </>
  );
};

export default CourseList;
