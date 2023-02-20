import React from "react";
import bg from "../assets/bg.webp";

function Galery() {
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

        <section className="container">
          <div className="card_outer">
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">This is title</h2>
                <p className="copy">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Galery;
