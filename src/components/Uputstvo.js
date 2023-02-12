import React from "react";
import HvalaSlika from "../assets/love.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Vektor from "../assets/Vector.png";
import Avatar from "../assets/pets.png";
import bg from "../assets/bg.webp";

function Uputstvo() {
  return (
    <div>
      <div
        className="bg-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="text-center mt-12 sm:mt-28">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#3BC77E] pb-[25px]">
            Uputstvo
          </h1>
          <p className="text-[18px] sm:text-xl mt-7 w-[75%] min-[730px]:w-[50%] m-auto">
            Ukoliko ste Pet ID tag kupili u petshop-u ili nekom drugom
            maloprodajnom mestu, ovde ćete naći uputstvo kako da pošaljete
            podatke.
          </p>
          <div className="flex justify-center mt-12 sm:mt-0 flex-col xl:flex-row pt-[50px] items-center">
            <div className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[30%]">
              <div className="flex items-center">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold inline">
                  1. Otvorite stranicu klikom na sličicu{" "}
                  <Link to="/moj-ljubimac">
                    <img
                      src={Avatar}
                      alt="avatar"
                      height="65px"
                      width="48px"
                      className="inline align-middle"
                    />{" "}
                  </Link>
                  u gornjem desnom uglu.
                </p>
              </div>
              <div className="pt-12 flex items-center pb-[15px]">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold">
                  2. Unesite podake o ljubimcu i vaš kontakt.
                </p>
              </div>
              <div className="pt-12 flex items-center">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold">
                  3. Pošaljite i u roku od 24 sata vaš ljubimac je siguran !!!
                </p>
              </div>
            </div>
            <div className="w-[300px] xl:w-[400px] h-auto mt-12">
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                decoding="async"
                alt="HvalaSlika"
                src={HvalaSlika}
              />
            </div>
          </div>
          <Link to="/proizvodi">
            <div className="w-full flex justify-center">
              <div className="flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] sm:w-[321px] h-[64px] rounded-lg mt-16 mb-28">
                <h2 className="text-md sm:text-xl">
                  Naruči kao poklon prijatelju
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Uputstvo;
