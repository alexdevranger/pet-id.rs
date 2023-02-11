import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import KoskicaZl from "../assets/koskica.png";
import KoskicaCr from "../assets/koskicaCr.png";
import koskicaPl from "../assets/koskicaPL.png";
import koskicaRo from "../assets/koskicaRo.png";

const Koskica = () => {
  // const zelena = KoskicaZl;
  const [activeThumb, setActiveThumb] = useState(KoskicaZl);

  return (
    <div>
      <div className="w-full mt-14 ">
        <h1 className="text-3xl font-bold text-center w-full pb-14">
          Korak 2 - Unesite sve podatke vašeg ljubimca / maca
        </h1>
      </div>
      <div className="flex w-full md:w-[90%] flex-col md:flex-row">
        <div className="w-full mt-2 flex justify-around">
          <div className="items-center flex flex-col w-[350px]">
            <div
              id="koskica"
              className=" mt-7 md:w-[350px] w-[300px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all hover:w-[320px] md:hover:w-[370] ease-in-out duration-500"
            >
              <img src={activeThumb}></img>
            </div>
            <div className="justify-center flex w-[300px] md:w-[330px] lg:w-[400px]">
              <div
                onClick={() => setActiveThumb(KoskicaZl)}
                className="cursor-pointer flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-[#3BC77E] transition-all hover:w-[80px] ease-in-out duration-500 items-center"
              >
                <img src={KoskicaZl} />
              </div>
              <div
                onClick={() => setActiveThumb(KoskicaCr)}
                className="cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-red-300 transition-all hover:w-[80px] ease-in-out duration-500 items-center"
              >
                <img src={KoskicaCr} />
              </div>
              <div
                onClick={() => setActiveThumb(koskicaPl)}
                className="cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-blue-300 transition-all hover:w-[80px] ease-in-out duration-500 items-center"
              >
                <img src={koskicaPl} />
              </div>
              <div
                onClick={() => setActiveThumb(koskicaRo)}
                className="cursor-pointer ml-4 flex mt-14 w-[70px] border-2 rounded-md hover:bg-gray-200 hover:border-pink-300 transition-all hover:w-[80px] ease-in-out duration-500 items-center"
              >
                <img src={koskicaRo} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col w-[95%] md:w-full">
          <h3 className="text-3xl font-bold text-left pb-7">
            Pet ID tag koskica
          </h3>
          <h4 className="text-md md:text-xl font-semibold text-left">
            Pet ID tag napravljen je od specijalno odabranog materijala koji je
            potpuno bezbedan za vašeg ljubimca. Ne sadrži toksične boje u
            sastavu priveska, kao ni u štampi, pa ne ugrožava ni zdravlje
            životinja ni okolinu. Kopča je snažna i drži tag čvrsto na ogrlici.
            Pogodan je za sve vrste ljubimaca. <br></br> <br></br>QR kod je
            vidiljiv na privesku već sa 5 metara udaljenosti, a kod se lako
            očitava bilo kojim mobilnim telefonom.{" "}
          </h4>
          <h3 className="text-2xl font-bold text-center md:text-left pt-7">
            Cena:
          </h3>
          <h3 className="text-2xl font-bold text-center md:text-left pt-1 md:pt-7 pb-4 text-[#3BC77E]">
            1.600,00 RSD
          </h3>
        </div>
      </div>

      <div className="w-full mt-2 flex justify-around">
        <div className="items-center flex flex-col w-[350px]">
          <h1 className="text-3xl font-bold text-left mt-10">
            Podaci o ljubimcu
          </h1>
        </div>
      </div>
      {/* podaci 1 kolona */}
      <div className="flex justify-around mt-2 md:mt-12 flex-col md:flex-row">
        <div className="flex flex-col justify-around items-center py-7 md:py-0">
          <label htmlFor="pasIliMacka">Pas ili macka</label>
          <div className="flex justify-between items-center">
            <input
              className="ml-0 md:ml-3"
              type="radio"
              value="Pas"
              name="gender"
            />{" "}
            Pas
            <input
              className="ml-3 md:ml-3"
              type="radio"
              value="Macka"
              name="gender"
            />{" "}
            Macka
          </div>
        </div>
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Ime Ljubimca
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="text"
            id="imeLjubimca"
            name="imeLjubimca"
            placeholder=" Stela"
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Rasa
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="text"
            id="rasa"
            name="rasa"
            placeholder=" Zlatni retriver"
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>
      {/* podaci 2 kolona */}
      <div className="flex justify-around mt-12 items-center content-center flex-col md:flex-row md:items-end">
        <div className="flex items-center flex-col py-1 md:py-0 md:pl-6 lg:pl-0 pl-0">
          <label htmlFor="pasIliMacka">Vaš čupavi prijatelj je</label>
          <div className="flex mt-3">
            <input className="" type="radio" value="Muški" name="gender" />{" "}
            Muški
            <input
              className="ml-3"
              type="radio"
              value="Ženski"
              name="gender"
            />{" "}
            Ženski
          </div>
        </div>
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Godina ili mesec starosti
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="text"
            id="imeLjubimca"
            name="imeLjubimca"
            placeholder=" Stela"
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-12 flex items-flex-start flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Napomena (alergije, <br></br>sta posebno voli, cega se plasi i sl.)
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="text"
            id="napomena"
            name="napomena"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>

      <div className="w-full mt-7 flex justify-around">
        <div className="items-center flex flex-col w-[350px]">
          <h1 className="text-3xl font-bold text-left mt-10">
            Podaci o vlasniku
          </h1>
        </div>
      </div>

      {/* podaci o vlasniku 1 kolona */}
      <div className="flex justify-evenly mt-12 flex-col md:flex-row">
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Ime i prezime vlasnika
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="text"
            id="imeVlasnika"
            name="imeVlasnika"
            placeholder=" Aleksandra Nikolic"
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Broj telefona vlasnika
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[200px] xl:w-[400px]"
            type="number"
            id="brTelefonaVlasnika"
            name="brTelefonaVlasnika"
            placeholder=" "
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Drugi broj za svaki slucaj
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[200px] xl:w-[300px] 2xl:w-[400px]"
            type="number"
            id="brDrugiVlasnika"
            name="brDrugiVlasnika"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>
      {/* podaci o vlasniku 2 kolona */}
      <div className="flex justify-evenly mt-2 md:mt-12 flex-col md:flex-row">
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Email
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="text"
            id="emailVlasnika"
            name="emailVlasnika"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-0 md:pl-12 flex items-center flex-col py-7 md:py-0">
          <label htmlFor="imeLjubimca" className="mr-3">
            Adresa vlasnika
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 w-[250px] md:w-[280px] xl:w-[400px]"
            type="number"
            id="adresaVlasnika"
            name="adresaVlasnika"
            placeholder=" "
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>
      <div className="pb-12">
        <Link to="/shop/koskica/dostava">
          <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-full md:w-[280px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#FF553E]">
            <h2 className="text-3xl">Sledeci korak</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Koskica;
