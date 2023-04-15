import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import HvalaSlika from "../assets/love_optimized.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Vektor from "../assets/Vector.png";
import Avatar from "../assets/pets_optimized.png";
import bg from "../assets/bg.webp";
import KoskicaZl from "../assets/koskica_optimized.webp";
import KoskicaCr from "../assets/koskicaCr_optimized.webp";
import koskicaPl from "../assets/koskicaPL_optimized.webp";
import koskicaRo from "../assets/koskicaRo_optimized.webp";
import SrcePl from "../assets/srceBlue_optimized.webp";
import SrceRo from "../assets/srceRo_optimized.webp";
import Srce from "../assets/srce_optimized.webp";
import SrceBlue from "../assets/srcePl_optimized.webp";
import SrceZl from "../assets/srceZl_optimized.webp";
import KrugPl from "../assets/krug_optimized.webp";
import KrugRo from "../assets/krugRo_optimized.webp";
import KrugOr from "../assets/krugOr_optimized.webp";
import KrugBlue from "../assets/krugBlue_optimized.webp";
import KrugZl from "../assets/krugZl_optimized.webp";

function Poklon() {
  const form = useForm({
    defaultValues: {
      brojPorudzbine: "",
      tag: "",
      imePrimaoca: "",
      brojPrimaoca: "",
      zip: "",
      adresaPrimaoca: "",
      grad: "",
      drzava: "Srbija",
      posebnaNapomena: "",
    },
    mode: "onChange",
  });
  const {
    register,
    watch,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors },
    reset,
  } = form;

  const [activeThumb, setActiveThumb] = useState(KoskicaZl);
  const narudzba = useRef(Math.floor(1000000 + Math.random() * 9000000));

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
        <div className="text-center mt-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#3BC77E] pb-[25px]">
            Kupi kao POKLON
          </h1>
          <p className="text-[18px] sm:text-xl mt-7 w-[75%] min-[730px]:w-[50%] m-auto">
            Ukoliko želite da poklonite dragoj osobi Pet ID tag za njenog
            čupavog prijatelja, pratite sledeće uputstvo :
          </p>
          <div className="flex justify-center mt-12 sm:mt-0 flex-col xl:flex-row pt-[50px] items-center">
            <div className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%] bs py-12 bg-[#fff]">
              <div className="flex items-center">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold inline">
                  1. Popunite sledeću formu sa podacima za dostavu i pošaljite.
                </p>
              </div>
              <div className="pt-12 flex items-center pb-[15px]">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold">
                  2. Zapišite broj porudžbine koji će vam izaći.
                </p>
              </div>
              <div className="pt-12 flex items-center">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold">
                  3. Pošaljite uplatu sa sledećim podacima:
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;Ime firme - "ID PROTECT" PR Knjaževac
                  <br />
                  &nbsp;&nbsp;&nbsp;Tekući račun - 265-1100310081703-59
                  <br />
                  &nbsp;&nbsp;&nbsp;Iznos - 1600,00 din
                  <br />
                  &nbsp;&nbsp;&nbsp;Svrha uplate - broj porudžbine
                </p>
              </div>
              <div className="pt-12 flex items-center">
                <img className="pr-12" src={Vektor} alt="Vektor" />
                <p className="text-black text-left text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold">
                  4. Pet ID tag će biti poslat u roku od 48h.
                </p>
              </div>
            </div>
          </div>
          <div
            className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%]"
            style={{ margin: "auto" }}
          >
            <div className="flex items-center justify-center">
              <div className="flex w-[300px] md:w-[330px] lg:w-[330px]">
                <div
                  onClick={() => setActiveThumb(KoskicaZl)}
                  className={`${
                    activeThumb === KoskicaZl
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="koskica-crno-zelena">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KoskicaZl}
                        loading="lazy"
                        decoding="async"
                        alt="KoskicaZl"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="koskica-crno-zelena"
                      id="koskica-crno-zelena"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(KoskicaCr)}
                  className={`${
                    activeThumb === KoskicaCr
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-red-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="koskica-crno-crvena">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KoskicaCr}
                        loading="lazy"
                        decoding="async"
                        alt="KoskicaCr"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="koskica-crno-crvena"
                      id="koskica-crno-crvena"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(koskicaPl)}
                  className={`${
                    activeThumb === koskicaPl
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="koskica-crno-plava">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={koskicaPl}
                        loading="lazy"
                        decoding="async"
                        alt="koskicaPl"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="koskica-crno-plava"
                      id="koskica-crno-plava"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(koskicaRo)}
                  className={`${
                    activeThumb === koskicaRo
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="koskica-roze">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={koskicaRo}
                        loading="lazy"
                        decoding="async"
                        alt="koskicaRo"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="koskica-roze"
                      id="koskica-roze"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%]"
            style={{ margin: "auto" }}
          >
            <div className="flex items-center justify-center">
              <div className="flex w-[300px] md:w-[330px] lg:w-[330px]">
                <div
                  onClick={() => setActiveThumb(SrceRo)}
                  className={`${
                    activeThumb === SrceRo
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3b63c7] transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="srce-roze">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={SrceRo}
                        loading="lazy"
                        decoding="async"
                        alt="SrceRo"
                      />
                    </figure>
                    <input
                      type="radio"
                      value="srce-roze"
                      id="srce-roze"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(SrcePl)}
                  className={`${
                    activeThumb === SrcePl
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="srce-crno-svetlo-plavo">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={SrcePl}
                        loading="lazy"
                        decoding="async"
                        alt="SrcePl"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="srce-crno-svetlo-plavo"
                      id="srce-crno-svetlo-plavo"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(Srce)}
                  className={`${
                    activeThumb === Srce ? "bg-[#fff6a2] border-[#3BC77E]" : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-orange-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="srce-narandzasto-belo">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={Srce}
                        loading="lazy"
                        decoding="async"
                        alt="Srce"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="srce-narandzasto-belo"
                      id="srce-narandzasto-belo"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(SrceBlue)}
                  className={`${
                    activeThumb === SrceBlue
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="srce-svetlo-plavo-belo">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={SrceBlue}
                        loading="lazy"
                        decoding="async"
                        alt="SrceBlue"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="srce-svetlo-plavo-belo"
                      id="srce-svetlo-plavo-belo"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(SrceZl)}
                  className={`${
                    activeThumb === SrceZl
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="srce-svetlo-zeleno-belo">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={SrceZl}
                        loading="lazy"
                        decoding="async"
                        alt="SrceZl"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="srce-svetlo-zeleno-belo"
                      id="srce-svetlo-zeleno-belo"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%]"
            style={{ margin: "auto" }}
          >
            <div className="flex items-center justify-center">
              <div className="flex w-[300px] md:w-[330px] lg:w-[330px]">
                <div
                  onClick={() => setActiveThumb(KrugPl)}
                  className={`${
                    activeThumb === KrugPl
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3b63c7] transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="krug-svetlo-plava-bela">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KrugPl}
                        loading="lazy"
                        decoding="async"
                        alt="KrugPl"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="krug-svetlo-plava-bela"
                      id="krug-svetlo-plava-bela"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(KrugRo)}
                  className={`${
                    activeThumb === KrugRo
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="krug-roze">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KrugRo}
                        loading="lazy"
                        decoding="async"
                        alt="KrugRo"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="krug-roze"
                      id="krug-roze"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(KrugOr)}
                  className={`${
                    activeThumb === KrugOr
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-orange-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="krug-crno-narandzasta">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KrugOr}
                        loading="lazy"
                        decoding="async"
                        alt="KrugOr"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="krug-crno-narandzasta"
                      id="krug-crno-narandzasta"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(KrugBlue)}
                  className={`${
                    activeThumb === KrugBlue
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="krug-plavo-svetlo-plava">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KrugBlue}
                        loading="lazy"
                        decoding="async"
                        alt="KrugBlue"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="krug-plavo-svetlo-plava"
                      id="krug-plavo-svetlo-plava"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
                <div
                  onClick={() => setActiveThumb(KrugZl)}
                  className={`${
                    activeThumb === KrugZl
                      ? "bg-[#fff6a2] border-[#3BC77E]"
                      : ""
                  } cursor-pointer flex mt-7 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
                >
                  <label htmlFor="srce-zeleno-svetlo-zelena">
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={KrugZl}
                        loading="lazy"
                        decoding="async"
                        alt="KrugZl"
                      />
                    </figure>

                    <input
                      type="radio"
                      value="srce-zeleno-svetlo-zelena"
                      id="srce-zeleno-svetlo-zelena"
                      className="maleSliciceInput"
                      {...register("tag", {
                        required: {
                          value: true,
                          message: "Izaberite boju priveska.",
                        },
                      })}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-[300px] xl:w-[400px] h-auto mt-12">
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                decoding="async"
                alt="HvalaSlika"
                src={HvalaSlika}
              />
            </div> */}

          <Link to="/proizvodi">
            <div className="flex justify-around pt-32 w-full mb-32">
              <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg duration-500">
                <h2 className="text-lg md:text-3xl">Naruči kao poklon</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Poklon;
