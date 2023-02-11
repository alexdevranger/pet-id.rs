import React from "react";
import { Link } from "react-router-dom";

const Dostava = () => {
  return (
    <div>
      <div className="w-full mt-14 ">
        <h1 className="text-3xl font-bold text-center w-full pb-14">
          Korak 3 - Unesite podatke za dostavu Pet ID priveska
        </h1>
      </div>
      {/* podaci 1 kolona */}
      <div className="w-[80%] flex justify-evenly mt-12">
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Ime i prezime primaoca
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9"
            type="text"
            id="imePrimaoca"
            name="imePrimaoca"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Broj telefona
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 "
            type="text"
            id="brojPrimaoca"
            name="brojPrimaoca"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Email
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9"
            type="text"
            id="emailVlasnika"
            name="emailVlasnika"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>
      {/* podaci 2 kolona */}
      <div className="w-[80%] flex justify-evenly mt-12">
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Adresa primaoca
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9"
            type="text"
            id="adresaPrimaoca"
            name="adresaPrimaoca"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Grad
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 "
            type="text"
            id="grad"
            name="grad"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Država
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9 "
            type="text"
            id="drzava"
            name="drzava"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>
      <div className="w-[80%] flex justify-evenly mt-12">
        <div className="pl-12 flex items-center flex-col">
          <label htmlFor="imeLjubimca" className="mr-3">
            Posebna napomena
          </label>
          <input
            className="border border-[#3bc77f00] rounded-md bg-[#F5F5F5] text-black h-9"
            type="text"
            id="posebnaNapomena"
            name="posebnaNapomena"
            placeholder=""
            pattern="([A-Z])[\w+.]{1,}"
          />
        </div>
      </div>
      <Link to="/hvala-na-poverenju">
        <div className="cursor-pointer flex items-center justify-center text-white bg-[#3BC77E] w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#FF553E]">
          <h2 className="text-3xl">Naruci</h2>
        </div>
      </Link>
    </div>
  );
};

export default Dostava;
