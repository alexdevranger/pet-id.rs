import React from "react";
import PETnav from "../assets/PETnav.svg";
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto py-1 px-6 flex justify-between text-white bg-[#FF553E] items-center flex-col md:flex-row">
      <div className="flex justify-center md:justify-start mt-5 md:mt-0">
        <img src={PETnav} className="w-1/2 md:w-1/2" alt="logo" />
      </div>

      <div className="w-[95%] flex items-center flex-col-reverse md:flex-row">
        <div className="flex justify-center w-full flex-col items-center">
          <p className="text-[16px] min-[315px]:text-[18px]">All right reserved © 2023 Pet ID</p>
          <div className="px-6 flex flex-row pt-2">
          <p className="text-[10px] min-[315px]:text-[11px] md:text-[13px] mt-2"> 
            <a href="https://www.pet-id.rs/politika-privatnosti"
              target="_blank"
              rel="noreferrer"
              >
                Politika privatnosti
            </a>
          </p>
          <p className="text-[10px] min-[315px]:text-[11px] md:text-[13px] mt-2 pl-6">
            <a href="https://www.pet-id.rs/uslovi-koriscenja"
              target="_blank"
              rel="noreferrer"
              >
                Uslovi koriscenja
            </a>
          </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center w-[287px] md:w-[236px] flex-col-reverse md:flex-row">
            <div className="flex justify-between md:w-[75%] my-6">
              <a
                href="https://www.instagram.com/pet.id.rs/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="cursor-pointer">
                  <FaInstagram size={30} />
                </span>
              </a>
              <a
                href="https://www.tiktok.com/@petid.rs"
                target="_blank"
                rel="noreferrer"
              >
                <span className="cursor-pointer">
                  <FaTiktok size={30} />
                </span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086578725019"
                target="_blank"
                rel="noreferrer"
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
