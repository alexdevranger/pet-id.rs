import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import SveKombinacije from "../assets/sve_kombinacije_optimized.webp";
import KoskicaPakovanje from "../assets/koskica_pakovanje_optimized.webp";
import KrugPakovanje from "../assets/krug_pakovanje_optimized.webp";
import SrcePakovanje from "../assets/srce_pakovanje_optimized.webp";
import bg from "../assets/bg.webp";
import toast, { Toaster } from "react-hot-toast";

function Veleprodaja() {
  const form = useForm({
    defaultValues: {
      imeKupcaVP: "",
      mailKupcaVP: "",
      poslatiPonudu: "poslatiPonudu",
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
  const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 10000));
  const [valueCaptcha, setValueCaptcha] = useState("");
  const ErrorEmptyFields = () => toast.error("Sva polja su obavezna.");
  const imeKupcaVPEmpty = form.watch("imeKupcaVP");
  const mailKupcaVPEmpty = form.watch("mailKupcaVP");
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const mountedStyle = {
    animation: "inAnimation 300ms ease-in-out",
  };
  const onSubmit = (data) => {
    if (imeKupcaVPEmpty === "" && mailKupcaVPEmpty === "") {
      ErrorEmptyFields();
    } else {
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
    }
  };
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
            Veleprodaja
          </h1>
          <p className="text-[18px] sm:text-xl mt-7 w-[75%] min-[730px]:w-[50%] m-auto">
            Ukoliko želite da poručite PET ID tagove kao PET SHOP ili
            VELEPRODAJA, u polje ispod samo ubacite vašu email adresu i mi ćemo
            vam poslati ponudu sa veleprodajnim cenama.
          </p>
          <form>
            <div className="group relative w-52 min-[450px]:w-60 sm:w-72 md:w-[400px] m-auto pb-4 sm:pb-4 mt-7">
              <label
                htmlFor="imeKupcaVP"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400 text-center"
              >
                Ime pet shop-a ili veleprodaje
              </label>
              <input
                id="imeKupcaVP"
                autoFocus={true}
                type="text"
                {...register("imeKupcaVP", {
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
                placeholder="PANDA"
                className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400 text-center"
              />
              {errors.imeKupcaVP && (
                <small className="text-red-400 pl-[3px]">
                  {errors.imeKupcaVP.message}
                </small>
              )}
              <label
                htmlFor="mailKupcaVP"
                className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-green-400 text-center mt-4"
              >
                Vaša email adresa
              </label>
              <input
                id="mailKupcaVP"
                type="text"
                {...register("mailKupcaVP", {
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
                placeholder="pet_shop_panda@gmail.com"
                className="peer h-10 w-full border border-zinc-300 rounded-md bg-gray-50 px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-green-400 text-center"
              />
              {errors.mailKupcaVP && (
                <small className="text-red-400 pl-[3px]">
                  {errors.mailKupcaVP.message}
                </small>
              )}
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (imeKupcaVPEmpty === "" && mailKupcaVPEmpty === "") {
                    ErrorEmptyFields();
                  } else if (isValid === false) {
                    setShowMessage(true);
                  } else {
                    handleSubmit(onSubmit)();
                  }
                }}
                className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-full h-[64px] rounded-lg duration-500 ml-0 mt-8"
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
            </div>
            {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
          </form>
          <p className="text-[18px] sm:text-xl mt-7 w-[75%] min-[730px]:w-[50%] m-auto pb-4">
            Naše transportno pakovanje je 14 kom, ali možete kupiti i manje od
            toga.
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#FF553E] pb-[25px] px-4">
            Svaki <strong className="text-[#3BC77E]">KUPAC</strong> koji prvi
            put kupi po 3 kom od svakog oblika, dobija besplatnu reklamu na
            instagramu !!!
          </h3>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#FF553E] pb-[25px]">
            3 dana
          </h1>
          <div className="flex justify-evenly 2xl:pb-6 2xl:w-[75%] m-auto min-[300px]:flex-col min-[300px]:items-center max-[500px]:flex-col max-[500px]:items-center min-[501px]:flex-row mb-[30px]">
            <div className="border-1 border-stone-300 rounded-lg w-[250px]">
              <LazyLoadImage
                effect="blur"
                alt="KoskicaPakovanje"
                src={KoskicaPakovanje}
                className="pt-0 min-[1471px]:mt-1 min-[1638px]:pt-3 min-[1638px]:pt-6 m-auto px-6 xl:px-0"
              />
            </div>
            <div className="border-1 border-stone-300 rounded-lg w-[250px] mt-[5px]">
              <LazyLoadImage
                effect="blur"
                alt="SrcePakovanje"
                src={SrcePakovanje}
                className="pt-0 min-[1471px]:mt-1 min-[1638px]:pt-3 min-[1638px]:pt-6 m-auto px-6 xl:px-0"
              />
            </div>
            <div className="border-1 border-stone-300 rounded-lg w-[250px]">
              <LazyLoadImage
                effect="blur"
                alt="KrugPakovanje"
                src={KrugPakovanje}
                className="pt-0 min-[1471px]:mt-1 min-[1638px]:pt-3 min-[1638px]:pt-6 m-auto px-6 xl:px-0"
              />
            </div>
          </div>
          <div className="flex justify-center 2xl:pb-6">
            <div className="border-1 border-stone-300 rounded-lg">
              <LazyLoadImage
                effect="blur"
                alt="SveKombinacije"
                src={SveKombinacije}
                className="pt-0 min-[1471px]:mt-1 min-[1638px]:pt-3 min-[1638px]:pt-6 m-auto px-6 xl:px-0"
              />
            </div>
          </div>
          <Link to="/kontakt">
            <div className="flex justify-around pt-32 w-full mb-32">
              <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[300px] h-[64px] rounded-lg duration-500">
                <h2 className="text-lg md:text-3xl">Kontaktirajte nas</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Veleprodaja;
