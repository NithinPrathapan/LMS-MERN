import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : "");
    const onSearchHandler = (e)=>{
      navigate("/course-list/" + input);
    }
  return (
    <form
      action=""
      onSubmit={onSearchHandler}
      className="max-w-xl w-full h-12 md:h-14 flex  items-center bg-white border border-gray-500/20 rounded mx-auto"
    >
      <img
        src={assets.search_icon}
        alt="search_icon"
        className="md:w-auto w-10 px-3"
      />
      <input
        type="text"
        className="w-full h-full outline-none text-gray-500/80"
        placeholder="Search for Courses"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 rounded text-white md:px-10 px-7 py-2 mx-1"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar