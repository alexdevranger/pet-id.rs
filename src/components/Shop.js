import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Srce from "../assets/srce_optimized.webp";
import Koskica from "../assets/koskica_optimized.webp";
import Krug from "../assets/krug_optimized.webp";
import Korak1Slika from "../assets/lem_optimized.webp";
import SrceORPersp from "../assets/006_optimized.webp";
import SrceORBack from "../assets/005_optimized.webp";
import KoskaZlPersp from "../assets/036_optimized.webp";
import KoskaZlBack from "../assets/035_optimized.webp";
import KrugPlPersp from "../assets/018_optimized.webp";
import KrugPllBack from "../assets/017_optimized.webp";
import Izaberi from "../assets/z-img_optimized.webp";
import kindcat from "../assets/kindcat_optimized.webp";
import bg from "../assets/bg.webp";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [cir, setCir] = useState(false);
  const [bon, setBon] = useState(false);
  const [hea, setHea] = useState(false);
  const link = `/proizvodi/${selectedItem}`;
  const ErrorNotify = () => toast.error("Selektujete izabrani oblik.");

  return (
    <div
      className="shop"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Gornje slike */}
      <div className="w-full flex items-center absolute justify-between mt-[16rem] mb-32 min-[350px]:mt-[12rem] min-[410px]:mt-[10rem] sm:mt-[7rem] md:mt-[7rem] lg:mt-12 xl:mt-0 2xl:-mt-12">
        <div className="imgIzaberiHolder flex justify-start w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            decoding="async"
            alt="Izaberi"
            src={Izaberi}
          />
        </div>
        <div className="imgIzaberiHolder flex justify-end w-1/4 sm:w-1/4 md:w-1/5 lg:w-32 xl:w-48">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            decoding="async"
            alt="kindcat"
            src={kindcat}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-32 min-[410px]:mb-36 min-[496px]:mb-48 min-[600px]:mb-48 sm:mb-52 md:mb-36 lg:mb-56 mt-8 sm:mt-12 md:mt-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mt-7 px-4 pb-4">
          KORAK 1 <br /> Izaberite oblik priveska za vašeg ljubimca{" "}
        </h1>
        <p className="block px-6 mx-auto">
          Na ovoj stranici unosite podatke samo ako naručujete tag preko ovog
          sajta
        </p>
      </div>

      {/* Privesci */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-around mt-14 w-full">
        {/* Koskica */}
        <div
          id="koskica"
          onClick={() => {
            setSelectedItem("koskica");
            setHea(false);
            setBon(true);
            setCir(false);
          }}
          className={`${
            bon ? "bg-[#fff6a2] border-[#3BC77E]" : ""
          } w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[300px] xl:w-[350px] border-2 rounded-md hover:bg-[#f5f5dc] hover:border-[#3BC77E] transition-all ease-in-out duration-500 relative bs cursor-pointer`}
        >
          {" "}
          <label htmlFor="bone">
            <input type="radio" name="oblik" id="bone" />
            {bon && (
              <div className="svgholder">
                <svg
                  className="check"
                  version="1.1"
                  viewBox="0 0 59 42"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>check</title>
                  <desc>Created with Sketch.</desc>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="m4.5 20.5 16.53 16.53 33.47-32.53"
                      stroke="#ffc530"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="8"
                    />
                  </g>
                </svg>
              </div>
            )}
            <figure>
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                decoding="async"
                alt="KoskaZlPersp"
                src={KoskaZlPersp}
              />
            </figure>

            <p name="KoskicaName" className="text-center pt-2 font-bold">
              Pet ID Koskica
            </p>
            <p className="text-center pt-2 text-[#3BC77E] font-bold pb-6 text-4xl">
              1.600,00 rs
            </p>
            <div className="flex">
              <div className="bg-[#e3583e] w-6/12 h-16 inline-block ">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="Koskica"
                  src={Koskica}
                />
              </div>

              <div className="bg-[#ffc530] w-6/12  h-16  inline-block ">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="KoskaZlBack"
                  src={KoskaZlBack}
                />
              </div>
            </div>
          </label>
        </div>

        {/* Srce */}
        <div
          id="srce"
          onClick={() => {
            setSelectedItem("srce");
            setHea(true);
            setBon(false);
            setCir(false);
          }}
          className={`${
            hea ? "bg-[#fff6a2] border-[#3BC77E] mt-28 lg:mt-0" : ""
          }  w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[300px] xl:w-[350px] border-2 rounded-md hover:bg-[#f5f5dc] hover:border-[#3BC77E] transition-all ease-in-out duration-500 relative bs cursor-pointer mt-28 lg:mt-0`}
        >
          <label htmlFor="boheartne">
            <input type="radio" name="oblik" id="heart" />
            {hea && (
              <div className="svgholder">
                <svg
                  className="check"
                  version="1.1"
                  viewBox="0 0 59 42"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>check</title>
                  <desc>Created with Sketch.</desc>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="m4.5 20.5 16.53 16.53 33.47-32.53"
                      stroke="#ffc530"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="8"
                    />
                  </g>
                </svg>
              </div>
            )}
            <figure>
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                decoding="async"
                alt="SrceORPersp"
                src={SrceORPersp}
              />
            </figure>

            <p className="text-center pt-2 font-bold">Pet ID Srce</p>
            <p className="text-center pt-2 text-[#3BC77E] font-bold pb-6 text-4xl">
              1.600,00 rsd
            </p>
            <div className="flex">
              <div className="bg-[#e3583e] w-6/12 h-16 inline-block">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="Srce"
                  src={Srce}
                />
              </div>

              <div className="bg-[#ffc530] w-6/12  h-16  inline-block">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="SrceORBack"
                  src={SrceORBack}
                />
              </div>
            </div>
          </label>
        </div>

        {/* Krug */}
        <div
          id="krug"
          onClick={() => {
            setSelectedItem("krug");
            setHea(false);
            setBon(false);
            setCir(true);
          }}
          className={`${
            cir ? "bg-[#fff6a2] border-[#3BC77E] mt-28 lg:mt-0" : ""
          } w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[300px] xl:w-[350px] border-2 rounded-md hover:bg-[#f5f5dc] hover:border-[#3BC77E] transition-all ease-in-out duration-500 relative bs cursor-pointer mt-28 lg:mt-0`}
        >
          <label htmlFor="krugic">
            <input type="radio" name="oblik" id="krugic" />
            {cir && (
              <div className="svgholder">
                <svg
                  className="check"
                  version="1.1"
                  viewBox="0 0 59 42"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>check</title>
                  <desc>Created with Sketch.</desc>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="m4.5 20.5 16.53 16.53 33.47-32.53"
                      stroke="#ffc530"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="8"
                    />
                  </g>
                </svg>
              </div>
            )}
            <figure>
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                decoding="async"
                alt="KrugPlPersp"
                src={KrugPlPersp}
              />
            </figure>

            <p className="text-center pt-2 font-bold">Pet ID Krug</p>
            <p className="text-center pt-2 text-[#3BC77E] font-bold pb-6 text-4xl">
              1.600,00 rs
            </p>

            <div className="flex">
              <div className="bg-[#e3583e] w-6/12 h-16 inline-block ">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="Krug"
                  src={Krug}
                />
              </div>

              <div className="bg-[#ffc530] w-6/12  h-16  inline-block ">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="KrugPllBack"
                  src={KrugPllBack}
                />
              </div>
            </div>
          </label>
        </div>
      </div>
      {cir === false && hea === false && bon === false && (
        <div className="flex justify-around mt-32 w-full">
          <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg mt-16 duration-500">
            <h3
              className="text-[1.3rem] min-[410px]:text-[1.75rem]"
              onClick={ErrorNotify}
            >
              Sledeći korak
            </h3>
            <Toaster
              position="top-center"
              toastOptions={{
                className: "",
                style: {
                  border: "1px solid red",
                  padding: "16px",
                  color: "red",
                  width: "300px",
                  background: "white",
                },
              }}
            />
          </div>
        </div>
      )}
      {cir === true && (
        <div className="flex justify-around mt-32 w-full">
          <Link to={link}>
            <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg mt-16 duration-500">
              <h3 className="text-[1.3rem] min-[410px]:text-[1.75rem]">
                Sledeći korak
              </h3>
            </div>
          </Link>
        </div>
      )}
      {bon === true && (
        <div className="flex justify-around mt-32 w-full">
          <Link to={link}>
            <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg mt-16 duration-500">
              <h3 className="text-[1.3rem] min-[410px]:text-[1.75rem]">
                Sledeći korak
              </h3>
            </div>
          </Link>
        </div>
      )}
      {hea === true && (
        <div className="flex justify-around mt-32 w-full">
          <Link to={link}>
            <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg mt-16 duration-500">
              <h3 className="text-[1.3rem] min-[410px]:text-[1.75rem]">
                Sledeći korak
              </h3>
            </div>
          </Link>
        </div>
      )}
      <div className="w-full mt-24 flex justify-around mb-6">
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          decoding="async"
          alt="Korak1Slika"
          src={Korak1Slika}
          className="w-[700px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default Shop;
