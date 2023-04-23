import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import bg from "../assets/bg.webp";
import s6 from "../assets/s6.webp";
import s7 from "../assets/s7.webp";
import cutedog from "../assets/cutedog.jpg";
import Kitty from "../assets/balloon_optimized.webp";
import cutecat from "../assets/cutecat.jpg";
import koktel from "../assets/koktel_optimized.webp";
import HvalaSlika from "../assets/hvala_optimized.webp";
import "react-lazy-load-image-component/src/effects/blur.css";
import toast, { Toaster } from "react-hot-toast";
import QRReader from "modern-react-qr-reader";

const MojLjubimac = () => {
  const form1 = useForm({
    defaultValues: {
      linkPetId: "",
      oblik_priveska: "",
      boja_priveska: "",
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
      secretWord1: "",
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
  const [showQRScanner, setShowQRScanner] = useState(false);
  const scannerRef = useRef(null);
  useEffect(() => {
    if (showQRScanner && scannerRef.current) {
      scannerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showQRScanner]);

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
  } = form1;
  const [korak, setKorak] = useState(1);
  const [disabledState, setDisabledState] = React.useState(false);
  const scannedLink = form1.watch("linkPetId");
  const ErrorContact = () =>
    toast.error("Stavite bar jedan način kako da vas kontaktira pronalazač.");
  const onSubmit = (data) => {
    const brTelefonaVlasnikaEmptyLjubimac = form1.watch("brTelefonaVlasnika");
    const brDrugiVlasnikaEmpty = form1.watch("brDrugiVlasnika");
    const emailVlasnikaEmpty = form1.watch("emailVlasnika");
    if (
      brTelefonaVlasnikaEmptyLjubimac === "" &&
      brDrugiVlasnikaEmpty === "" &&
      emailVlasnikaEmpty === ""
    ) {
      ErrorContact();
    } else {
      let formData1 = new FormData();
      formData1.append("petImg", petImgFile);
      formData1.append("document", JSON.stringify(data));
      axios({
        method: "post",
        url: "https://getform.io/f/6863145f-a7b2-4e6f-93f5-40dc45c8c73c",
        data: formData1,
        header: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => console.log(response))
        .then((response) => setKorak(2))
        .catch((error) => console.log(error));
    }
  };
  console.log(scannedLink);
  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);

    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  let oblik_priveskaEmpty = form1.watch("oblik_priveska");
  let boja_priveskaEmpty = form1.watch("boja_priveska");
  let brTelefonaVlasnikaEmptyLjubimac1 = form1.watch("brTelefonaVlasnika");
  let brDrugiVlasnikaEmpty1 = form1.watch("brDrugiVlasnika");
  let emailVlasnikaEmpty1 = form1.watch("emailVlasnika");
  let imeLjubimcaEmpty = form1.watch("imeLjubimca");
  let pas_mackaEmpty = form1.watch("pas_macka");
  let rasaEmpty = form1.watch("rasa");
  let polEmpty = form1.watch("pol");
  let imeVlasnikaEmpty = form1.watch("imeVlasnika");
  let secretWordEmpty1 = form1.watch("secretWord1");
  useEffect(() => {
    const ifErrors = () => {
      if (
        brTelefonaVlasnikaEmptyLjubimac1 === "" &&
        brDrugiVlasnikaEmpty1 === "" &&
        emailVlasnikaEmpty1 === ""
      ) {
        setDisabledState(false);
      } else if (
        oblik_priveskaEmpty === "" ||
        boja_priveskaEmpty === "" ||
        imeLjubimcaEmpty === "" ||
        pas_mackaEmpty === "" ||
        rasaEmpty === "" ||
        polEmpty === "" ||
        imeVlasnikaEmpty === "" ||
        secretWordEmpty1 === ""
      ) {
        setDisabledState(false);
      } else {
        setDisabledState(true);
      }
    };
    ifErrors();
  }, [
    brTelefonaVlasnikaEmptyLjubimac1,
    brDrugiVlasnikaEmpty1,
    emailVlasnikaEmpty1,
    oblik_priveskaEmpty,
    boja_priveskaEmpty,
    imeLjubimcaEmpty,
    pas_mackaEmpty,
    rasaEmpty,
    polEmpty,
    imeVlasnikaEmpty,
    secretWordEmpty1,
  ]);
  const handleScan = (data) => {
    if (data) {
      setValue("linkPetId", data);
      setShowQRScanner(false);
    }
  };
  const handleError = (err) => {
    const ErrorScanning = () =>
      toast.error(
        "Greška prilikom skeniranja qr koda, zatvorite skener i pokušajte ručno da kopirate qr kod."
      );
    ErrorScanning();
    console.error(err);
  };

  return (
    <div>
      <form>
        {korak === 1 && (
          <>
            <div className="w-full flex flex-col items-center justify-center mb-32 min-[410px]:mb-36 min-[496px]:mb-48 min-[600px]:mb-48 sm:mb-52 md:mb-36 lg:mb-36 mt-8 sm:mt-12 md:mt-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-center lg:mt-7 px-4 pb-4">
                Ovi podaci će se videti kad se učita QR kod
              </h1>
              <p className="px-6 text-center text-[18px] md:text-lg">
                Na ovoj stranici unosite podatke samo ako ste već kupili Pet ID
                tag{" "}
              </p>
            </div>

            <div className="group relative w-52 min-[450px]:w-60 sm:w-72 md:w-[400px] m-auto pb-4 sm:pb-4 mt-7 text-center">
              <label
                htmlFor="linkPetId"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400 text-center"
              >
                Skeniraj tag (privezak) i taj link unesi u ovo polje
              </label>
              <input
                id="linkPetId"
                autoFocus={true}
                //onClick={() => setShowQRScanner(true)}
                type="text"
                {...register("linkPetId", {
                  required: {
                    value: true,
                    message: "Ovo polje je obavezno.",
                  },
                  pattern: {
                    value:
                      /^https:\/\/qr\.pet-id\.digital\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+(\.html)?$/,
                    message:
                      "Može sadržati samo slova i brojeve u formi url-a.",
                  },
                })}
                placeholder="https://qr.pet-id.digital/Pk7298MlMs/8Ws3KLLN7b"
                className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowQRScanner(!showQRScanner);
                }}
                className="bg-[#3BC77E] text-white px-4 py-2 rounded mt-4"
              >
                {" "}
                {showQRScanner ? "Zatvori Skener" : "Otvori Skener"}
              </button>
              <label
                htmlFor="linkPetId"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-[#FF553E] text-center"
              >
                Na nekim telefonima ne radi, u tom slučaju ručno otvori kameru
                ili aplikaciju za skeniranje qr koda i kopiraj kod.
              </label>
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
              {showQRScanner && (
                <div className="mt-4" ref={scannerRef}>
                  <QRReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                    facingMode="environment"
                    playsInline
                  />
                </div>
              )}
              {errors.linkPetId && (
                <small className="text-red-400 pl-[3px]">
                  {errors.linkPetId.message}
                </small>
              )}
            </div>
            <div className="group relative w-52 min-[450px]:w-60 sm:w-72 md:w-[400px] m-auto pb-10 sm:pb-4 mt-7 text-center">
              <label
                htmlFor="oblik_priveska"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400 text-center"
              >
                Odaberi OBLIK priveska
              </label>
              <select
                id="oblik_priveska"
                {...register("oblik_priveska", {
                  required: {
                    value: true,
                    message: "Ovo polje je obavezno.",
                  },
                })}
                className="bpeer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 text-[#919191] font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
              >
                <option value="">Izaberi oblik</option>
                <option value="koskica">KOSKICA</option>
                <option value="srce">SRCE</option>
                <option value="krug">KRUG</option>
              </select>
              {errors.oblik_priveska && (
                <small className="text-red-400 pl-[3px]">
                  {errors.oblik_priveska.message}
                </small>
              )}
            </div>
            <div className="group relative w-52 min-[450px]:w-60 sm:w-72 md:w-[400px] m-auto pb-10 sm:pb-12 mt-7 text-center">
              <label
                htmlFor="boja_priveska"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400 text-center"
              >
                Odaberi BOJU priveska
              </label>
              <select
                id="boja_priveska"
                {...register("boja_priveska", {
                  required: {
                    value: true,
                    message: "Ovo polje je obavezno.",
                  },
                })}
                className="bpeer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 text-[#919191] font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
              >
                <option value="">Izaberi boju</option>
                <option value="CR100SZ">
                  Pozadi CRNA napred SVETLO ZELENA
                </option>
                <option value="CR100PL">Pozadi CRNA napred PLAVA</option>
                <option value="CR100RO">Pozadi CRNA napred ROZE</option>
                <option value="CR100CV">Pozadi CRNA napred CRVENA</option>
                <option value="CR100NA">Pozadi CRNA napred NARANDŽASTA</option>
                <option value="SR100RO">
                  Pozadi SVETLO ROZE napred TAMNO ROZE
                </option>
                <option value="SZ100ZE">
                  Pozadi SVETLO ZELENA napred TAMNO ZELENA
                </option>
                <option value="NA100BE">Pozadi NARANDŽASTA napred BELA</option>
                <option value="SP100BE">Pozadi SVETLO PLAVA napred BELA</option>
                <option value="SZ100BE">
                  Pozadi SVETLO ZELENA napred BELA
                </option>
                <option value="PL100SP">
                  Pozadi TAMNO PLAVA napred SVETLO PLAVA
                </option>
              </select>
              {errors.boja_priveska && (
                <small className="text-red-400 pl-[3px]">
                  {errors.boja_priveska.message}
                </small>
              )}
            </div>

            <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-evenly mt-12 min-[450px]:pt-12 md:mt-0 md:pt-64 px-4 lg:pt-12 xl:pt-24 lg:items-stretch">
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
                      className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium mt-4 sm:mt-0"
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
                    {...register(
                      "imeLjubimca",

                      {
                        required: {
                          value: true,
                          message: "Ovo polje je obavezno.",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9 ]{2,30}$/,
                          message:
                            "Može sadržati samo slova, brojeve i razmak i min. 2 karaktera",
                        },
                      }
                    )}
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
                <div className="group relative w-[90%] xl:w-[60%] md:w-80 m-auto pb-10">
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
                        value: /^[a-zA-Z0-9 ]{2,30}$/,
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
                        value: /^[a-zA-Z0-9 ]{2,30}$/,
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
                    Napomena (alergije, sta posebno voli, cega se plasi i sl.)
                  </label>
                  <div className="box border rounded flex flex-col shadow bg-white">
                    <textarea
                      placeholder="Npr. Mnogo voli decu, voli sve da jede, nije agresivna"
                      className="peer h-20 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                      id="napomena"
                      {...register("napomena", {
                        pattern: {
                          value: /^[a-zA-Z0-9\s\.,!?]+$/,
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
                {/* Podaci o vlasniku */}
                {/* <div className="md:flex md:justify-center w-full absolute top-[-120px] min-[450px]:top-[-165px] sm:top-[-244px] md:top-[-247px] lg:top-[-145px] xl:top-[-223px]">
                  <LazyLoadImage
                    effect="blur"
                    src={s6}
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                    alt="s6"
                  />
                </div> */}
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
                        value: /^[a-zA-Z0-9 ]{2,30}$/,
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
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-10 pt-6">
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
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                        value: /^[a-zA-Z0-9/\-\s]{2,30}$/,
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
                    htmlFor="secretWord1"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Sigurnosna reč* (objasnjenje u napomeni)
                  </label>
                  <input
                    type="text"
                    id="secretWord1"
                    {...register("secretWord1", {
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
                  {errors.secretWord1 && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.secretWord1.message}
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
                  možete staviti i samo opštinu ili grad.
                  <br />
                  <br />* Sigurnosna reč: Ukoliko želite da promenite bilo koji
                  podatak, mi ćemo vas pitati za ovu reč, čime dokazujete da ste
                  vlasnik. Ta reč može da bude bilo šta, npr. ime vašeg prvog
                  ljubimca, npr. "Džeki".
                </h5>
              </div>
            </div>
            <input
              type="hidden"
              name="_gotcha"
              style={{ display: "none !important" }}
            />

            <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-9 md:mt-20 w-full mb-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const brTelefonaVlasnikaEmptyLjubimac =
                    form1.watch("brTelefonaVlasnika");
                  const brDrugiVlasnikaEmpty = form1.watch("brDrugiVlasnika");
                  const emailVlasnikaEmpty = form1.watch("emailVlasnika");
                  if (
                    brTelefonaVlasnikaEmptyLjubimac === "" &&
                    brDrugiVlasnikaEmpty === "" &&
                    emailVlasnikaEmpty === ""
                  ) {
                    ErrorContact();
                  } else {
                    handleSubmit(onSubmit)();
                  }
                }}
                className={`
                 ${disabledState === false ? "opacity-50 mt-8 sm:mt-0" : ""} 
                  cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[280px] sm:w-[270px] h-[64px] rounded-lg duration-500 ml-0 md:ml-[20px] mt-8 sm:mt-0`}
              >
                <h2 className="text-3xl">Pošalji</h2>
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
              <div className="absolute top-[280px] min-[330px]:top-[234px] md:top-[184px] md:w-[150px] lg:top-[154px] lg:w-[220px] right-0 w-[100px] xl:w-[250px] xl:top-[85px]">
                <LazyLoadImage
                  effect="blur"
                  src={koktel}
                  alt="koktel"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute top-[320px] min-[330px]:top-[294px] md:top-[234px] min-[450px]:w-[185px] md:w-[220px] min-[450px]:top-[260px] lg:top-[250px] lg:w-[250px] left-0 w-[140px] xl:w-[300px] xl:top-[180px]">
                <LazyLoadImage
                  effect="blur"
                  src={Kitty}
                  alt="Kitty"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </>
        )}
        <pre>{JSON.stringify(form1.watch(), null, 2)}</pre>
      </form>
      {korak === 2 && (
        <div className="bg-white">
          <div className="text-center mt-12 sm:mt-28">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#3BC77E] pb-[25px]">
              Hvala Vam na poverenju!
            </h1>
            <h2 className="text-xl sm:text-3xl mt-2">
              Uspesno ste poslali podatke za vašeg kućnog ljubimca.
            </h2>
            <p className="text-sm sm:text-xl mt-7">
              Podaci će biti online u roku od 48 sati.{" "}
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
                    Naruči opet kao poklon prijatelju
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

export default MojLjubimac;
