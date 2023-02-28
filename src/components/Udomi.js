import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/bg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingPlaceHolder, { containerStyles } from "./LoadingPlaceHolder";
import Bone from "../assets/bone.png";
import Boby from "../assets/galerija/bobi_optimized.webp";

function Udomi() {
  return (
    <div
      className="text-gray-700 body-font relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "85vh",
      }}
    >
      <div className="container pt-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold pb-8 mt-12 sm:mt-0 text-center text-[#FF553E]">
            Galerija Srećnih Ljubimaca
          </h1>
          <div className="flex justify-center">
            <img src={Bone} alt="bone" className="hidden floating sm:block" />
            <p className="pt-6 font-bold text-xl sm:text-xl md:text-xl lg:text-xl text-center">
              Ovo su naši ponosni članovi
            </p>
            <img src={Bone} alt="bone" className="hidden floating sm:block" />
          </div>
        </div>
        <div className="list-boxs">
          <div className="card starter">
            <div className="head">Starter</div>
            <div className="ticket">$5.90</div>
            <div className="body">
              <figure className="snip1426">
                <LazyLoadImage
                  effect="blur"
                  src={Boby}
                  loading="lazy"
                  decoding="async"
                  alt="Boby"
                />
                <figcaption>
                  <div>
                    <h4>Boby</h4>
                  </div>
                </figcaption>
              </figure>
              <p>
                Beba traži dom. Ostavljena je na autobuskoj stanici u Smederevu,
                mi smo je sklonili sa ulice kada je imala oko 3 meseca. Sada ima
                6 meseci. Očišćena je od parazita i vakcinisana 3, ima pasoš.
                Naviknuta je na stan, mirna u kolima. Jako je umiljata, voli da
                se šeta, trči i da se igra sa ljudima. Nije agresivna sa ljudima
                i drugim psima. Biće pas srednje veličine. Sterilizacija
                obezbeđena kada za to dođe vreme. Prevoz obezbeđen za Smederevo
                i okolinu.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="card standard">
            <div className="head">Standard</div>
            <div className="ticket">$10.50</div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="card standard">
            <div className="head">Standard</div>
            <div className="ticket">$10.50</div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="card standard">
            <div className="head">Standard</div>
            <div className="ticket">$10.50</div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="card standard">
            <div className="head">Standard</div>
            <div className="ticket">$10.50</div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn">Order Now</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="card standard">
            <div className="head">Standard</div>
            <div className="ticket">$10.50</div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="card premium">
            <div className="head">Premium</div>
            <div className="ticket">$15.90</div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Udomi;
