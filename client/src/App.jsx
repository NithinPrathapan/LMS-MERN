
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Loading from "./components/student/Loading";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./components/student/Navbar";

const App = () => {
  const isEducatorPath=useMatch('/educator/*')
  return (
    <div className="bg-black text-white min-h-screen">
      {!isEducatorPath && <Navbar />}
      <div className="max-w-[80%] mx-auto my-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />
          <Route path="/educator" element={<Educator />}>
            <Route path="educator" element={<Dashboard />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="students-enrolled" element={<StudentsEnrolled />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
