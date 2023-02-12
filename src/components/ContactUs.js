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

const ContactUs = () => {
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
  // useEffect(() => {

  //   // const ifErrorsInputs = () => {
  //   if (imeKontakt === "") {
  //     console.log("imeKontakt");
  //     setDisabledButton(false);
  //     setActive(true);
  //   } else if (emailKontakt === "") {
  //     console.log("emailKontakt");
  //     setDisabledButton(false);
  //     setActive(true);
  //   } else if (porukaKontakt === "") {
  //     console.log("porukaKontakt");
  //     setDisabledButton(false);
  //     setActive(true);
  //   } else if (isValid === false) {
  //     console.log("isValid");
  //     setDisabledButton(false);
  //     setActive(true);
  //   } else {
  //     console.log("svi uslovi ispunjeni");
  //     setDisabledButton(true);
  //     setActive(false);
  //   }
  //   //ifErrorsInputs();
  //   // };
  // }, [imeKontakt, emailKontakt, porukaKontakt, isValid, active]);
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
      <div className="text-gray-700 body-font relative">
        <div className="container px-5 pt-12 mx-auto">
          {korak === 1 && (
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold pb-8 mt-12 sm:mt-0 text-center text-[#FF553E]">
                Kontaktirajte nas
              </h1>
              <p className="pt-8 font-bold text-xl sm:text-xl md:text-xl lg:text-xl text-center">
                Ukoliko imate pitanje, kontaktirajte nas putem mejla ili
                drustvenih mreza
              </p>
            </div>
          )}
          <form>
            {korak === 1 && (
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2 flex-col md:flex-row">
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="imeKontakt"
                        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                      >
                        Ime
                      </label>
                      <input
                        type="text"
                        id="imeKontakt"
                        {...register("imeKontakt", {
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
                        className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                      />
                      {errors.imeKontakt && (
                        <small className="text-red-400 pl-[3px]">
                          {errors.imeKontakt.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="emailKontakt"
                        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="emailKontakt"
                        {...register("emailKontakt", {
                          required: {
                            value: true,
                            message: "Ovo polje je obavezno.",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Mora biti odgovarajući format za email.",
                          },
                        })}
                        className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400"
                      />
                      {errors.emailKontakt && (
                        <small className="text-red-400 pl-[3px]">
                          {errors.emailKontakt.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="porukaKontakt"
                        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400"
                      >
                        Poruka
                      </label>
                      <textarea
                        id="porukaKontakt"
                        {...register("porukaKontakt", {
                          required: {
                            value: true,
                            message: "Ovo polje je obavezno.",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9a-яА-ЯčćžšđљњђћџнјČĆŽŠĐЉЊЂЋЏНЈ\s\.,:;!?/-]+$/,
                            message:
                              "Može sadržati samo slova, brojeve, tačku, zarez, uzvičnik, znak pitanja, dve tačke, crticu, tačku-zarez, kosu crtu i razmak. Broj karaktera 2-200.",
                          },
                        })}
                        className="w-full rounded border border-gray-300 focus:border-[#3BC77E] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                      {errors.porukaKontakt && (
                        <small className="text-red-400 pl-[3px]">
                          {errors.porukaKontakt.message}
                        </small>
                      )}
                    </div>
                  </div>
                  {showMessage && (
                    <div
                      className="p-2 w-full flex justify-center transitionDiv"
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
                                    <rect
                                      width="24"
                                      height="24"
                                      opacity="0"
                                    ></rect>
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
                  <div className="flex justify-center mt-8 w-full">
                    <div className="pb-12">
                      <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg duration-500">
                        <button
                          onClick={() => {
                            if (
                              imeKontakt === "" ||
                              emailKontakt === "" ||
                              porukaKontakt === ""
                            ) {
                              ErrorEmptyFields();
                            } else if (isValid === false) {
                              setShowMessage(true);
                            } else {
                              // setStep(2);
                              // window.scrollTo({
                              //   top: 0,
                              //   behavior: "smooth",
                              // });
                              //setActive(false);
                              handleSubmit(onSubmit)();
                            }
                          }}
                          className={`${
                            imeKontakt === "" ||
                            emailKontakt === "" ||
                            porukaKontakt === "" ||
                            isValid === false
                              ? "opacity-50 sm:mt-0"
                              : ""
                          } text-3xl`}
                          type="button"
                        >
                          Pošalji
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
              </div>
            )}
          </form>
        </div>
      </div>
      {korak === 1 && (
        <div className="w-[98%] flex justify-center mt-4">
          <LazyLoadImage
            effect="blur"
            loading="lazy"
            decoding="async"
            alt="KontaktSlika"
            src={KontaktSlika}
            className="rounded-lg"
          />
        </div>
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
  );
};

export default ContactUs;
