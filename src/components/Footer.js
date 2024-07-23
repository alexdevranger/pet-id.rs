import React from "react";

import PETnav from "../assets/PETnav.svg";

import { Link, useParams } from "react-router-dom";

import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    // <div className="w-full mx-auto py-1 px-6 flex justify-between text-white bg-[#FF553E] items-center flex-col md:flex-row">
    //   <div className="flex justify-center md:justify-start mt-5 md:mt-0">
    //     <img src={PETnav} className="w-[120px]" alt="logo" />
    //   </div>

    //   <div className="w-[95%] flex items-center flex-col-reverse sm:flex-row">
    //     <div className="flex flex-row justify-evenly w-full items-center md:flex-col sm:flex-col lg:flex-col">
    //       <div className="flex justify-center flex-col items-left">
    //         <p className="text-[16px] min-[315px]:text-[18px] mt-4 md:mt-0">
    //           ID PROTECT PR ALEKSANDAR MILIVOJEVIĆ
    //         </p>
    //         <p className="text-[16px] min-[315px]:text-[18px] mt-4 md:mt-0">
    //           Branka Radičevića 14 19350 Knjaževac
    //         </p>
    //         <p className="text-[16px] min-[315px]:text-[18px] mt-4 md:mt-0">
    //           Matični broj: 66930815
    //         </p>
    //         <p className="text-[16px] min-[315px]:text-[18px] mt-4 md:mt-0">
    //           PIB 113585474 &nbsp;T.R. 265-1100310081703-59
    //         </p>
    //       </div>
    //       <div className="flex justify-center flex-col items-center">
    //         <p className="text-[16px] min-[315px]:text-[18px] mt-4 md:mt-0">
    //           Sva prava zadržana © 2023 Pet ID
    //         </p>
    //         <div className="px-6 flex flex-row pt-2">
    //           <p className="text-[14px] min-[315px]:text-[18px] md:text-[18px] mt-2">
    //             <Link
    //               to="/politika-privatnosti"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Politika privatnosti
    //             </Link>
    //           </p>
    //           <p className="text-[14px] min-[315px]:text-[18px] md:text-[18px] mt-2 pl-6">
    //             <Link to="/uslovi-koriscenja" target="_blank" rel="noreferrer">
    //               Uslovi korišćenja
    //             </Link>
    //           </p>
    //           <p className="text-[14px] min-[315px]:text-[18px] md:text-[18px] mt-2 pl-6">
    //             <Link to="/kontakt" rel="noreferrer">
    //               Kontakt
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex align-center">
    //       <div className="flex justify-center w-[287px] md:w-[236px] flex-col flex-col-reverse items-center sm:items-end">
    //         <div>
    //           <span className="text-1xl min-[412px]:text-2xl sm:text-2xl text-[#fff] font-bold lg:text-2xl pl-1 items-center align-sub">
    //             060/60-12-199
    //           </span>
    //         </div>
    //         <div className="flex justify-between md:w-[75%] my-3 w-[50%] items-center">
    //           <a
    //             href="https://www.instagram.com/pet.id.rs/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <span className="cursor-pointer">
    //               <FaInstagram size={30} />
    //             </span>
    //           </a>
    //           <a
    //             href="https://www.tiktok.com/@petid.rs"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <span className="cursor-pointer">
    //               <FaTiktok size={30} />
    //             </span>
    //           </a>
    //           <a
    //             href="https://www.facebook.com/profile.php?id=100086578725019"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <span className="cursor-pointer">
    //               <FaFacebookSquare size={30} />
    //             </span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <footer className="bg-[#FF553E] py-4 md:py-6 lg:py-8">
    //   <div className="container flex flex-col md:flex-row justify-between items-center">
    //     <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
    //       <img src={PETnav} alt="logo" className="w-[120px]" />
    //     </div>
    //     <div className="flex flex-col md:flex-row justify-center md:justify-between lg:justify-start w-full">
    //       <div className="flex flex-col items-center md:items-start">
    //         <p className="text-white text-sm md:text-base lg:text-lg mt-2 md:mt-0">
    //           ID PROTECT PR ALEKSANDAR MILIVOJEVIĆ
    //         </p>
    //         <p className="text-white text-sm md:text-base lg:text-lg mt-2 md:mt-0">
    //           Branka Radičevića 14 19350 Knjaževac
    //         </p>
    //         <p className="text-white text-sm md:text-base lg:text-lg mt-2 md:mt-0">
    //           Matični broj: 66930815
    //         </p>
    //         <p className="text-white text-sm md:text-base lg:text-lg mt-2 md:mt-0">
    //           PIB 113585474 &nbsp;T.R. 265-1100310081703-59
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center md:items-end lg:items-center">
    //         <p className="text-white text-sm md:text-base lg:text-lg mt-2 md:mt-0">
    //           Sva prava zadržana © 2023 Pet ID
    //         </p>
    //         <div className="flex flex-row mt-4 md:mt-0 items-center">
    //           <p className="text-white text-sm md:text-base lg:text-lg mr-6">
    //             <a
    //               href="/politika-privatnosti"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               Politika privatnosti
    //             </a>
    //           </p>
    //           <p className="text-white text-sm md:text-base lg:text-lg mr-6">
    //             <a href="/uslovi-koriscenja" target="_blank" rel="noreferrer">
    //               Uslovi korišćenja
    //             </a>
    //           </p>
    //           <p className="text-white text-sm md:text-base lg:text-lg">
    //             <a href="/kontakt" rel="noreferrer">
    //               Kontakt
    //             </a>
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
    //           <div className="flex flex-col items-center md:items-end lg:items-center">
    //             <p className="text-white text-lg lg:text-xl font-bold mb-2 md:mb-0">
    //               060/60-12-199
    //             </p>
    //             <div className="flex items-center justify-center md:justify-start lg:justify-center">
    //               <a
    //                 href="https://www.instagram.com/pet.id.rs/"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaInstagram
    //                   size={30}
    //                   className="text-white mr-4 lg:mr-8"
    //                 />
    //               </a>
    //               <a
    //                 href="https://www.tiktok.com/@petid.rs"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaTiktok size={30} className="text-white" />
    //               </a>
    //               <a
    //                 href="https://www.facebook.com/profile.php?id=100086578725019"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaFacebookSquare size={30} className="text-white" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-[#FF553E] text-white py-6 relative">
      <div className="w-full mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,3fr,1fr] gap-6">
          <div className="md:col-span-1 h-full flex flex-col items-center justify-evenly">
            <div className="flex items-center justify-center">
              <img src={PETnav} alt="logo" className="w-[250px] md:w-[200px]" />
            </div>
            <div className="flex justify-center my-6 w-[70%] md:w-[100%] lg:w-[100%] m-auto">
              <a
                href="https://www.instagram.com/pet.id.rs/"
                target="_blank"
                rel="noreferrer"
                className="align-center m-auto"
              >
                <FaInstagram size={30} className="text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@petid.rs"
                target="_blank"
                rel="noreferrer"
                className="align-center m-auto"
              >
                <FaTiktok size={30} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086578725019"
                target="_blank"
                rel="noreferrer"
                className="align-center m-auto"
              >
                <FaFacebookSquare size={30} className="text-white" />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left md:col-span-1 h-full flex flex-col items-center justify-center">
            <p>ID PROTECT PR ALEKSANDAR MILIVOJEVIĆ</p>
            <p>Aleksandra Belića 15, 11160 Beograd</p>
            <p>Matični broj: 66930815</p>
            <p>PIB 113585474</p>
          </div>
          <div className="text-center md:text-left md:col-span-1 h-full flex flex-col items-center justify-evenly">
            <ul>
              <li className="text-[20px] xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[20px]">
                <a href="/politika-privatnosti" className="hover:underline">
                  Politika privatnosti
                </a>
              </li>
              <li className="text-[20px] xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[20px]">
                <a href="/uslovi-koriscenja" className="hover:underline">
                  Uslovi korišćenja
                </a>
              </li>
              <li className="text-[20px] xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[20px]">
                <a href="/kontakt" className="hover:underline">
                  Kontakt
                </a>
              </li>
              <li className="text-[20px]">
                <a href="/kontakt" className="hover:underline">
                  <p>060/60-12-199</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#323232] h-[30px] w-full pt-3 pb-3 flex items-center justify-center absolute mt-[10px] border-t border-gray-200">
        <p className="text-[16px] text-[#787878]">
          Sva prava zadržana © 2024 Pet ID
        </p>
      </div>
    </footer>
  );
};

export default Footer;
