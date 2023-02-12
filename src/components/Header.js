import React, { useState } from "react";
import { Link } from "react-router-dom";
import PETnav from "../assets/PETnav.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "../assets/pets.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-[80px] bg-[#3BC77E] text-gray-300">
      <div className="px-4 flex items-center h-full">
        <div className="w-full flex items-center">
          <div className="w-[120px]">
            <img className="logo" src={PETnav} alt="PETnav" />
          </div>
          <div className="hidden md:flex md:justify-end w-full">
            <ul className="flex text-white items-center">
              <li className="md:p py-2 block hover:text-[#FF553E] px-4 text-xl">
                <Link to="/">Početna</Link>
              </li>
              <li className="md:p py-2 block hover:text-[#FF553E] px-4 text-xl">
                <Link to="/proizvodi">Proizvodi</Link>
              </li>
              <li className="md:p py-2 block hover:text-[#FF553E] px-4 text-xl">
                <Link to="/kontakt">Kontakt</Link>
              </li>
              <li className="md:p py-2 block hover:text-[#FF553E] px-4 text-xl">
                <Link to="/uputstvo">Uputstvo</Link>
              </li>
              <li className="md:p py-2 block hover:text-[#FF553E] px-4 text-xl">
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
            <li className="py-12 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/">
                Početna
              </Link>
            </li>
            <li className="py-12 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/proizvodi">
                Proizvodi
              </Link>
            </li>
            <li className="py-12 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/kontakt">
                Kontakt
              </Link>
            </li>
            <li className="py-12 text-4xl text-white font-bold">
              <Link onClick={handleNav} to="/uputstvo">
                Uputstvo
              </Link>
            </li>
            <li className="py-12 text-4xl text-white font-bold">
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
