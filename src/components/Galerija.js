import React from "react";
import bg from "../assets/bg.webp";
import Maza from "../assets/maza.jpg";

function Galerija() {
  return (
    <div
      className="text-gray-700 body-font relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container pt-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold pb-8 mt-12 sm:mt-0 text-center text-[#FF553E]">
            Galerija Srećnih Ljubimaca
          </h1>
          <p className="pt-8 font-bold text-xl sm:text-xl md:text-xl lg:text-xl text-center">
            Ovo su naši ponosni članovi
          </p>
        </div>
        <figure className="snip1426">
          <img src={Maza} alt="sample70" />
          <figcaption>
            <div>
              <h2>Hanson</h2>
              <h4>Deck</h4>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1426">
          <img src={Maza} alt="sample87" />
          <figcaption>
            <div>
              <h2>Fleece</h2>
              <h4>Marigold</h4>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1426">
          <img src={Maza} alt="sample96" />
          <figcaption>
            <div>
              <h2>Malcolm</h2>
              <h4>Function</h4>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1426">
          <img src={Maza} alt="sample96" />
          <figcaption>
            <div>
              <h2>Malcolm</h2>
              <h4>Function</h4>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1426">
          <img src={Maza} alt="sample96" />
          <figcaption>
            <div>
              <h2>Malcolm</h2>
              <h4>Function</h4>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1426">
          <img src={Maza} alt="sample96" />
          <figcaption>
            <div>
              <h2>Malcolm</h2>
              <h4>Function</h4>
            </div>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </div>
  );
}

export default Galerija;
