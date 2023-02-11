import React, { useState, useEffect } from "react";
import PETnav from "../assets/PETnav.png";

const StickyNavbar = () => {

  return (
    <>
      <nav className="p-4 bg-gray-800 text-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <i className="text-2xl fas fa-campground"></i>
            <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
              Brand
            </h1>
          </div>

          <div className="md:hidden block absolute top-4 right-8 fixed">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
            >
              <i className="fas fa-bars text-3xl" id="bars"></i>{" "}
            </button>
          </div>

          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <li className="text-lg pr-8 ">
                <a
                  href=""
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                  //   style={{ textUnderlineOffset: "8px" }}
                >
                  Home
                </a>
              </li>
              <li className="text-lg pr-8">
                <a
                  href=""
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                  //   style={{ textUnderlineOffset: "8px" }}
                >
                  About
                </a>
              </li>
              <li className="text-lg pr-8">
                <a
                  href=""
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                  //   style={{ textUnderlineOffset: "8px" }}
                >
                  Blog
                </a>
              </li>
              <li className="text-lg pr-8">
                <a
                  href=""
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                  //   style={{ textUnderlineOffset: "8px" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="hidden md:flex">
    <a href="#"><i className="fab fa-facebook text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i className="fab fa-linkedin text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i className="fab fa-instagram text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
    <a href="#"><i className="fab fa-twitter text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i></a>
  </div> */}
        </div>

        <div
          id="mobileMenu"
          className="hidden flex w-full mx-auto py-8 text-center"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <a
              href="#"
              className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style="text-underline-offset: 8px;"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style="text-underline-offset: 8px;"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style="text-underline-offset: 8px;"
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              style="text-underline-offset: 8px;"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default StickyNavbar;
