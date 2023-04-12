import React, { useState } from "react";
import { Link } from "react-router-dom";

import PETnav from "../assets/PETnav.svg";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "../assets/pets_optimized.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  //////////////////
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  ////////////////////////
  return (
    <div className="w-full h-[80px] bg-[#3BC77E] text-gray-300">
      <div className="px-4 flex items-center h-full">
        <div className="w-full flex items-center">
          <div className="w-[120px]">
            <div>
              <img className="logo" src={PETnav} alt="PETnav" />
            </div>
          </div>
          <div className="hidden md:flex md:justify-end w-full">
            <ul className="flex text-white items-center">
              <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/">Početna</Link>
              </li>
              <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/proizvodi">Proizvodi</Link>
              </li>
              {/* <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/uputstvo">Uputstvo</Link>
              </li> */}
              <li
                className="md:p py-2 block relative transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl"
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
              >
                <div className="flex items-center">
                  <Link to="/uputstvo">Uputstvo</Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-2 ${
                      showDropdown ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 13l-5-5h10l-5 5z" />
                  </svg>
                </div>
                {showDropdown && (
                  <ul
                    className="drop absolute left-0 top-full bg-white rounded-md shadow-lg py-1"
                    style={{ zIndex: "50" }}
                  >
                    <li className="py-2 px-4 text-gray-400">
                      <Link to="/uputstvo">Uputstvo</Link>
                    </li>
                    {/* <li className="py-2 px-4 text-gray-400">
                      <Link to="/kupi-kao-poklon">Kupi kao poklon</Link>
                    </li> */}
                  </ul>
                )}
              </li>
              <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/galerija">Galerija</Link>
              </li>
              {/* <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/udomi">Udomi</Link>
              </li> */}
              <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/kontakt">Kontakt</Link>
              </li>

              <li className="md:p py-2 block transition-all duration-100 ease-in-out hover:font-bold px-4 text-xl">
                <Link to="/moj-ljubimac">
                  <img src={Avatar} alt="avatar" height="65px" width="48px" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Hamburger menu */}
        <div onClick={handleNav} className="md:hidden z-30">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#FF553E] flex flex-col justify-center items-center z-20"
          }
        >
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#FF553E] flex flex-col justify-center items-center z-20"
            }
          >
            <li className="text-4xl text-white font-bold pt-6 min-[390px]:pt-0">
              <Link onClick={handleNav} to="/">
                Početna
              </Link>
            </li>
            <li className="pt-6 min-[390px]:pt-9 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/proizvodi">
                Proizvodi
              </Link>
            </li>
            <li
              className="pt-6 min-[390px]:pt-9 text-4xl text-white font-bold text-center"
              onClick={handleDropdown}
            >
              Uputstvo
              {showDropdown && (
                <ul className="left-0 top-full w-full bg-[#FF553E] text-center pt-3">
                  <li className="text-white text-2xl py-2 text-1xl">
                    <Link onClick={handleNav} to="/uputstvo">
                      Uputstvo
                    </Link>
                  </li>
                  {/* <li className="text-white text-2xl py-2">
                    <Link onClick={handleNav} to="/kupi-kao-poklon">
                      Kupi kao poklon
                    </Link>
                  </li> */}
                </ul>
              )}
            </li>
            <li className="pt-6 min-[390px]:pt-9 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/galerija">
                Galerija
              </Link>
            </li>
            <li className="pt-6 min-[390px]:pt-9 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/blog">
                Blog
              </Link>
            </li>

            <li className="pt-6 min-[390px]:pt-9 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/kontakt">
                Kontakt
              </Link>
            </li>

            <li className="pt-6 min-[390px]:pt-9 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/moj-ljubimac">
                <img src={Avatar} alt="avatar" height="65px" width="48px" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
