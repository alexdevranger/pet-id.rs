import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import HvalaSlika from "../assets/love_optimized.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Vektor from "../assets/Vector.png";
import Avatar from "../assets/pets_optimized.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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
import pethero from "../assets/pet-hero_optimized.webp";
import fleka from "../assets/fleka_optimized.webp";
import phone from "../assets/phone_optimized.webp";
import par from "../assets/par_optimized.webp";
import s5 from "../assets/s5.webp";

function Poklon() {
  const form = useForm({
    defaultValues: {
      poklon: "",
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
  const [step, setStep] = useState(1);

  const [activeThumb, setActiveThumb] = useState(KoskicaZl);
  const narudzba = useRef(Math.floor(1000000 + Math.random() * 9000000));
  const [order, setOrder] = useState(false);
  const [disabledState, setDisabledState] = React.useState(false);
  const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 10000));
  const [valueCaptcha, setValueCaptcha] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const mountedStyle = {
    animation: "inAnimation 300ms ease-in-out",
  };
  const uplatnicaSlanje = useRef(null);
  const ErrorEmptyFields = () =>
    toast.error("Sva polja su obavezna sem napomene.");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    setValue("brojPorudzbine", narudzba.current);
    console.log(narudzba.current);
  }, []);
  const onSubmit = (data) => {
    console.log(data);
    let formData = new FormData();
    formData.append("document", JSON.stringify(data));
    axios({
      method: "post",
      url: "https://getform.io/f/9ed2cf9e-330e-4f44-bfed-2afb3c202a66",
      data: formData,
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => console.log(response))
      .then((response) => setStep(2))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const checkActiveThumb = () => {
      setValue("tag", "koskica-crno-zelena");
    };
    checkActiveThumb();
  }, []);
  const poklon = form.watch("poklon");
  const tag = form.watch("tag");
  const imePrimaoca = form.watch("imePrimaoca");
  const brojPrimaoca = form.watch("brojPrimaoca");
  const zip = form.watch("zip");
  const adresaPrimaoca = form.watch("adresaPrimaoca");
  const grad = form.watch("grad");
  const drzava = form.watch("drzava");
  useEffect(() => {
    const ifDostavaErrors = () => {
      if (
        poklon === "" ||
        tag === "" ||
        imePrimaoca === "" ||
        brojPrimaoca === "" ||
        zip === "" ||
        adresaPrimaoca === "" ||
        grad === "" ||
        drzava === "" ||
        isValid === false
      ) {
        setOrder(false);
      } else {
        setOrder(true);
      }
    };
    ifDostavaErrors();
  }, [
    poklon,
    tag,
    imePrimaoca,
    brojPrimaoca,
    zip,
    adresaPrimaoca,
    grad,
    drzava,
    isValid,
  ]);
  const handleChange = (event) => {
    setValueCaptcha(event.target.value);
    setIsValid(parseInt(event.target.value) === captcha);
  };
  const reloadCaptcha = () => {
    setCaptcha(Math.floor(Math.random() * 10000));
    setIsValid(false);
    setValueCaptcha("");
  };
  useEffect(() => {
    if (poklon) {
      uplatnicaSlanje.current = poklon;
    }
  }, [poklon]);
  return (
    <div>
      <div
        className="bg-white relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no repeat",
          backgroundSize: "100%",
        }}
      >
        {step === 1 && (
          <>
            <div className="absolute right-0 top-[250px] md:top-[160px] w-[100px] min-[410px]:w-[120px] min-[450px]:w-[170px] min-[450px]:top-[230px] sm:w-[200px] md:w-[130px] lg:w-[190px] lg:top-[190px] min-[896px]:w-[180px] min-[896px]:top-[150px] xl:w-[220px] xl:top-[150px] 2xl:w-[250px]">
              <LazyLoadImage
                effect="blur"
                src={pethero}
                alt="pethero"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="top-[260px] md:top-[190px] w-[100px] min-[410px]:w-[140px] min-[450px]:w-[190px] min-[450px]:top-[230px] sm:w-[200px] md:w-[120px] absolute lg:w-[200px] lg:top-[210px] min-[896px]:w-[210px] xl:w-[550px] xl:top-[150px]">
              <LazyLoadImage
                effect="blur"
                src={fleka}
                alt="fleka"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="hidden md:block absolute w-[100px] sm:w-[200px] min-[450px]:w-[120px] min-[450px]:top-[540px] sm:top-[540px] top-[384px] md:top-[840px] md:w-[250px] 2xl:w-[450px]">
              <LazyLoadImage
                effect="blur"
                src={phone}
                alt="phone"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute w-[100px] sm:w-[200px] sm:top-[540px] min-[410px]:w-[120px] min-[450px]:w-[130px] min-[450px]:top-[540px] hidden md:block top-[384px] right-0 md:top-[840px] md:w-[250px] 2xl:w-[450px]">
              <LazyLoadImage
                effect="blur"
                src={par}
                alt="par"
                loading="lazy"
                decoding="async"
              />
            </div>
          </>
        )}
        <form action="">
          {step === 1 && (
            <div className="text-center mt-12">
              <h1 className="text-5xl sm:text-6xl font-bold text-[#3BC77E] pb-[25px]">
                Kupi kao POKLON
              </h1>
              <p className="text-[18px] sm:text-xl mt-7 w-[75%] min-[730px]:w-[50%] m-auto">
                Obradujte dragu osobu Pet ID tag-om za njenog čupavog
                prijatelja!!!
              </p>
              <p>
                {/* Naknadno ćete popuniti podatke o ljubimcu i vlasniku po uputstvu
                na poledjini pakovanja. */}
                ( Prodaja preko sajta počinje 15. maja 2023.god. )
              </p>
              <div className="flex justify-center max-[633px]:mt-[200px] sm:mt-[200px] md:mt-0 flex-col xl:flex-row pt-[50px] items-center">
                <div className="px-3 sm:px-6 lg:ml-0 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%] bs py-6 bg-[#fff] rounded-md">
                  <div className="flex flex-col items-center flex-col justify-center my-4">
                    <label
                      htmlFor="poklon"
                      className="text-[#FF553E] font-semibold text-md p-10 border border-2 border-[#FF553E] rounded-md py-3"
                    >
                      Obavezno odaberite način slanja
                    </label>
                    <div className="flex flex-col items-start">
                      <label className="rad pl-3 py-3">
                        <input
                          className="ml-0 md:ml-3"
                          type="radio"
                          value="uplatnica"
                          {...register("poklon", {
                            required: {
                              value: true,
                              message: "Ovo polje je obavezno.",
                            },
                          })}
                        />{" "}
                        <i className="mr-3"></i>Želim da platim preko uplatnice
                        i pošaljem poklon direktno prijatelju
                      </label>
                      <label className="rad pl-3 py-3">
                        <input
                          className="ml-3 md:ml-3"
                          type="radio"
                          value="pouzecem"
                          {...register("poklon", {
                            required: {
                              value: true,
                              message: "Ovo polje je obavezno.",
                            },
                          })}
                        />{" "}
                        <i className="mr-3"></i>Želim da mi pošaljete pouzećem,
                        pa ću lično predati poklon
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%]"
                style={{ margin: "auto", marginTop: "35px" }}
              >
                <label className="text-[#FF553E] font-semibold text-md py-3 my-4">
                  {" "}
                  Odaberite oblik i boju priveska
                </label>
                {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
              </div>
              <div
                className="px-3 sm:px-6 lg:ml-0 lg:mt-12 sm:w-[80%] md:w-[50%] xl:w-[40%] 2xl:w-[34%]"
                style={{ margin: "auto" }}
              >
                <div className="flex items-center justify-center">
                  <div className="flex w-[300px] md:w-[330px] lg:w-[330px] xl:w-[500px] justify-around">
                    <div
                      onClick={() => setActiveThumb(KoskicaZl)}
                      className={`${
                        activeThumb === KoskicaZl
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } w-1/4 cursor-pointer flex mt-6 border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/4 cursor-pointer ml-4 flex mt-6 border-2 rounded-md hover:bg-gray-200 hover:border-red-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/4 cursor-pointer ml-4 flex mt-6 border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/4 cursor-pointer ml-4 flex mt-6 border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
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
                  <div className="flex w-[300px] md:w-[330px] lg:w-[330px] xl:w-[500px] justify-around">
                    <div
                      onClick={() => setActiveThumb(SrceRo)}
                      className={`${
                        activeThumb === SrceRo
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-[#3b63c7] transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
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
                        activeThumb === Srce
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-orange-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
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
                  <div className="flex w-[300px] md:w-[330px] lg:w-[330px] xl:w-[500px] justify-around">
                    <div
                      onClick={() => setActiveThumb(KrugPl)}
                      className={`${
                        activeThumb === KrugPl
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-[#3b63c7] transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-orange-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
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
                      } w-1/5 cursor-pointer flex mt-7 border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
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

              <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-evenly mt-12 min-[450px]:pt-12 md:mt-0 md:pt-64 px-4">
                <div
                  className="bs w-[95%] sm:w-[600px] lg:w-[650px] xl:w-[750px] mt-14 pb-20 flex flex-col relative"
                  style={{
                    backgroundImage: `url(${bg})`,
                    repeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="md:flex md:justify-center w-full absolute top-[-248px] lg:top-[-269px] xl:top-[-309px] hidden lg:block">
                    <LazyLoadImage
                      effect="blur"
                      src={s5}
                      loading="lazy"
                      className="w-full"
                      decoding="async"
                      alt="s5"
                    />
                  </div>

                  <div className="w-full mt-2 flex justify-around">
                    <div className="items-center flex flex-col w-[240px] min-[450px]:w-[350px] sm:w-[350px] md:w-[500px] lg:w-[300px] xl:w-[350px]">
                      <h1 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl font-bold text-left mt-10 border border-zinc-300 rounded-md p-7 bg-[#fff]">
                        Podaci za dostavu
                      </h1>
                    </div>
                  </div>

                  {/* Ime i prezime primaoca */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-4 mt-14">
                    <label
                      htmlFor="imePrimaoca"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      Ime i prezime primaoca
                    </label>
                    <input
                      type="text"
                      id="imePrimaoca"
                      {...register("imePrimaoca", {
                        required: {
                          value: true,
                          message: "Ovo polje je obavezno.",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ ]{2,30}$/,
                          message:
                            "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera",
                        },
                      })}
                      placeholder=" Aleksandra Nikolic"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.imePrimaoca && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.imePrimaoca.message}
                      </small>
                    )}
                  </div>

                  {/* Broj telefona */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-1 pt-8">
                    <label
                      htmlFor="brojPrimaoca"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      Broj telefona
                    </label>
                    <input
                      type="text"
                      id="brojPrimaoca"
                      {...register("brojPrimaoca", {
                        pattern: {
                          value: /^[0-9/\-+\s]+$/,
                          message:
                            "Može sadržati samo brojeve, razmak, kosu crtu, plus i srednju crtu.",
                        },
                      })}
                      placeholder="060/123-4567"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.brojPrimaoca && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.brojPrimaoca.message}
                      </small>
                    )}
                  </div>

                  {/* Adresa */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-1 pt-8">
                    <label
                      htmlFor="adresaPrimaoca"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      Adresa
                    </label>
                    <input
                      type="text"
                      id="adresaPrimaoca"
                      {...register("adresaPrimaoca", {
                        required: {
                          value: true,
                          message: "Ovo polje je obavezno.",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ ]{2,30}$/,
                          message:
                            "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera.",
                        },
                      })}
                      placeholder="Dunavska bb"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.adresaPrimaoca && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.adresaPrimaoca.message}
                      </small>
                    )}
                  </div>

                  {/* Zip */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-1 pt-8">
                    <label
                      htmlFor="zip"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      ZIP
                    </label>
                    <input
                      type="text"
                      id="zip"
                      {...register("zip", {
                        required: {
                          value: true,
                          message: "Ovo polje je obavezno.",
                        },
                        pattern: {
                          value: /^\d{5}$/,
                          message: "Može sadržati samo 5 brojeva.",
                        },
                      })}
                      placeholder="11120"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.zip && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.zip.message}
                      </small>
                    )}
                  </div>
                  {/* Grad */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-1 pt-8">
                    <label
                      htmlFor="grad"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      Grad
                    </label>
                    <input
                      type="text"
                      id="grad"
                      {...register("grad", {
                        required: {
                          value: true,
                          message: "Ovo polje je obavezno.",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ ]{2,30}$/,
                          message:
                            "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera.",
                        },
                      })}
                      placeholder="Beograd"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.grad && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.grad.message}
                      </small>
                    )}
                  </div>
                  {/* Drzava */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-1 pt-8">
                    <label
                      htmlFor="drzava"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      Država ( samo Srbija, za ostale zemlje pošaljite email )
                    </label>
                    <input
                      type="text"
                      id="drzava"
                      {...register("drzava", {
                        required: {
                          value: true,
                          message: "Ovo polje je obavezno.",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ ]{2,30}$/,
                          message:
                            "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera.",
                        },
                      })}
                      placeholder="Srbija"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.drzava && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.drzava.message}
                      </small>
                    )}
                  </div>
                  {/* Napomena za dostavu */}
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-1 pt-8">
                    <label
                      htmlFor="posebnaNapomena"
                      className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                    >
                      Napomena za dostavu
                    </label>
                    <input
                      type="text"
                      id="posebnaNapomena"
                      {...register("posebnaNapomena", {
                        pattern: {
                          value:
                            /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ\s\.,:;!?/-]+$/,
                          message:
                            "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera.",
                        },
                      })}
                      placeholder="Prići sa donje strane zgrade"
                      className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                    />
                    {errors.posebnaNapomena && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.posebnaNapomena.message}
                      </small>
                    )}
                  </div>
                </div>
              </div>
              {showMessage && (
                <div
                  className="p-2 w-full flex justify-center transitionDiv mt-[20px]"
                  id="captchaHolder"
                  style={showMessage ? mountedStyle : ""}
                >
                  <div className="rnc">
                    <div className="rnc-row">
                      <div
                        width="200"
                        height="50"
                        className="rnc-canvas blur-[2px]"
                        data-testid="captcha-canvas"
                      >
                        {captcha}
                      </div>
                      <div className="rnc-column">
                        <button
                          type="button"
                          onClick={reloadCaptcha}
                          className="rnc-button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <g data-name="Layer 2">
                              <g data-name="refresh">
                                <rect width="24" height="24" opacity="0"></rect>
                                <path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"></path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <input
                      type="number"
                      placeholder="Insert captcha"
                      className="rnc-input"
                      value={valueCaptcha}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-9 md:mt-20 w-full mb-6">
                {/* <div className="pb-12">
                  <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg duration-500 hover:bg-[#FF553E]">
                    <button type="button" onClick={() => setStep(1)}>
                      <h2 className="text-3xl">Prethodna</h2>
                    </button>
                  </div>
                </div> */}
                <div className="pb-12">
                  <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg duration-500 hover:bg-[#FF553E] md:ml-[20px]">
                    <button
                      type="button"
                      className={`
                      ${order === false ? "opacity-50 sm:mt-0" : ""} text-3xl`}
                      onClick={(e) => {
                        e.preventDefault();

                        if (
                          tag === "" ||
                          imePrimaoca === "" ||
                          brojPrimaoca === "" ||
                          zip === "" ||
                          adresaPrimaoca === "" ||
                          grad === "" ||
                          drzava === ""
                        ) {
                          ErrorEmptyFields();
                        } else if (isValid === false) {
                          setShowMessage(true);
                        } else {
                          //setStep(3);
                          // window.scrollTo({
                          //   top: 0,
                          //   behavior: "smooth",
                          // });
                          //setActive(false);
                          handleSubmit(onSubmit)();
                        }
                      }}
                    >
                      <h2 className="text-3xl">Naruči</h2>
                    </button>
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

              {/* <Link to="/proizvodi">
            <div className="flex justify-around pt-32 w-full mb-32">
              <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg duration-500">
                <h2 className="text-lg md:text-3xl">Naruči kao poklon</h2>
              </div>
            </div>
          </Link> */}
              {/* <div className="flex items-center">
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
                
              </div> */}
            </div>
          )}
        </form>
        {step === 2 && uplatnicaSlanje.current === "uplatnica" && (
          <div className="bg-white">
            <div className="text-center mt-12 sm:mt-28">
              <h1 className="text-4xl font-bold text-[#3BC77E]">
                Hvala Vam na poverenju!
              </h1>
              <h2 className="text-xl sm:text-3xl mt-2">
                Vaša porudžbina je prihvaćena
              </h2>
              <p className="text-sm sm:text-xl mt-7">
                Broj vaše porudžbine je <b>{narudzba.current}</b> <br></br> Pet
                ID će vam biti poslat nakon uplate.{" "}
              </p>
              <div className="text-center mt-12 md:my-10">
                <div id="uplatnica" className="clearfix">
                  <div id="levo">
                    <div id="uplatnicanaslov">uplatilac</div>
                    <div id="uplatilac">
                      <span style={{ fontSize: "16px", marginLeft: "10px" }}>
                        Vaše ime i adresa
                      </span>
                    </div>
                    <div id="svrhauplatenaslov">svrha uplate</div>
                    <div id="svrhauplate">
                      <span style={{ marginLeft: "10px", fontSize: "16px" }}>
                        Uplata za Pet ID br. {narudzba.current}
                      </span>
                    </div>
                    <div id="primalacnaslov">primalac</div>
                    <div
                      id="primalac"
                      style={{
                        paddingLeft: "10px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        ID PROTECT PR KNJAŽEVAC
                        <br />
                        Branka Radičevića 14
                      </span>
                    </div>
                  </div>
                  <div id="desno">
                    <div id="naslov">nalog za uplatu</div>

                    <div id="desnakolona">
                      <div id="kolonaiznos">
                        <div id="kolonaiznosnaslov">
                          <div id="sifraplacanjanaslov">šifra plaćanja</div>
                          <div id="valutanaslov">valuta</div>
                          <div id="iznosnaslov">iznos</div>
                        </div>
                        <div id="kolonaiznosunos">
                          <div
                            id="sifraplacanjaunos"
                            style={{ paddingLeft: "4px" }}
                          >
                            289
                          </div>
                          <div id="valutaunos">RSD </div>
                          <div id="iznosunos" style={{ paddingLeft: "10px" }}>
                            1.600,00{" "}
                          </div>
                        </div>
                      </div>
                      <div id="racunprimaoca">
                        <div id="racunprimaocanaslov">račun primaoca</div>
                        <div
                          id="racunprimaocaunos"
                          style={{ paddingLeft: "10px" }}
                        >
                          265-1100310081703-59{" "}
                        </div>
                      </div>
                      <div id="modelipozivnabr">
                        <div id="modelipozivbrnaslov">
                          model i poziv na broj
                        </div>
                        <div id="modelipozivunos">
                          <div id="modelunos"> </div>
                          <div id="pozivbrunos" style={{ paddingLeft: "10px" }}>
                            {narudzba.current}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="footer">
                    <div id="pecatpotpis">pečat i potpis uplatioca</div>
                    <div id="mestounos"></div>
                    <div id="mestodatum">mesto i datum prijema</div>
                    <div id="datumvalute">datum valute</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-12 sm:mt-0">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="HvalaSlika"
                  src={HvalaSlika}
                />
              </div>
              <Link to="/galerija">
                <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-9 md:mt-20 w-full mb-20">
                  <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg duration-500 hover:bg-[#FF553E] md:ml-[20px]">
                    <h2 className="text-3xl">Pošaljite sliku</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        {step === 2 && uplatnicaSlanje.current === "pouzecem" && (
          <div className="bg-white">
            <div className="text-center mt-12 sm:mt-28">
              <h1 className="text-4xl font-bold text-[#3BC77E]">
                Hvala Vam na poverenju!
              </h1>
              <p>{uplatnicaSlanje.current}</p>
              <h2 className="text-xl sm:text-3xl mt-2">
                Vaša porudžbina je prihvaćena
              </h2>
              <p className="text-sm sm:text-xl mt-7">
                Broj vaše porudžbine je <b>{narudzba.current}</b> <br></br> Pet
                ID će vam biti poslat u roku od 48 sati. Plaćanje pouzećem.{" "}
              </p>
              <div className="flex justify-center mt-12 sm:mt-0">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="HvalaSlika"
                  src={HvalaSlika}
                />
              </div>
              <Link to="/galerija">
                <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-9 md:mt-20 w-full mb-20">
                  <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg duration-500 hover:bg-[#FF553E] md:ml-[20px]">
                    <h2 className="text-3xl">Pošaljite sliku</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Poklon;
