import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
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
import bg from "../assets/bg.webp";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.webp";
import s7 from "../assets/s7.webp";
import cutedog from "../assets/cutedog.jpg";
import cutecat from "../assets/cutecat.jpg";
import pethero from "../assets/pet-hero_optimized.webp";
import fleka from "../assets/fleka_optimized.webp";
import phone from "../assets/phone_optimized.webp";
import par from "../assets/par_optimized.webp";
import koktel from "../assets/koktel_optimized.webp";
import HvalaSlika from "../assets/hvala_optimized.webp";
import kitty from "../assets/kitty1_optimized.webp";
import toast, { Toaster } from "react-hot-toast";

const Korak2 = () => {
  const params = useParams();
  const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 10000));
  const [valueCaptcha, setValueCaptcha] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const mountedStyle = {
    animation: "inAnimation 300ms ease-in-out",
  };
  const form = useForm({
    defaultValues: {
      brojPorudzbine: "",
      tag: "",
      pas_macka: "",
      imeLjubimca: "",
      rasa: "",
      pol: "",
      starost: "",
      napomena: "",
      imeVlasnika: "",
      brTelefonaVlasnika: "",
      brDrugiVlasnika: "",
      emailVlasnika: "",
      adresaVlasnika: "",
      secretWord: "",
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

  const [petImage, setPetImage] = useState("");
  const [petImgFile, setPetImgFile] = useState("");

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    setPetImgFile(file);
    let reader = new FileReader();
    reader.onload = (e) => setPetImage(e.target.result);
    reader.readAsDataURL(file);
  };

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
  const [activeThumbKoskica, setActiveThumbKoskica] = useState(KoskicaZl);
  const [activeThumbSrce, setActiveThumbSrce] = useState(SrceRo);
  const [activeThumbKrug, setActiveThumbKrug] = useState(KrugPl);
  const [order, setOrder] = useState(false);
  const [disabledState, setDisabledState] = React.useState(false);
  const narudzba = useRef(Math.floor(1000000 + Math.random() * 9000000));
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
  }, []);
  const ErrorContact = () =>
    toast.error("Stavite bar jedan način kako da vas kontaktira pronalazač.");
  const onSubmit = (data) => {
    const brTelefonaVlasnikaEmpty = form.watch("brTelefonaVlasnika");
    const brDrugiVlasnikaEmpty = form.watch("brDrugiVlasnika");
    const emailVlasnikaEmpty = form.watch("emailVlasnika");
    if (
      brTelefonaVlasnikaEmpty === "" &&
      brDrugiVlasnikaEmpty === "" &&
      emailVlasnikaEmpty === ""
    ) {
      ErrorContact();
    } else {
      console.log(data);
      let formData = new FormData();
      formData.append("petImg", petImgFile);
      formData.append("document", JSON.stringify(data));
      axios({
        method: "post",
        // url: "https://getform.io/f/9ed2cf9e-330e-4f44-bfed-2afb3c202a66",
        url: "https://formsubmit.co/ajax/05d192373837811cb46c4f0d3b4b936d",
        data: formData,
        header: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => console.log(response))
        .then((response) => setStep(3))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);

    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  useEffect(() => {
    const checkActiveThumb = () => {
      if (params.id === "srce" && activeThumbSrce === SrceRo) {
        setValue("tag", "srce-roze");
      } else if (params.id === "koskica" && activeThumbKoskica === KoskicaZl) {
        setValue("tag", "koskica-crno-zelena");
      } else if (params.id === "krug" && activeThumbKrug === KrugPl) {
        setValue("tag", "krug-svetlo-plava-bela");
      }
    };
    checkActiveThumb();
  }, []);

  let brTelefonaVlasnikaEmpty1 = form.watch("brTelefonaVlasnika");
  let brDrugiVlasnikaEmpty1 = form.watch("brDrugiVlasnika");
  let emailVlasnikaEmpty1 = form.watch("emailVlasnika");
  let tagEmpty = form.watch("tag");
  let imeLjubimcaEmpty = form.watch("imeLjubimca");
  let pas_mackaEmpty = form.watch("pas_macka");
  let rasaEmpty = form.watch("rasa");
  let polEmpty = form.watch("pol");
  let imeVlasnikaEmpty = form.watch("imeVlasnika");
  let secretWordEmpty = form.watch("secretWord");
  useEffect(() => {
    const ifErrors = () => {
      if (
        brTelefonaVlasnikaEmpty1 === "" &&
        brDrugiVlasnikaEmpty1 === "" &&
        emailVlasnikaEmpty1 === ""
      ) {
        setDisabledState(false);
      } else if (
        tagEmpty === "" ||
        imeLjubimcaEmpty === "" ||
        pas_mackaEmpty === "" ||
        rasaEmpty === "" ||
        polEmpty === "" ||
        imeVlasnikaEmpty === "" ||
        secretWordEmpty === ""
      ) {
        setDisabledState(false);
        console.log("2", disabledState);
      } else {
        setDisabledState(true);
        console.log("3", disabledState);
      }
    };
    ifErrors();
  }, [
    brTelefonaVlasnikaEmpty1,
    brDrugiVlasnikaEmpty1,
    emailVlasnikaEmpty1,
    tagEmpty,
    imeLjubimcaEmpty,
    pas_mackaEmpty,
    rasaEmpty,
    polEmpty,
    imeVlasnikaEmpty,
    secretWordEmpty,
  ]);
  const imePrimaoca = form.watch("imePrimaoca");
  const brojPrimaoca = form.watch("brojPrimaoca");
  const zip = form.watch("zip");
  const adresaPrimaoca = form.watch("adresaPrimaoca");
  const grad = form.watch("grad");
  const drzava = form.watch("drzava");
  useEffect(() => {
    const ifDostavaErrors = () => {
      if (
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
  }, [imePrimaoca, brojPrimaoca, zip, adresaPrimaoca, grad, drzava, isValid]);
  const handleChange = (event) => {
    setValueCaptcha(event.target.value);
    setIsValid(parseInt(event.target.value) === captcha);
  };
  const reloadCaptcha = () => {
    setCaptcha(Math.floor(Math.random() * 10000));
    setIsValid(false);
    setValueCaptcha("");
  };
  return (
    <div>
      <form>
        {/* SRCE */}
        {step === 1 && params.id === "srce" && (
          <>
            <div className="w-full flex items-center justify-center mb-32 min-[410px]:mb-36 min-[496px]:mb-48 min-[600px]:mb-48 sm:mb-52 md:mb-36 lg:mb-56 mt-8 sm:mt-12 md:mt-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mt-7 px-4">
                KORAK 2 <br /> Izaberite boju priveska i unesite podatke{" "}
              </h1>
            </div>
            <div className="flex w-full lg:w-[90%] flex-col md:flex-row">
              <div className="w-full mt-2 flex justify-around md:px-2 lg:px-0">
                <div className="items-center flex flex-col">
                  <div
                    id="srce"
                    className="mt-7 w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[350px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 bs relative"
                  >
                    <div className="flex justify-left absolute w-[200px] -top-[72px] -left-[20px] z-10">
                      <div className="kitty">
                        <LazyLoadImage
                          effect="blur"
                          src={kitty}
                          alt="kitty"
                          className="rounded-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={activeThumbSrce}
                        loading="lazy"
                        decoding="async"
                        alt="activeThumbSrce"
                      />
                    </figure>
                    <div className="absolute pt-[40px] left-1/2 -translate-x-2/4 -translate-y-2/4">
                      {errors.tag && (
                        <small className="text-red-400 pl-[3px]">
                          {errors.tag.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="flex w-[300px] md:w-[330px] lg:w-[400px]">
                    <div
                      onClick={() => setActiveThumbSrce(SrceRo)}
                      className={`${
                        activeThumbSrce === SrceRo
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3b63c7] transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbSrce(SrcePl)}
                      className={`${
                        activeThumbSrce === SrcePl
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbSrce(Srce)}
                      className={`${
                        activeThumbSrce === Srce
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-orange-300 transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbSrce(SrceBlue)}
                      className={`${
                        activeThumbSrce === SrceBlue
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbSrce(SrceZl)}
                      className={`${
                        activeThumbSrce === SrceZl
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
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
              <div className="mt-14 flex flex-col w-full">
                <h3 className="text-3xl font-bold text-center md:text-left pb-7 px-3">
                  Pet ID tag srce
                </h3>
                <h4 className="text-md xl:text-xl font-semibold text-left px-3 md:pr-18 lg:pr-3">
                  Pet ID tag napravljen je od specijalno odabranog materijala
                  koji je potpuno bezbedan za vašeg ljubimca. Ne sadrži toksične
                  boje u sastavu priveska, kao ni u štampi, pa ne ugrožava ni
                  zdravlje životinja ni okolinu. Kopča je snažna i drži tag
                  čvrsto na ogrlici. Pogodan je za sve vrste ljubimaca.{" "}
                  <br></br> <br></br>QR kod je vidiljiv na privesku već sa 5
                  metara udaljenosti, a kod se lako očitava bilo kojim mobilnim
                  telefonom.{" "}
                </h4>
                <h3 className="text-2xl font-bold text-center md:text-left pt-7 px-3">
                  Cena:
                </h3>
                <h3 className="text-2xl font-bold text-center md:text-left pt-1 lg:pt-7 pb-4 text-[#3BC77E] px-3">
                  1.600,00 RSD
                </h3>
              </div>
            </div>
          </>
        )}

        {/* KOSKICA */}
        {step === 1 && params.id === "koskica" && (
          <>
            <div className="w-full flex items-center justify-center mb-32 min-[410px]:mb-36 min-[496px]:mb-48 min-[600px]:mb-48 sm:mb-52 md:mb-36 lg:mb-56 mt-8 sm:mt-12 md:mt-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mt-7 px-4">
                Korak 2 - Izaberite boju priveska i unesite podatke
              </h1>
            </div>
            <div className="flex w-full md:w-[90%] flex-col md:flex-row">
              <div className="w-full mt-2 flex justify-around md:px-2 lg:px-0">
                <div className="items-center flex flex-col w-[350px]">
                  <div
                    id="koskica"
                    className=" mt-7 w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[350px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 bs relative"
                  >
                    <div className="flex justify-left absolute w-[200px] -top-[72px] -left-[20px] z-10">
                      <div className="kitty">
                        <LazyLoadImage
                          effect="blur"
                          src={kitty}
                          alt="kitty"
                          className="rounded-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={activeThumbKoskica}
                        loading="lazy"
                        decoding="async"
                        alt="activeThumbKoskica"
                      />
                    </figure>
                    <div className="absolute pt-[40px] left-1/2 -translate-x-2/4 -translate-y-2/4">
                      {errors.tag && (
                        <small className="text-red-400 pl-[3px]">
                          {errors.tag.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="flex w-[300px] md:w-[330px] lg:w-[330px]">
                    <div
                      onClick={() => setActiveThumbKoskica(KoskicaZl)}
                      className={`${
                        activeThumbKoskica === KoskicaZl
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
                      onClick={() => setActiveThumbKoskica(KoskicaCr)}
                      className={`${
                        activeThumbKoskica === KoskicaCr
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
                      onClick={() => setActiveThumbKoskica(koskicaPl)}
                      className={`${
                        activeThumbKoskica === koskicaPl
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
                      onClick={() => setActiveThumbKoskica(koskicaRo)}
                      className={`${
                        activeThumbKoskica === koskicaRo
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
              <div className="mt-14 flex flex-col w-full">
                <h3 className="text-3xl font-bold text-center md:text-left pb-1 px-3">
                  Pet ID tag koskica
                </h3>
                <h4 className="text-md xl:text-xl font-semibold text-left px-3 md:pr-18 lg:pr-3">
                  Pet ID tag napravljen je od specijalno odabranog materijala
                  koji je potpuno bezbedan za vašeg ljubimca. Ne sadrži toksične
                  boje u sastavu priveska, kao ni u štampi, pa ne ugrožava ni
                  zdravlje životinja ni okolinu. Kopča je snažna i drži tag
                  čvrsto na ogrlici. Pogodan je za sve vrste ljubimaca.{" "}
                  <br></br> <br></br>QR kod je vidiljiv na privesku već sa 5
                  metara udaljenosti, a kod se lako očitava bilo kojim mobilnim
                  telefonom.{" "}
                </h4>
                <h3 className="text-2xl font-bold text-center md:text-left pt-7 px-3">
                  Cena:
                </h3>
                <h3 className="text-2xl font-bold text-center md:text-left pt-1 lg:pt-7 pb-4 text-[#3BC77E] px-3">
                  1.600,00 RSD
                </h3>
              </div>
            </div>
          </>
        )}

        {/*KRUG  */}
        {step === 1 && params.id === "krug" && (
          <>
            <div className="w-full flex items-center justify-center mb-32 min-[410px]:mb-36 min-[496px]:mb-48 min-[600px]:mb-48 sm:mb-52 md:mb-36 lg:mb-56 mt-8 sm:mt-12 md:mt-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mt-7 px-4">
                Korak 2 - Izaberite boju priveska i unesite podatke
              </h1>
            </div>
            <div className="flex w-full lg:w-[90%] flex-col md:flex-row">
              <div className="w-full mt-2 flex justify-around md:px-2 lg:px-0">
                <div className="items-center flex flex-col">
                  <div
                    id="krug"
                    className="mt-7 w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[350px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 bs relative"
                  >
                    <div className="flex justify-left  absolute w-[200px] -top-[72px] -left-[20px] z-10">
                      <div className="kitty">
                        <LazyLoadImage
                          effect="blur"
                          src={kitty}
                          alt="kitty"
                          className="rounded-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <figure>
                      <LazyLoadImage
                        effect="blur"
                        src={activeThumbKrug}
                        loading="lazy"
                        decoding="async"
                        alt="activeThumbKrug"
                      />
                    </figure>
                    <div className="absolute pt-[40px] left-1/2 -translate-x-2/4 -translate-y-2/4">
                      {errors.tag && (
                        <small className="text-red-400 pl-[3px]">
                          {errors.tag.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="flex w-[300px] md:w-[330px] lg:w-[400px]">
                    <div
                      onClick={() => setActiveThumbKrug(KrugPl)}
                      className={`${
                        activeThumbKrug === KrugPl
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3b63c7] transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbKrug(KrugRo)}
                      className={`${
                        activeThumbKrug === KrugRo
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbKrug(KrugOr)}
                      className={`${
                        activeThumbKrug === KrugOr
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-orange-300 transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbKrug(KrugBlue)}
                      className={`${
                        activeThumbKrug === KrugBlue
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all ease-in-out duration-500 items-center`}
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
                      onClick={() => setActiveThumbKrug(KrugZl)}
                      className={`${
                        activeThumbKrug === KrugZl
                          ? "bg-[#fff6a2] border-[#3BC77E]"
                          : ""
                      } cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all ease-in-out duration-500 items-center`}
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
              <div className="mt-14 flex flex-col w-full">
                <h3 className="text-3xl font-bold text-center md:text-left pb-1 px-3">
                  Pet ID tag krug
                </h3>
                <h4 className="text-md xl:text-xl font-semibold text-left px-3 md:pr-18 lg:pr-3">
                  Pet ID tag napravljen je od specijalno odabranog materijala
                  koji je potpuno bezbedan za vašeg ljubimca. Ne sadrži toksične
                  boje u sastavu priveska, kao ni u štampi, pa ne ugrožava ni
                  zdravlje životinja ni okolinu. Kopča je snažna i drži tag
                  čvrsto na ogrlici. Pogodan je za sve vrste ljubimaca.{" "}
                  <br></br> <br></br>QR kod je vidiljiv na privesku već sa 5
                  metara udaljenosti, a kod se lako očitava bilo kojim mobilnim
                  telefonom.{" "}
                </h4>
                <h3 className="text-2xl font-bold text-center md:text-left pt-7 px-3">
                  Cena:
                </h3>
                <h3 className="text-2xl font-bold text-center md:text-left pt-1 lg:pt-7 pb-1 text-[#3BC77E] px-3 md:pb-5 lg:pb-0">
                  1.600,00 RSD
                </h3>
              </div>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-evenly mt-12 pt-24 min-[450px]:pt-16 sm:pt-52 md:mt-0 md:pt-64 px-4 lg:items-stretch">
              <div
                className="bs w-[95%] min-[450px]:w-[420px] min-[550px]:w-[520px] sm:w-[600px] lg:w-[350px] xl:w-[550px] mt-14 pb-20 flex flex-col relative"
                style={{
                  backgroundImage: `url(${bg})`,
                  repeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {/* PODACI O LJUBIMCU */}
                <div className="w-full mt-2 flex justify-around">
                  <div className="items-center flex flex-col w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[300px] xl:w-[350px] relative">
                    <div className="md:flex md:justify-center w-full md:w-full absolute top-[-107px]  min-[450px]:top-[-157px] min-[550px]:top-[-153px] sm:top-[-153px] md:top-[-153px] lg:top-[-130px] xl:top-[-153px]">
                      <LazyLoadImage
                        effect="blur"
                        src={s7}
                        className="w-full"
                        loading="lazy"
                        decoding="async"
                        alt="s7"
                      />
                    </div>
                    <h1 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl font-bold text-left mt-10 border border-zinc-300 rounded-md p-7 bg-[#fff]">
                      Podaci o ljubimcu
                    </h1>
                  </div>
                </div>

                {/* upload */}
                <div className="flex sm:flex-row items-center flex-col-reverse sm:items-center sm:justify-center mt-10">
                  <div>
                    <label
                      htmlFor="fileInput"
                      type="button"
                      className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium mt-6 sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                          stroke="none"
                        ></rect>
                        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                      Dodaj fotografiju
                    </label>
                    <div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
                      Slika ljubimca ( max 100 KB )
                    </div>
                    <input
                      name="petImage"
                      id="fileInput"
                      accept="image/*"
                      className="hidden"
                      type="file"
                      {...register("petImg")}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="mb-6 relative bg-gray-100 shadow-inset ml-3 rounded-lg">
                    <div className="w-28 h-28">
                      <LazyLoadImage
                        effect="blur"
                        id="image"
                        className="object-cover h-28 rounded-lg"
                        src={petImage}
                      />
                    </div>
                  </div>
                </div>

                {/* ime ljubimca */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 mt-7">
                  <label
                    htmlFor="imeLjubimca"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Ime ljubimca
                  </label>
                  <input
                    id="imeLjubimca"
                    type="text"
                    {...register("imeLjubimca", {
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
                    placeholder="Stela ( 2-30 karaktera)"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.imeLjubimca && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.imeLjubimca.message}
                    </small>
                  )}
                </div>

                {/* pas ili macka */}
                <div className="flex flex-col sm:flex-row items-center mt-7 justify-center mb-7 sm:items-baseline">
                  <label htmlFor="pasIliMacka">PAS ILI MAČKA</label>
                  <div className="flex justify-around items-center mt-6 sm:mt-0">
                    <label
                      htmlFor="cutepas"
                      id="labelcutedog"
                      className="rad pl-3"
                    >
                      <input
                        className="ml-0 md:ml-3"
                        type="radio"
                        value="pas"
                        id="cutepas"
                        {...register("pas_macka", {
                          required: {
                            value: true,
                            message: "Ovo polje je obavezno.",
                          },
                        })}
                      />{" "}
                      <i></i>
                      <figure style={{ overflow: "visible" }}>
                        <LazyLoadImage
                          effect="blur"
                          src={cutedog}
                          width="40px"
                          className="cuteImg"
                          loading="lazy"
                          decoding="async"
                          alt="cutedog"
                        />
                      </figure>
                    </label>
                    <label
                      htmlFor="cutecat"
                      id="labelcutecat"
                      className="rad pl-3"
                    >
                      <input
                        className="ml-3 md:ml-3"
                        type="radio"
                        value="macka"
                        id="cutecat"
                        {...register("pas_macka", {
                          required: {
                            value: true,
                            message: "Ovo polje je obavezno.",
                          },
                        })}
                      />{" "}
                      <i></i>
                      <figure style={{ overflow: "visible" }}>
                        <LazyLoadImage
                          effect="blur"
                          src={cutecat}
                          width="40px"
                          className="cuteImg"
                          loading="lazy"
                          decoding="async"
                          alt="cutecat"
                        />
                      </figure>
                    </label>
                  </div>
                </div>
                <div className="block text-center mt-[-15px]">
                  {errors.pas_macka && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.pas_macka.message}
                    </small>
                  )}
                </div>

                {/* Rasa */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10">
                  <label
                    htmlFor="rasa"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Rasa
                  </label>
                  <input
                    id="rasa"
                    type="text"
                    {...register("rasa", {
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
                    placeholder="Pudlica"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.rasa && (
                    <small className="text-red-400">
                      {errors.rasa.message}
                    </small>
                  )}
                </div>

                {/* Starost */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10">
                  <label
                    htmlFor="starost"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Starost
                  </label>
                  <input
                    id="starost"
                    type="text"
                    {...register("starost", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ ]{2,30}$/,
                        message:
                          "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera",
                      },
                    })}
                    placeholder="1 godina ili 5 meseci"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.starost && (
                    <small className="text-red-400">
                      {errors.starost.message}
                    </small>
                  )}
                </div>

                {/* musko ili zensko */}
                <div className="flex flex-col items-center min-[450px]:flex-row lg:flex-col xl:flex-row justify-center mb-7">
                  <label htmlFor="pasIliMacka">Vaš čupavi prijatelj je</label>
                  <div className="flex items-stretch min-[450px]:flex-row min-[450px]:justify-around min-[450px]:items-center">
                    <label className="rad pl-3">
                      <input
                        className="ml-0 md:ml-3"
                        type="radio"
                        value="muski"
                        {...register("pol", {
                          required: {
                            value: true,
                            message: "Ovo polje je obavezno.",
                          },
                        })}
                      />{" "}
                      <i className="mr-3"></i>Muško
                    </label>
                    <label className="rad pl-3">
                      <input
                        className="ml-3 md:ml-3"
                        type="radio"
                        value="zenski"
                        {...register("pol", {
                          required: {
                            value: true,
                            message: "Ovo polje je obavezno.",
                          },
                        })}
                      />{" "}
                      <i className="mr-3"></i>Žensko
                    </label>
                  </div>
                </div>
                <div className="block text-center mt-[-15px] mb-[25px]">
                  {errors.pol && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.pol.message}
                    </small>
                  )}
                </div>

                {/* Napomena */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10">
                  <label
                    htmlFor="napomena"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Napomena (za pronalazača, kako najbolje da smiri ljubimca i
                    sl.)
                  </label>
                  <div className="box border rounded flex flex-col shadow bg-white">
                    <textarea
                      placeholder="Npr. Mnogo voli decu, nije agresivna, ako ima alergije na neku hranu"
                      className="peer h-20 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                      id="napomena"
                      {...register("napomena", {
                        pattern: {
                          value:
                            /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ\s\.,:;!?/-]+$/,
                          message:
                            "Može sadržati samo slova, brojeve, tačku, zarez, uzvičnik, znak pitanja i razmak",
                        },
                      })}
                      rows="4"
                      cols="50"
                      maxLength="200"
                    ></textarea>
                    {errors.napomena && (
                      <small className="text-red-400 pl-[3px]">
                        {errors.napomena.message}
                      </small>
                    )}
                  </div>
                </div>
              </div>

              {/* podaci 2 kolona */}
              <div
                className="bs w-[95%] min-[450px]:w-[420px] min-[550px]:w-[520px] sm:w-[600px] lg:w-[350px] xl:w-[550px] mt-24 pb-20 flex flex-col relative sm:mt-32 md:mt-24 lg:mt-[55px]"
                style={{
                  backgroundImage: `url(${bg})`,
                  repeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full mt-2 flex justify-around">
                  <div className="items-center flex flex-col w-[240px] min-[450px]:w-[350px] sm:w-[350px] md:w-[500px] lg:w-[300px] xl:w-[350px] relative">
                    <div className="md:flex md:justify-center w-full md:w-full absolute top-[-107px]  min-[450px]:top-[-157px] min-[550px]:top-[-153px] sm:top-[-153px] md:top-[-207px] lg:top-[-130px] xl:top-[-153px]">
                      <LazyLoadImage
                        effect="blur"
                        src={s6}
                        className="w-full"
                        loading="lazy"
                        decoding="async"
                        alt="s6"
                      />
                    </div>
                    <h1 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl font-bold text-left mt-10 border border-zinc-300 rounded-md p-7 bg-[#fff]">
                      Podaci o vlasniku
                    </h1>
                  </div>
                </div>

                {/* Ime i prezime vlasnika */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-4 mt-14">
                  <label
                    htmlFor="imeVlasnika"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Ime vlasnika ( ili nadimak )
                  </label>
                  <input
                    type="text"
                    id="imeVlasnika"
                    {...register("imeVlasnika", {
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
                    pattern="[a-zA-Z0-9]{3,30}"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.imeVlasnika && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.imeVlasnika.message}
                    </small>
                  )}
                </div>

                {/* Broj telefona */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 pt-8">
                  <label
                    htmlFor="brTelefonaVlasnika"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Br telefona vlasnika (nije obavezno)
                  </label>
                  <input
                    type="text"
                    id="brTelefonaVlasnika"
                    {...register("brTelefonaVlasnika", {
                      pattern: {
                        value: /^[0-9/\-+\s]+$/,
                        message:
                          "Može sadržati samo brojeve, razmak, kosu crtu, plus i srednju crtu",
                      },
                    })}
                    placeholder="061/1234-567"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.brTelefonaVlasnika && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.brTelefonaVlasnika.message}
                    </small>
                  )}
                </div>

                {/* Jos jedan broj */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 pt-6 lg:mb-2">
                  <label
                    htmlFor="brDrugiVlasnika"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Još jedan broj za svaki slučaj ( ako treba )
                  </label>
                  <input
                    type="text"
                    id="brDrugiVlasnika"
                    {...register("brDrugiVlasnika", {
                      pattern: {
                        value: /^[0-9/\-+\s]+$/,
                        message:
                          "Može sadržati samo brojeve, razmak, kosu crtu,  plus i srednju crtu.",
                      },
                    })}
                    placeholder="061/234-56-78"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.brDrugiVlasnika && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.brDrugiVlasnika.message}
                    </small>
                  )}
                </div>

                {/* Email */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 pt-8">
                  <label
                    htmlFor="emailVlasnika"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Email (nije obavezno)
                  </label>
                  <input
                    type="text"
                    id="emailVlasnika"
                    {...register("emailVlasnika", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Mora biti odgovarajući format za email.",
                      },
                    })}
                    placeholder="sara2365@gmail.com"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.emailVlasnika && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.emailVlasnika.message}
                    </small>
                  )}
                </div>

                {/* Adresa */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 pt-8">
                  <label
                    htmlFor="adresaVlasnika"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Adresa vlasnika (nije obavezno)
                  </label>
                  <input
                    type="text"
                    id="adresaVlasnika"
                    {...register("adresaVlasnika", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ/\-\s]{2,30}$/,
                        message:
                          "Može sadržati samo slova, brojeve, razmak, kosu crtu, srednju crtu i min. 2 slova.",
                      },
                    })}
                    placeholder="Karaburma"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.adresaVlasnika && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.adresaVlasnika.message}
                    </small>
                  )}
                </div>

                {/* Sigurnosna rec */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 pt-3">
                  <label
                    htmlFor="secretWord"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Sigurnosna reč* (objašnjenje u napomeni)
                  </label>
                  <input
                    type="text"
                    id="secretWord"
                    {...register("secretWord", {
                      required: {
                        value: true,
                        message: "Ovo polje je obavezno.",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ\/_\-\s]{2,30}$/,
                        message:
                          "Može sadržati samo slova, brojeve, razmak, kosu crtu, srednju crtu, donju crtu i min. 2 slova.",
                      },
                    })}
                    placeholder="npr. Džeki"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.secretWord && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.secretWord.message}
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-around mt-16 w-4/6 m-auto">
              <div className="flex items-center justify-center text-black duration-500">
                <h5 className="text-sm sm:text-md md:text-lg">
                  Napomena: Ovi podaci će biti dostupni korisniku koji učita
                  unikatni QR kod sa priveska koji ste kupili, tako da niko sa
                  strane ne može da pristupi vašim ličnim podacima, samo onaj ko
                  učita qr kod. Nijedan od ličnih podataka vlasnika nije
                  obavezan, tako da odaberite broj telefona ili email koji će
                  biti dostupan pronalazaču, pa njega stavite. Takođe, možete
                  staviti i 2 telefona, jedan rezervni ako vaš nije trenutno
                  dostupan. Za adresu, ako ne želite da stavite ulicu i broj,
                  možete staviti i samo opštinu ili grad. Na sledećoj stranici
                  ćete ostaviti podatke za dostavu, adresu i telefon, ti podaci
                  neće biti vidljivi i mogu se razlikovati od ovih unetih na
                  ovoj stranici.
                  <br />
                  <br />* Sigurnosna reč: Ukoliko želite da promenite bilo koji
                  podatak, mi ćemo vas pitati za ovu reč, čime dokazujete da ste
                  vlasnik. Ta reč može da bude bilo šta, npr. ime vašeg prvog
                  ljubimca, npr. "Džeki".
                </h5>
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-9 md:mt-20 w-full mb-6">
              <Link to="/proizvodi/">
                <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[280px] sm:w-[270px] h-[64px] rounded-lg duration-500">
                  <h2 className="text-3xl">Prethodna</h2>
                </div>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const brTelefonaVlasnikaEmpty =
                    form.watch("brTelefonaVlasnika");
                  const brDrugiVlasnikaEmpty = form.watch("brDrugiVlasnika");
                  const emailVlasnikaEmpty = form.watch("emailVlasnika");
                  if (
                    brTelefonaVlasnikaEmpty === "" &&
                    brDrugiVlasnikaEmpty === "" &&
                    emailVlasnikaEmpty === ""
                  ) {
                    ErrorContact();
                  } else {
                    setStep(2);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`
                 ${disabledState === false ? "opacity-50 mt-8 sm:mt-0" : ""} 
                  cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[280px] sm:w-[270px] h-[64px] rounded-lg duration-500 ml-0 md:ml-[20px] mt-8 sm:mt-0`}
              >
                <h2 className="text-3xl">Sledeći korak</h2>
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
                    background: "#fff",
                  },
                }}
              />
              <div className="absolute top-[194px] md:top-[124px] lg:top-[124px] md:w-[150px] right-0 w-[100px] lg:w-[210px]">
                <LazyLoadImage
                  effect="blur"
                  src={koktel}
                  alt="koktel"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* </Link> */}
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <div className="w-full flex items-center justify-center mb-32 min-[410px]:mb-36 min-[496px]:mb-48 min-[600px]:mb-48 sm:mb-52 md:mb-36 lg:mb-56 mt-8 sm:mt-12 md:mt-12">
                <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mt-7 px-4">
                  KORAK 3 <br /> Unesite podatke za dostavu Pet ID priveska{" "}
                </h1>
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
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-10 pt-8">
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
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-10 pt-8">
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
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-10 pt-8">
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
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-10 pt-8">
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
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-10 pt-8">
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
                  <div className="group relative w-[95%] sm:w-[400px] md:w-80 m-auto pb-10 pt-8">
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
              <div className="absolute right-0 top-[250px] md:top-[120px] w-[100px] min-[410px]:w-[120px] min-[450px]:w-[170px] min-[450px]:top-[230px] sm:w-[200px] md:w-[130px] lg:w-[190px] lg:top-[190px] min-[896px]:w-[180px] min-[896px]:top-[150px] xl:w-[220px] xl:top-[150px] 2xl:w-[250px]">
                <LazyLoadImage
                  effect="blur"
                  src={pethero}
                  alt="pethero"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="top-[260px] md:top-[140px] w-[100px] min-[410px]:w-[140px] min-[450px]:w-[190px] min-[450px]:top-[230px] sm:w-[200px] md:w-[120px] absolute lg:w-[200px] lg:top-[210px] min-[896px]:w-[210px] xl:w-[550px] xl:top-[150px]">
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

              {/* podaci 1 kolona */}
              <div className="flex justify-around mt-16 w-4/6 m-auto">
                <div className="flex items-center justify-center text-black duration-500">
                  <h5 className="text-[18px] sm:text-md md:text-lg">
                    Napomena: Ukoliko imate neko pitanje pre nego što naručite,
                    pozovite nas na <br />
                    060/60-12-199. Klikom na "Naruči" prihvatate{" "}
                    <span className="underline text-[#e9ae62]">
                      <Link to="/uslovi-koriscenja" target="_blank">
                        uslove korišćenja
                      </Link>
                    </span>{" "}
                    i{" "}
                    <span className="underline text-[#e9ae62]">
                      <Link to="/politika-privatnosti" target="_blank">
                        politiku privatnosti
                      </Link>
                    </span>
                    .
                  </h5>
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
                <div className="pb-12">
                  <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg duration-500 hover:bg-[#FF553E]">
                    <button type="button" onClick={() => setStep(1)}>
                      <h2 className="text-3xl">Prethodna</h2>
                    </button>
                  </div>
                </div>
                <div className="pb-12">
                  <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg duration-500 hover:bg-[#FF553E] md:ml-[20px]">
                    <button
                      type="button"
                      className={`
                      ${order === false ? "opacity-50 sm:mt-0" : ""} text-3xl`}
                      onClick={(e) => {
                        e.preventDefault();

                        if (
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
            </div>
          </>
        )}
      </form>
      {step === 3 && (
        <div className="bg-white">
          <div className="text-center mt-12 sm:mt-28">
            <h1 className="text-4xl font-bold text-[#3BC77E]">
              Hvala Vam na poverenju!
            </h1>
            <h2 className="text-xl sm:text-3xl mt-2">
              Vaša porudžbina je prihvaćena
            </h2>
            <p className="text-sm sm:text-xl mt-7">
              Broj vaše porudžbine je <b>{narudzba.current}</b> <br></br> Pet ID
              će vam biti poslat u roku od 48 sati.{" "}
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
            <Link to="/proizvodi">
              <div className="w-full flex justify-center">
                <div className="flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] sm:w-[321px] h-[64px] rounded-lg mt-16 mb-28">
                  <h2 className="text-md sm:text-xl">
                    Naruci kao poklon prijatelju
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Korak2;
