import React from "react";
import PETnav from "../assets/PETnav.png";
import { Link, useParams } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto py-1 px-6 flex justify-between text-white bg-[#FF553E] items-center flex-col md:flex-row">
      <div className="flex justify-center md:justify-start mt-5 md:mt-0">
        <img src={PETnav} className="w-1/2 md:w-1/2" />
      </div>

      <div className="w-[95%] flex items-center flex-col-reverse md:flex-row ">
        <div className="flex justify-center w-full">
          <p className="text-[18px]">All right reserved © 2023 Pet ID</p>
        </div>
        <div>
          <div className="flex justify-center w-[287px] md:w-[236px] flex-col-reverse md:flex-row">
            <div className="flex justify-between md:w-[75%] my-6">
              <a href="https://www.instagram.com/pet.id.rs/" target="_blank">
                <span className="cursor-pointer">
                  <FaInstagram size={30} />
                </span>
              </a>
              <a href="https://www.tiktok.com/@petid.rs" target="_blank">
                <span className="cursor-pointer">
                  <FaTiktok size={30} />
                </span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086578725019"
                target="_blank"
              >
                <span className="cursor-pointer">
                  <FaFacebookSquare size={30} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
