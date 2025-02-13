import React from "react";
import Hero from "../../components/student/Hero";
import SearchBar from "../../components/student/SearchBar";

function Home() {
  return (
    <div className="text-white">
      <Hero />
      <SearchBar />
    </div>
  );
}

export default Home;
