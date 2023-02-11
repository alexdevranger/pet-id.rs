import React, { useState } from "react";
import Main from "../components/Main";
import Shop from "../components/Shop";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactUs from "../components/ContactUs";
import PETnav from "../assets/PETnav.png";
import Avatar from "../assets/pets.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex justify-center">
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3BC77E] text-gray-300">
        <div className="w-[120px] ml-4">
          <img src={PETnav} alt="Logo Image" style={{ width: "200px" }} />
        </div>

        {/* menu */}
        <Router>
          <ul className="hidden md:flex">
            <li>
              <Routes>
                <Route exact path="/" element={<Main />} />
              </Routes>
            </li>
            <li>
              <Routes>
                <Route exact path="/proizvodi" element={<Shop />} />
              </Routes>
            </li>
            <li>
              <Routes>
                <Route exact path="/kontakt" element={<ContactUs />} />
              </Routes>
            </li>
            <li>
              <Routes>
                <Route exact path="/moj-ljubimac" element={<ContactUs />} />
              </Routes>
            </li>
          </ul>
        </Router>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <Router>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl">
              <Routes>
                <Route exact path="/" element={<Main />} />
              </Routes>
            </li>
            <li className="py-6 text-4xl">
              <Routes>
                <Route exact path="/proizvodi" element={<Shop />} />
              </Routes>
            </li>
            <li className="py-6 text-4xl">
              <Routes>
                <Route exact path="/kontakt" element={<ContactUs />} />
              </Routes>
            </li>
          </ul>
        </Router>
      </div>
    </div>
  );
};

export default Nav;
