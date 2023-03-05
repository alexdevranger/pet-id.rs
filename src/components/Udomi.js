import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/bg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingPlaceHolder, { containerStyles } from "./LoadingPlaceHolder";
import UdomiDetail from "./UdomiDetail";
import Udomi1 from "./Udomi1";
import Bone from "../assets/bone.png";
import Boby from "../assets/galerija/bobi_optimized.webp";
import { FaUserAlt } from "react-icons/fa";
import Mobile from "../assets/mobile_optimized.webp";

function Udomi() {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const cardsData = [
    {
      id: 0,
      imgSrc: "/assets/images/Cezar.jpg",
      dan: "12",
      mesec: "Apr",
      petName: "Mici",
      pol: "Žensko",
      starost: "2 godine",
      vakcinisan: "vakcinisan",
      grad: "Pirot",
      kontakt: "0174758692",
      psp: "Očišćen od parazita / Obezbedjen prevoz",
      galery: [
        "/assets/images/Cezar.jpg",
        "/assets/images/bobi_optimized.webp",
        "/assets/images/stari_optimized.webp",
        "/assets/images/macka02_optimized.webp",
      ],
      text: "Text for card 0",
      btnText: "btn",
      textBack:
        "Text back dd mmmmmmm mmmmmmm mmmmmmmm austrolopitekus eeeeeeeeeeeeeeeee",
    },
    {
      id: 1,
      imgSrc: "/assets/images/bobi_optimized.webp",
      text: "Text for card 1",
      btnText: "Button 1",
      textBack: "Text back dd mmmmmmmmmm mmmmmmmm eeeeeeeeeeeeeeeee",
    },
    {
      id: 2,
      imgSrc: "/assets/images/stari_optimized.webp",
      text: "Text for card 2",
      btnText: "Button 2",
    },
    {
      id: 3,
      imgSrc: "/assets/images/macka02_optimized.webp",
      text: "Text for card 3",
      btnText: "Button 3",
    },
    {
      id: 4,
      imgSrc: "/assets/images/macke_optimized.webp",
      text: "Text for card 4",
      btnText: "Button 4",
    },
    {
      id: 5,
      imgSrc: "/assets/images/mladi_optimized.webp",
      text: "Text for card 5",
      btnText: "Button 5",
    },
  ];
  console.log(cardsData[0].galery);
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "85vh",
      }}
    >
      <div className="container pt-6 mx-auto">
        <div className="m-auto text-center w-full mb-12">
          <h2 className="text-xl sm:text-2xl px-2 md:text-3xl xl:text-6xl lg:px-32 mt-16 text-[#3bc77e]">
            Pridružite nam se u borbi protiv napuštanja ljubimaca!
          </h2>
          <h2 className="text-md sm:text-lg px-6 md:text-xl lg:px-32 mt-16">
            Ako imate psa ili mačku kojima ne možete pružiti brigu koju
            zaslužuju, nemojte ih napuštati - pomoć je na dohvat ruke. Ako ste
            pronašli psa ili mačku na ulici, nemojte ih ostaviti tamo... Vaša
            odluka može spasiti život ovih divnih stvorenja. Ako imate psa ili
            mačku kojima ne možete pružiti ljubav i pažnju koju zaslužuju,
            nemojte ih ostavljati na ulici - pronađite im novi dom i porodicu
            koja će im pružiti sve što im je potrebno.
          </h2>
        </div>

        <div className="cards-container hover:duration-500 text-gray-700 body-font ">
          <UdomiDetail
            slika={cardsData[0].imgSrc}
            dan={cardsData[0].dan}
            mesec={cardsData[0].mesec}
            petName={cardsData[0].petName}
            pol={cardsData[0].pol}
            starost={cardsData[0].starost}
            vakcinisan={cardsData[0].vakcinisan}
            grad={cardsData[0].grad}
            kontakt={cardsData[0].kontakt}
            psp={cardsData[0].psp}
            galery={cardsData[0].galery}
          />
          <Udomi1 />
          {/* KARTA 1*/}
          <div className="card2 duration-500 hover:border hover:border-[#ff543c]">
            <div className="card2-img relative border-b-4 border-[#ff543c]">
              <img src="/assets/images/udomi/1.jpg" />
              <div className="date1">
                05
                <br /> FEB
              </div>
              <div className="udomi-ime1">Mile</div>
            </div>
            <div className="flex flex-col">
              <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#ff543c]">
                <p className="profile__stats__title">Muško</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">2 meseca</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">Vakcinisan</p>
              </div>

              <div className="w-full flex justify-between items-center relative">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                        <img
                          src="/assets/images/map-icon.svg"
                          alt="heart"
                          width="13px"
                          style={{ marginRight: "10px" }}
                        />
                        Pančevo
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                    0131234567
                  </h5>
                </div>

                <div className="absolute text-[13px] smallSub">
                  Očišćen od parazita / Sterilisan
                </div>
              </div>

              <div className="flex flex-row justify-evenly items-center mb-4">
                <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
                  <h2 onClick={() => setShowModal1(true)}>Galerija</h2>
                </button>
                <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
                  <h2 onClick={() => setShowModal2(true)}>Više...</h2>
                </button>
              </div>
            </div>
            {showModal1 ? (
              <>
                <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-2xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold flex items-center">
                          Boby online{" "}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {
                            setShowModal1(false);
                          }}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex flex-col">
                        <div className="CSSgal">
                          <s id="s1"></s>
                          <s id="s2"></s>
                          <s id="s3"></s>
                          <s id="s4"></s>

                          <div className="slider">
                            <div style={{ background: "#5b8" }}>
                              <img
                                src="/assets/images/udomi/1.jpg"
                                className="text-ceneter m-auto"
                              />
                            </div>
                            <div style={{ background: "#85b" }}>
                              <img
                                src="/assets/images/udomi/1.jpg"
                                className="text-ceneter m-auto"
                              />
                            </div>
                            <div style={{ background: "#e95" }}>
                              <img
                                src="/assets/images/udomi/1.jpg"
                                className="text-ceneter m-auto"
                              />
                            </div>
                            <div style={{ background: "#e59" }}>
                              <img
                                src="/assets/images/udomi/1.jpg"
                                className="text-ceneter m-auto"
                              />
                            </div>
                          </div>

                          <div className="prevNext">
                            <div>
                              <a href="#s4">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s2">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s1">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s3">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s2">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s4">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s3">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s1">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                          </div>

                          <div className="bullets">
                            <a href="#s1">1</a>
                            <a href="#s2">2</a>
                            <a href="#s3">3</a>
                            <a href="#s4">4</a>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal1(false);
                          }}
                        >
                          Zatvori
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
            {showModal2 ? (
              <>
                <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-2xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold flex items-center">
                          Boby online{" "}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {
                            setShowModal2(false);
                          }}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex flex-col">
                        <p className="text-left">
                          Cezar je vraćen i ponovo traži dom. Osoba koja ga je
                          usvojila vratila ga je jer "se ne slaže sa mačkama i
                          pernatim životinjama". Spasili smo ga sa ulice kada je
                          imao svega mesec dana, sada ima oko 5 i po meseci,
                          vakcinisan je i očišćen od parazita, veseo i mazan.
                          Ponovo tražimo dom za Cezara u kome će biti voljen, a
                          što će on mnogostruko vratiti.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal2(false);
                          }}
                        >
                          Zatvori
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>

          {/* KARTA 2*/}
          <div className="card2 duration-500 hover:border hover:border-[#3bc77e]">
            <div className="card2-img relative border-b-4 border-[#3bc77e]">
              <img src="/assets/images/udomi/2.jpg" />
              <div className="date">
                07
                <br /> MAR
              </div>
              <div className="udomi-ime">Srle</div>
            </div>

            <div className="flex flex-col">
              <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#3bc77e]">
                <p className="profile__stats__title">Muško</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">2 meseca</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">Vakcinisan</p>
              </div>
              <div className="w-full flex justify-between items-center relative">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                        <img
                          src="/assets/images/map-icon.svg"
                          alt="heart"
                          width="13px"
                          style={{ marginRight: "10px" }}
                        />
                        Niš
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                    0181234567
                  </h5>
                </div>
                <div className="absolute text-[13px] smallSub">
                  Očišćen od parazita / Obezbedjen prevoz
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center mb-4">
                <button className="udomi-btn hover:bg-[#ff543c] hover:duration-500">
                  <h2>Galerija</h2>
                </button>
                <button className="udomi-btn hover:bg-[#ff543c] hover:duration-500">
                  <h2>Više...</h2>
                </button>
              </div>
            </div>
          </div>

          {/* KARTA 3*/}
          <div className="card2 duration-500 hover:border hover:border-[#ff543c]">
            <div className="card2-img relative border-b-4 border-[#ff543c]">
              <img src="/assets/images/udomi/3.jpg" />
              <div className="date1">
                05
                <br /> FEB
              </div>
              <div className="udomi-ime1">Majro</div>
            </div>
            <div className="flex flex-col">
              <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#ff543c]">
                <p className="profile__stats__title">Muško</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">2 meseca</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">Vakcinisan</p>
              </div>

              <div className="w-full flex justify-between items-center relative">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                        <img
                          src="/assets/images/map-icon.svg"
                          alt="heart"
                          width="13px"
                          style={{ marginRight: "10px" }}
                        />
                        Beograd
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                    063123456
                  </h5>
                </div>
                <div className="absolute text-[13px] smallSub">
                  Očišćena od parazita / Sterilisana / Prevoz
                </div>
              </div>

              <div className="flex flex-row justify-evenly items-center mb-4">
                <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
                  <h2>Galerija</h2>
                </button>
                <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
                  <h2>Više...</h2>
                </button>
              </div>
            </div>
          </div>

          {/* KARTA 4 */}
          <div className="card2 duration-500 hover:border hover:border-[#3bc77e]">
            <div className="card2-img relative border-b-4 border-[#3bc77e]">
              <img src="/assets/images/udomi/4.jpg" />
              <div className="date">
                07
                <br /> MAR
              </div>
              <div className="udomi-ime">Skubi Du</div>
            </div>

            <div className="flex flex-col">
              <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#3bc77e]">
                <p className="profile__stats__title">Muško</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">2 meseca</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">Vakcinisan</p>
              </div>
              <div className="w-full flex justify-between items-center relative">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                        <img
                          src="/assets/images/map-icon.svg"
                          alt="heart"
                          width="13px"
                          style={{ marginRight: "10px" }}
                        />
                        Smederevo
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                    0611234567
                  </h5>
                </div>
                <div className="absolute text-[13px] smallSub">
                  Očišćen od parazita
                </div>
              </div>
              <div className="flex flex-row justify-evenly items-center mb-4">
                <button className="udomi-btn hover:bg-[#ff543c] hover:duration-500">
                  <h2>Galerija</h2>
                </button>
                <button className="udomi-btn hover:bg-[#ff543c] hover:duration-500">
                  <h2>Više...</h2>
                </button>
              </div>
            </div>
          </div>

          {/* Karta 5 */}
          <div className="card2 duration-500 hover:border hover:border-[#ff543c]">
            <div className="card2-img relative border-b-4 border-[#ff543c]">
              <img src="/assets/images/udomi/5.jpg" />
              <div className="date1">
                05
                <br /> FEB
              </div>
              <div className="udomi-ime1">Mačići</div>
            </div>
            <div className="flex flex-col">
              <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#ff543c]">
                <p className="profile__stats__title">Muško</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">2 meseca</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">Vakcinisan</p>
              </div>

              <div className="w-full flex justify-between items-center relative">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                        <img
                          src="/assets/images/map-icon.svg"
                          alt="heart"
                          width="13px"
                          style={{ marginRight: "10px" }}
                        />
                        Beograd
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                    0691234567
                  </h5>
                </div>
                <div className="absolute text-[13px] smallSub">Sterilisan</div>
              </div>

              <div className="flex flex-row justify-evenly items-center mb-4">
                <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
                  <h2>Galerija</h2>
                </button>
                <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
                  <h2>Više...</h2>
                </button>
              </div>
            </div>
          </div>

          {/* KARTA 6 */}
          <div className="card2 duration-500 hover:border hover:border-[#3bc77e] relative">
            <div className="card2-img relative border-b-4 border-[#3bc77e]">
              <img src="/assets/images/udomi/6.jpg" />
              <div className="date">
                07
                <br /> MAR
              </div>
              <div className="udomi-ime">Štenci</div>
            </div>

            <div className="flex flex-col">
              <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#3bc77e]">
                <p className="profile__stats__title">Muško</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">2 meseca</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
                <p className="profile__stats__title">Vakcinisan</p>
              </div>

              <div className="w-full flex justify-between items-center relative">
                <div className="flex flex-row">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                      <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                        <img
                          src="/assets/images/map-icon.svg"
                          alt="heart"
                          width="13px"
                          style={{ marginRight: "10px" }}
                        />
                        Beograd
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                    0671234567
                  </h5>
                </div>
                <div className="absolute text-[13px] smallSub">
                  Očišćen od parazita / Sterilisan
                </div>
              </div>

              <div className="flex flex-row justify-evenly items-center mb-4">
                <button className="udomi-btn hover:bg-[#ff543c] hover:duration-500">
                  <h2>Galerija</h2>
                </button>
                <button className="udomi-btn hover:bg-[#ff543c] hover:duration-500">
                  <h2>Više...</h2>
                </button>
              </div>
            </div>
            {/* <svg className="heart" viewBox="0 0 32 29.6">
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg> */}
          </div>
        </div>
        {/* <div className="cards-container">{cards}</div> */}
        <div className="m-auto text-center w-full mb-12">
          <h2 className="text-xl sm:text-2xl px-2 md:text-3xl xl:text-6xl lg:px-32 mt-16 text-[#3bc77e]">
            PET ID CHAT
          </h2>
          <h2 className="text-md sm:text-lg px-6 md:text-xl lg:px-32 mt-4">
            Ovde možete da se dopisujete, pitate sve sto se tiče ljubimaca za
            udomljavanje!
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[300px] md:w-[70%] sm:w-[50%] xl:w-[50%] shadow shadow-[0_10px_10px_5px_rgb(0,0,0,0.15)] hover:shadow-[0_10px_10px_5px_#3bc77e] hover:border hover:border-[#3bc77e] transition ease-in-out duration-500">
            <iframe
              src="https://www5.cbox.ws/box/?boxid=941682&boxtag=OYJfB3"
              width="100%"
              height="450"
              allowtransparency="yes"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="auto"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Udomi;
