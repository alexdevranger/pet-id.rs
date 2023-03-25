import React, { useState } from "react";
import bg from "../assets/bg.webp";
import { cardsData } from "../config/data";
import UdomiDetailCrveni from "./UdomiDetailCrveni";
import UdomiDetailZeleni from "./UdomiDetailZeleni";
import PaginationFinal from "./PaginationFinal";

function Udomi() {
  const [showModal3, setShowModal3] = React.useState(false);
  const cardsData1 = [].concat(cardsData).reverse();
  const [filteredItems, setFilteredItems] = useState(cardsData1);
  const [pageOfItems, setPageOfItems] = useState([]);
  const onChangePage = (pageOfItems) => {
    setPageOfItems(pageOfItems);
  };
  const handleFilter = (e) => {
    const inputValue = e.currentTarget.value.toString().toLowerCase();
    const newFilteredItems = cardsData1.filter((item) =>
      item.petName.toLowerCase().includes(inputValue)
    );

    if (newFilteredItems.length === 0) {
      newFilteredItems.push({ id: 0, name: "" });
    }
    setFilteredItems(newFilteredItems);
  };
  let noResultsMessage =
    filteredItems[0].id === 0 ? (
      <div>
        <h3 className="text-[25px] text-[#ff553e]">
          Nema ljubimca sa tim imenom !
        </h3>
      </div>
    ) : (
      ""
    );
  let tableDisplay = filteredItems[0].id === 0 ? "hidden" : "";
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
          <div className="w-full flex justify-center mt-12 pb-4">
            <div className="input-box">
              <button
                type="button"
                onClick={() => {
                  setShowModal3(true);
                }}
              >
                Kako da pošaljem podatke ?
              </button>
            </div>
            {showModal3 ? (
              <>
                <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-2xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none shadow shadow-[[0_10px_10px_5px_#3bc77e] hover:shadow-[0_10px_10px_5px_#3bc77e]">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold flex items-center">
                          Šta je potrebno od podataka ?
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => {
                            setShowModal3(false);
                          }}
                        >
                          <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex flex-col ">
                        <ul className="w-full text-left">
                          <li>1. Maksimum 4 slike</li>
                          <li>2. Ime</li>
                          <li>3. Pol</li>
                          <li>4. Starost</li>
                          <li>5. Grad</li>
                          <li>6. Kontakt telefon</li>
                          <li>7. Da li je vaksinisan</li>
                          <li>8. Da li je očišćen od parazita</li>
                          <li>9. Da li je sterilisan</li>
                          <li>10. Da li je obezbeđen prevoz do udomitelja</li>
                          <li>
                            11. Opširniji opis ili karakteristike ljubimca
                          </li>
                        </ul>
                        <h2 className="text-[20px]">
                          Informacije poslati na email:
                          <b> udomi.pet.id@gmail.com </b>
                        </h2>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal3(false);
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
          <h2 className="text-md sm:text-lg px-6 md:text-xl lg:px-32 mt-4">
            Ako imate psa ili mačku kojima ne možete pružiti brigu koju
            zaslužuju, nemojte ih napuštati - pomoć je na dohvat ruke. Ako ste
            pronašli psa ili mačku na ulici, nemojte ih ostaviti tamo... Vaša
            odluka može spasiti život ovih divnih stvorenja. Ako imate psa ili
            mačku kojima ne možete pružiti ljubav i pažnju koju zaslužuju,
            nemojte ih ostavljati na ulici - pronađite im novi dom i porodicu
            koja će im pružiti sve što im je potrebno.
          </h2>
        </div>
        <div className="w-full flex justify-center mt-12 pb-4">
          <div className="input-box">
            <input
              type="text"
              onInput={handleFilter}
              style={{ color: "#ff543c" }}
            />
            <span>Pretraži po imenu ljubimca</span>
            <i className="prazanInput"></i>
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-[20px] hover:duration-500 text-gray-700 body-font ${tableDisplay}`}
        >
          {pageOfItems.map((singlePet, i) => {
            if (singlePet.id % 2 === 0) {
              return (
                <div key={singlePet.id}>
                  <UdomiDetailZeleni
                    id={singlePet.id}
                    slika={singlePet.imgSrc}
                    dan={singlePet.dan}
                    mesec={singlePet.mesec}
                    petName={singlePet.petName}
                    pol={singlePet.pol}
                    starost={singlePet.starost}
                    vakcinisan={singlePet.vakcinisan}
                    grad={singlePet.grad}
                    kontakt={singlePet.kontakt}
                    psp={singlePet.psp}
                    galery={singlePet.galery}
                    text1={singlePet.text1}
                    text2={singlePet.text2}
                    text3={singlePet.text3}
                  />
                </div>
              );
            }

            if (singlePet.id % 2 !== 0) {
              return (
                <div key={singlePet.id}>
                  <UdomiDetailCrveni
                    id={singlePet.id}
                    slika={singlePet.imgSrc}
                    dan={singlePet.dan}
                    mesec={singlePet.mesec}
                    petName={singlePet.petName}
                    pol={singlePet.pol}
                    starost={singlePet.starost}
                    vakcinisan={singlePet.vakcinisan}
                    grad={singlePet.grad}
                    kontakt={singlePet.kontakt}
                    psp={singlePet.psp}
                    galery={singlePet.galery}
                    text1={singlePet.text1}
                    text2={singlePet.text2}
                    text3={singlePet.text3}
                  />
                </div>
              );
            }
          })}
        </div>
        {noResultsMessage}

        <PaginationFinal
          items={filteredItems}
          initialPage="1"
          onChangePage={onChangePage}
        />

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
              title="idChatBox"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Udomi;
