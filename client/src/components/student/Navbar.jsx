import React from 'react'
import {assets } from  '../../assets/assets/assets.js'
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {

  const isCourseListPage = location.pathname.includes("/course-list");


  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-200/90"
      }`}
    >
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 lg:w-32 cursor-pointer"
        />
      </Link>
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <button>Become Educator</button>
            <Link to="/my-enrollments">My-Enrollments</Link>
          </div>
        ) : (
          <></>
        )}
        <div>
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-500 text-white rounded-full px-5 py-2"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
      {/* for phone screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center justify-center  max-sm:text-xs gap-1 sm:gap-2">
          {user ? (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">My-Enrollments</Link>
            </>
          ) : (
            <></>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="user_icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar
