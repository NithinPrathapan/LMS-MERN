import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CourseSection from "../../components/student/CourseSection";
import Testimonial from "../../components/student/Testimonial";

function Home() {
  return (
    <div className="flex flex-col items-center space-y-7">
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonial />
    </div>
  );
}

export default Home;
