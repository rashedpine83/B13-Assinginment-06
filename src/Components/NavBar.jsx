import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const NavBar = ({ carts }) => {
  return (
    <div className="navbar container mx-auto mt-10">
      <div className="navbar-start">

        {/* Mobile Dropdown start */}
        <div className="dropdown md:hidden relative">
          
          <label tabIndex={0} className="btn btn-ghost">
            <HiMenu className="text-2xl" />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 z-9"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        {/* Mobile Dropdown end */}
     
        <h1 className="ml-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-3xl font-bold">
          DigiTools
        </h1>
      </div>
      
      
      {/* menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-4 px-1 text-lg font-medium">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li className='pl-20'><a>FAQ</a></li>
        </ul>
      </div>

     {/* cart */}
      <div className="navbar-end gap-5">
        <div className="relative flex items-center justify-center w-10 h-10">
          <IoCartOutline className="text-3xl text-gray-700"/>

          {carts.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold min-w-5 h-5 flex items-center justify-center rounded-full">
              {carts.length}
            </span>
          )}
        </div>

       
        <a className="font-medium cursor-pointer hidden sm:block">
          Login
        </a>
        <button className="btn rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-4 py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;





