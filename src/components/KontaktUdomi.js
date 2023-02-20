import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import KontaktSlika from "../assets/group.webp";
import bg from "../assets/bg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import toast, { Toaster } from "react-hot-toast";
import HvalaSlika from "../assets/hvala.png";
import s7 from "../assets/s7.webp";
import cutedog from "../assets/cutedog.jpg";
import cutecat from "../assets/cutecat.jpg";
import s6 from "../assets/s6.webp";
import koktel from "../assets/koktel.png";


const KontaktUdomi = () => {
    
    const [step1, setStep1] = useState(1);
    const [disabledState, setDisabledState] = React.useState(false);
    const ErrorContact = () =>
    toast.error("Stavite bar jedan način kako da vas kontaktira pronalazač.");
    const onSubmit1 = (data) => {
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
        url: "https://getform.io/f/9ed2cf9e-330e-4f44-bfed-2afb3c202a66",
        data: formData,
        header: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => console.log(response))
        .then((response) => setStep1(2))
        .catch((error) => console.log(error));
    }
  };
    
    const [petImage, setPetImage] = useState("");
    const [petImgFile, setPetImgFile] = useState("");

    const handleFileChange = (e) => {
        let file = e.target.files[0];
        setPetImgFile(file);
        let reader = new FileReader();
        reader.onload = (e) => setPetImage(e.target.result);
        reader.readAsDataURL(file);
    };
    const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 10000));
    const [valueCaptcha, setValueCaptcha] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const mountedStyle = {
        animation: "inAnimation 300ms ease-in-out",
    };
    const [korak, setKorak] = useState(1);
    const form = useForm({
        defaultValues: {
        imeKontakt: "",
        emailKontakt: "",
        porukaKontakt: "",
        },
        mode: "onChange",
    });
    const {
        register,
        watch,
        handleSubmit,
        setFocus,
        formState: { errors },
        reset,
    } = form;
    const imeKontakt = form.watch("imeKontakt");
    const emailKontakt = form.watch("emailKontakt");
    const porukaKontakt = form.watch("porukaKontakt");
    const onSubmit = (data) => {
        if (imeKontakt === "" || emailKontakt === "" || porukaKontakt === "") {
        ErrorEmptyFields();
        } else {
        console.log(data);
        let formData = new FormData();
        formData.append("document", JSON.stringify(data));
        axios({
            method: "post",
            url: "https://getform.io/f/552ceace-932e-49b8-b671-fd22631c63b0",
            data: formData,
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
    React.useEffect(() => {
        setFocus("imeKontakt");
    }, [setFocus]);
    useEffect(() => {
        const firstError = Object.keys(errors).reduce((field, a) => {
        return !!errors[field] ? field : a;
        }, null);

        if (firstError) {
        setFocus(firstError);
        }
    }, [errors, setFocus]);

    const handleChange = (event) => {
        setValueCaptcha(event.target.value);
        setIsValid(parseInt(event.target.value) === captcha);
    };
    const reloadCaptcha = () => {
        setCaptcha(Math.floor(Math.random() * 10000));
        setIsValid(false);
        setValueCaptcha("");
    };
    const ErrorEmptyFields = () => toast.error("Sva polja su obavezna.");
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {step1 === 1 && (
          <>
            <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-evenly mt-12 pt-24 min-[450px]:pt-16 sm:pt-52 md:mt-0 md:pt-64 px-4">
              <div
                className="bs w-[290px] min-[450px]:w-[420px] min-[550px]:w-[520px] sm:w-[600px] lg:w-[350px] xl:w-[550px] mt-14 pb-20 flex flex-col relative"
                style={{
                  backgroundImage: `url(${bg})`,
                  repeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="md:flex md:justify-center w-full md:w-full absolute top-[-120px]  min-[450px]:top-[-170px] min-[550px]:top-[-214px] sm:top-[-250px] md:top-[-247px] lg:top-[-145px] xl:top-[-223px]">
                  <LazyLoadImage
                    effect="blur"
                    src={s7}
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                    alt="s7"
                  />
                </div>

                {/* PODACI O LJUBIMCU */}
                <div className="w-full mt-2 flex justify-around">
                  <div className="items-center flex flex-col w-[240px] min-[450px]:w-[350px] sm:w-[350px] lg:w-[300px] xl:w-[350px]">
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
                    placeholder="Stela ( 3-50 karaktera)"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    placeholder="na pr. 1 godina ili 5 meseci"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.starost && (
                    <small className="text-red-400">
                      {errors.starost.message}
                    </small>
                  )}
                </div>

                {/* musko ili zensko */}
                <div className="flex flex-col items-center min-[450px]:flex-row justify-center mb-7">
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
                      className="peer h-20 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                className="bs w-[290px] min-[450px]:w-[420px] min-[550px]:w-[520px] sm:w-[600px] lg:w-[350px] xl:w-[550px] mt-24 pb-20 flex flex-col relative sm:mt-32 md:mt-24 lg:mt-12"
                style={{
                  backgroundImage: `url(${bg})`,
                  repeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {/* Podaci o vlasniku */}
                <div className="md:flex md:justify-center w-full absolute top-[-120px] min-[450px]:top-[-165px] min-[550px]:top-[-205px] sm:top-[-244px] md:top-[-247px] lg:top-[-145px] xl:top-[-223px]">
                  <LazyLoadImage
                    effect="blur"
                    src={s6}
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                    alt="s6"
                  />
                </div>
                <div className="w-full mt-2 flex justify-around">
                  <div className="items-center flex flex-col w-[240px] min-[450px]:w-[350px] sm:w-[350px] md:w-[500px] lg:w-[300px] xl:w-[350px]">
                    <h1 className="text-xl sm:text-3xl lg:text-xl xl:text-3xl font-bold text-left mt-10 border border-zinc-300 rounded-md p-7 bg-[#fff]">
                      Podaci o heroju
                    </h1>
                  </div>
                </div>

                {/* Ime i prezime vlasnika */}
                <div className="group relative w-[90%] xl:w-[60%] m-auto pb-4 mt-14">
                  <label
                    htmlFor="imeVlasnika"
                    className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                  >
                    Ime heroja ( ili vlasnika )
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
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    Broj telefona 
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
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
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
                    Sigurnosna reč* (JEDNA REČ)
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
                          /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ\/_\-]{2,30}$/,
                      },
                    })}
                    placeholder="npr. udomiPomozi"
                    className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                  />
                  {errors.secretWord && (
                    <small className="text-red-400 pl-[3px]">
                      {errors.secretWord.message}
                    </small>
                  )}
                </div>
              </div>
            </div>
            

            <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-9 md:mt-20 w-full mb-6">
              <Link to="/udomi">
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
                    setStep1(2);
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
                <h2 className="text-3xl">Pošalji</h2>
                <Toaster
                  position="top-center"
                  toastOptions={{
                    className: "",
                    style: {
                      border: "1px solid red",
                      padding: "16px",
                      color: "red",
                      width: "300px",
                    },
                  }}
                />
              </button>
              <div className="absolute top-[164px] md:top-[124px] lg:top-[124px] md:w-[150px] right-0 w-[100px] lg:w-[210px]">
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
      {korak === 2 && (
        <div className="bg-white">
          <div className="text-center mt-12 sm:mt-28">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#3BC77E] pb-[25px]">
              Hvala Vam na poverenju!
            </h1>
            <h2 className="text-xl sm:text-3xl mt-2">
              Uspesno ste poslali poruku.
            </h2>
            <p className="text-sm sm:text-xl mt-7">
              Odgovor će vam biti poslat u roku od 48 sati.{" "}
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
                    Naruci Pet ID za svog ljubimca
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default KontaktUdomi