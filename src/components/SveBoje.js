import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SviOblici from "../assets/sve_kombinacije_optimized.webp";
import bg from "../assets/bg.webp";

function SveBoje() {
  return (
    <div>
      <div
        className="bg-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no repeat",
          backgroundSize: "100%",
          minHeight: "100vh",
        }}
      >
        <div className="text-center mt-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#3BC77E] pb-[25px]">
            Svi oblici i boje
          </h1>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#FF553E] pb-[25px] px-4">
            Još kombinacija boja je u pripremi !!!
          </h3>
        </div>
        <div className="flex justify-center 2xl:pb-6">
          <div className="border-1 border-stone-300 rounded-lg">
            <LazyLoadImage
              effect="blur"
              alt="SviOblici"
              src={SviOblici}
              className="pt-0 min-[1471px]:mt-1 min-[1638px]:pt-3 min-[1638px]:pt-6 m-auto px-6 xl:px-0"
            />
          </div>
        </div>
        <Link to="/proizvodi">
          <div className="flex justify-center mt-8 w-full">
            <div className="pb-12">
              <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg duration-500">
                <button className="text-3xl">Poruči Pet ID tag</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SveBoje;
