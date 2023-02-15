import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Pet from "../assets/girl-main_optimized.webp";
import PetXL from "../assets/glavnaProbaXLred1_optimized.webp";
import bg from "../assets/bg.webp";
import Vektor from "../assets/Vector.png";
import Map from "../assets/map1_optimized.webp";
import Tags from "../assets/tags-image_optimized.webp";
import Sig from "../assets/sig1_optimized.webp";
import Zvr from "../assets/Zvrrr.png";
import Cezar from "../assets/garancija_optimized.webp";
import Gift from "../assets/gift-vet-image_optimized.webp";
import Poruci from "../assets/poruci_optimized.webp";
import Utisci from "../assets/new-1_optimized.webp";
import MackaUpitnik from "../assets/mackaUpitnik_optimized.webp";
import Mobile from "../assets/mobile_optimized.webp";
import Boby from "../assets/boby_optimized.webp";
import Sapica from "../assets/sapica.png";
import { FaHeart } from "react-icons/fa";

const Main1 = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex justify-center">
      <div className="w-full">
        {/* Glavna */}

        <div className="flex pt-12 sm:pt-28 flex-col sm:flex-row">
          <div className="lg:ml-16 xl:pl-22 sm:w-[80%] lg:w-[70%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center sm:text-left px-3 sm:pl-6 md:pl-6 md:mt-6 lg:mt-9 xl:mt-12 2xl:pb-8">
              Želiš svog ljubimca nazad ako se izgubi?
            </h1>
            <div className="px-6 md:px-8">
              <h4 className="pt-8 font-bold text-lg sm:text-xl md:text-xl lg:text-3xl text-center sm:text-left 2xl:pb-8">
                9 od 10 izgubljenih pasa i mačaka koji imaju Pet ID tag bude
                vraćeno svojim porodicama, i to često za manje od 24 sata!
              </h4>
            </div>
            <div className="px-6">
              <div className="pt-4 flex items-center lg:mb-8 lg:mt-3 xl:mb-0">
                <img className="pr-5" src={Vektor} alt="Vektor" />
                <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                  Veoma lako se uočava sa razdaljine od 10 metara, i lako se
                  očitava pomoću mobilnog koji ima svaki pronalazač.
                </p>
              </div>
              <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                <img className="pr-5" src={Vektor} alt="Vektor" />
                <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                  Ne smeta vašem ljubimcu kada se igra, spava ili kupa, jer je
                  mali, savitljiv i vodootporan.
                </p>
              </div>
              <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                <img className="pr-5" src={Vektor} alt="Vektor" />
                <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                  Specijalno dizajniran sastav materijala od koga je izrađen Pet
                  ID tag, tako da bude potpuno bezopasan i za vašeg ljubimca, i
                  za okolinu. Netoksične boje. Apsolutno sigurna kopča.
                </p>
              </div>
            </div>
            <div className="px-8 flex justify-center lg:justify-start">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E]">
                <Link to="/proizvodi">
                  <h2 className="text-[1.75rem]">Poruči Pet ID tag</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <LazyLoadImage
              effect="blur"
              alt="Pet"
              src={Pet}
              className="mt-12 sm:mt-0 lg:mt-[-77px] lg:w-full m-auto sm:block 2xl:pl-48"
            />
          </div>
        </div>

        {/* Utisci */}

        <div
          className="flex 2xl:justify-center pt-20 xl:pt-18 pb-10 w-full sm:flex-row items-center flex-col-reverse"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="w-full xl:pr-12">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="Utisci"
              className="w-[700px] rounded-lg"
              src={Utisci}
            />
          </div>
          <div className="w-full xl:pr-18 2xl:pr-12">
            <h2 className="min-[368px]:px-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold pb-8 mt-12 sm:mt-0 text-center sm:text-left">
              Neki od utisaka...
            </h2>
            <div className="px-6 text-left 2xl:pr-24">
              <blockquote>
                <p className="font-semibold text-black text-[18px] lg:text-xl sm:pr-6">
                  Jedan od najstrašnijih momenata u životu mi je bio kad sam se
                  okrenula oko sebe i shvatila da Paka nema nigde. Preplakala
                  sam popodne ali već istog dana zvao me je čovek i rekao -
                  “Našao sam vašeg psa, hajde da se nađemo da vam ga vratim”.
                </p>
              </blockquote>
              <br />
              <blockquote>
                <p className="font-semibold text-black text-[18px] lg:text-xl sm:pr-6">
                  Moja Milica ne izlazi nigde, ona je tipična kućna maca, i ne
                  znam šta joj je bilo da pobegne, ali srećom, posle užasne
                  neprospavane noći sutradan je zvao dečko koji je pronašao u
                  svom ulazu kako mjauče i traži pomoć. Zvao me je i nisam mogla
                  da verujem da mi se moja Milica vraća u krilo. Hvala Pet ID
                  tagu!!!!
                </p>
              </blockquote>
            </div>
            <div className="px-9 flex justify-center xl:justify-start xl:px-6">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-12 sm:mt-16 mb-12 sm:mb-0 duration-500 hover:bg-[#3BC77E]">
                <Link to="/proizvodi">
                  <h2 className="text-[1.75rem]">Poruči Pet ID tag</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Koraci */}
        <div className="sivaPozadina w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-0 pt-11 lg:pt-7 xl:pt-4 2xl:pt-0">
              U 3 brza koraka do Pet ID taga
            </h1>
          </div>
          <div className="">
            <div className="justify-center flex items-center">
              <div className="flex mt-2 lg:mt-12 xl:mt-24 justify-center flex-col sm:flex-row text-center sm:text-left md:px-6 md:pt-8 lg:pt-0 sm:items-start lg:px-0 xl:px-6">
                <div className="flex flex-col-reverse w-[250px] sm:w-[150px] md:w-[200px] lg:w-[300px] text-center items-center">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Tags"
                    className="mx-0 md:px-6 m-auto lg:mx-0"
                    src={Tags}
                  />
                  <div className="xl:w-[200px] lg:ml-0 xl:mr-6">
                    <h2 className="text-[#3BC77E] text-3xl font-bold xl:text-5xl mt-9 xl:mt-0 pt-0 sm:pt-5 md:pt-0">
                      Korak 1
                    </h2>
                    <h3 className="text-[18px] md:text-lg lg:text-xl font-semibold mb-3 mt-3">
                      Izaberi boju i oblik priveska Pet ID za vašeg ljubimca.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col-reverse w-[250px] sm:w-[150px] md:w-[200px] lg:w-[300px] text-center items-center sm:mx-10 md:mx-16 lg:mx-12 xl:mx-24">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Sig"
                    className="mx-0 md:px-6 m-auto lg:mx-0"
                    src={Sig}
                  />
                  <div className="xl:w-[200px] lg:ml-0 xl:mr-6">
                    <h2 className="text-[#3BC77E] text-3xl font-bold xl:text-5xl mt-9 xl:mt-0 pt-0 sm:pt-5 md:pt-0">
                      Korak 2
                    </h2>
                    <h3 className="text-[18px] md:text-lg lg:text-xl font-semibold mb-3 mt-3">
                      Ostavi kontakt u slucaju da se ljubimac izgubi.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col-reverse w-[250px] sm:w-[150px] md:w-[200px] lg:w-[300px] text-center items-center">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Map"
                    className="mx-0 md:px-6 m-auto lg:mx-0"
                    src={Map}
                  />
                  <div className="xl:w-[200px] lg:ml-0 xl:mr-6">
                    <h2 className="text-[#3BC77E] text-3xl font-bold xl:text-5xl mt-9 xl:mt-0 pt-0 sm:pt-5 md:pt-0">
                      Korak 3
                    </h2>
                    <h3 className="text-[18px] md:text-lg lg:text-xl font-semibold mb-3 mt-3">
                      Još samo odredi na koju adresu želiš da dostavimo.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center rounded-lg md:pl-4 lg:ml-0">
            <div className="pt-16 mb-14 w-[90%] sm:w-[70%] md:w-[680px] lg:w-[800px] xl:w-[987px] 2xl:w-[1000px]">
              <div className="flex justify-center items-center bs rounded-lg">
                <div className="lg:block w-[100px] p-[25px]">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Zvr"
                    src={Zvr}
                    width="40px"
                    height="38px"
                  />
                </div>

                <div className="flex xl:flex-row flex-col text-center ">
                  <div className="text-left">
                    <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold lg:mt-0 pr-[15px] md:pb-0">
                      <span className="text-xl sm:text-2xl text-[#FF553E] font-bold mr-3 lg:text-3xl">
                        Zvrrr -
                      </span>
                      kad poštar zazvoni, preuzmi paket, otvori ga i okači svom
                      ljubimcu njegov novi Pet ID tag, siguran način da se vrati
                      kući ako se slučajno izgubi!
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <p className="text-black text-[18px] font-semibold pb-0 sm:pb-0 text-center mt-8">
                Takođe, porudžbinu možete izvršiti i telefonom ako vam je
                lakše!!!
              </p>
              <div className="flex items-center justify-center flex-col">
                <p className="text-center text-black text-md md:text-lg lg:text-xl font-semibold pt-3 lg:mt-0   align-sub">
                  Pozovite na
                </p>
                <span className="text-2xl min-[412px]:text-4xl sm:text-5xl text-[#3bc77e] font-bold mr-2 lg:text-3xl pl-1 align-sub">
                  060/60-12-199
                </span>

                <p className="pb-12 sm:pb-9 md:pb-0 text-center text-[18px]">
                  i ostavite sve potrebne podatke.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-full lg:w-[50%] px-6 sm:px-0 flex flex-col m-auto justify-center items-center">
            <h2 className="text-[#3BC77E] text-3xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold md:text-left sm:mt-0 mt-6">
              Prednosti QR KODA
            </h2>
            <div className="flex flex-col justify-center items-center bs rounded-lg my-8 w-[90%] min-[828px]:w-[800px]">
              <div className="p-6">
                <div className="flex items-center lg:mb-8 lg:mt-3 xl:mb-0">
                  <img className="pr-5" src={Sapica} alt="Vektor" />
                  <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                    Koristi kameru koju svaki telefon ima
                  </p>
                </div>
                <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                  <img className="pr-5" src={Sapica} alt="Vektor" />
                  <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                    Napravljen od prirodnog materijala - malih dimenzija, mekan,
                    ima 3 oblika i mnoštvo kombinacija boja
                  </p>
                </div>
                <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                  <img className="pr-5" src={Sapica} alt="Vektor" />
                  <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                    Ne mora da se prilazi blizu, može da se skenira sa izvesne
                    udaljenosti, nema čip i ne zrači
                  </p>
                </div>
                <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                  <img className="pr-5" src={Sapica} alt="Vektor" />
                  <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                    Prilikom skeniranja vide se samo podaci koje ste vi stavili
                  </p>
                </div>
                <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                  <img className="pr-5" src={Sapica} alt="Vektor" />
                  <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                    Ne može vam neko zloupotrebiti karticu ili podatke ukoliko
                    nemate lozinku kao prilikom korišćenja NFC tehnologije
                  </p>
                </div>
                <div className="pt-6 flex items-center lg:mb-8 xl:mb-0">
                  <img className="pr-5" src={Sapica} alt="Vektor" />
                  <p className="text-black text-[18px] md:text-lg lg:text-xl font-semibold">
                    Već iz daljine se vidi QR kod i pronalazač odmah može
                    pretpostaviti čemu služi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4
          onClick={() => setShowModal(true)}
          className="pt-8 font-bold text-xl md:text-xl lg:text-3xl text-center text-[#fff] bg-[#3BC77E] pb-8 border-[2px] border-dashed border-lightgray-500 cursor-pointer"
        >
          Možeš pogledati kako izgleda stranica Pet ID taga online{" "}
          <span className="text-[#dd4733] border-b-[3px] border-[#dd4733]">
            OVDE
          </span>{" "}
          :
        </h4>
        {/* Odgovori na pitanja */}
        <div
          className="flex flex-col-reverse sm:flex-row sm:pt-3 md:pt-20 items-center text-center sm:text-left "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="w-full lg:w-[80%] xl:w-[80%] lg:pl-16 px-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Odgovaramo na pitanja
            </h1>
            <h4 className="pt-8 font-bold text-xl md:text-xl lg:text-3xl">
              Zar mi čip nije dovoljan?! Ne, jer osoba koja pronađe tvog psa ili
              mačku možda:
            </h4>
            <div className="pt-12 flex items-center text-left pl-[10%] pr-6 sm:pr-0 sm:pl-0">
              <p className="text-black text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold">
                • nema vremena da ode do veterinara da očita čip,
                <br />• nema auto i način da ode do veterinara da očita čip,
                <br />• nema veterinara u blizini mesta pronalaska,
                <br />• ne zna da li pas ili mačka imaju čip, pa mu/joj se ne
                ide džabe do veterinara,
                <br />• plaši se da vašeg ljubimca transportuje jer ne zna da li
                voli da se vozi,
                <br />• nema adekvatan transporter, pa se plaši da mu/joj ne
                pobegne
              </p>
            </div>
            <div className="px-6 flex justify-center xl:justify-start xl:px-3">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E]">
                <Link to="/proizvodi">
                  <h2 className="text-[1.75rem]">Poruči Pet ID tag</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:block flex justify-end px-0 mx-0 lg:ml-12 xl:ml-0">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="SrceRo"
              src={MackaUpitnik}
              className="lg:w-[600px]"
            />
          </div>
        </div>

        {/* Poklanjamo */}
        <div className="flex justify-center sm:pt-12 md:pt-8 lg:pt-44 w-full pb-16 sm:flex-row flex-col items-center crvenaPozadina mt-8 pt-6 sm:mt-6">
          <div className="m-auto w-full lg:w-[50%] lg:flex lg:justify-center">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="SrceRo"
              src={Gift}
            />
          </div>
          <div className="w-full lg:w-[70%] px-1 sm:px-9 md:px-6 lg:px-16">
            <h2 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pb-8 text-center sm:text-left sm:pt-24 md:pt-32 lg:pt-0">
              Poklanjamo u tvoje ime
            </h2>
            <p className="font-semibold text-white text-[19px] sm:text-md md:text-lg lg:text-xl px-5 sm:px-0">
              Od svakog Pet ID taga 100 din se uplaćuje na račun Udruženja za
              zaštitnu životinja jer im je finansijska pomoć prekopotrebna da
              nahrane, leče i udome životinje koje nisu baš imale sreće u
              životu.. <br />
              <br />
              Budi i ti deo ove humanitarne akcije, jer to je najmanje što svi
              zajedno možemo da uradimo!
            </p>
            <div className="px-8 flex justify-center sm:justify-start sm:px-0">
              <div className="flex items-center justify-center text-white bg-white w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E] text-center">
                <Link to="/proizvodi">
                  <h2 className="text-[1.75rem] text-[#FF553E]">
                    Poruči Pet ID tag
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Poruci */}
        <div
          className=" pb-24 flex sm:pt-3 pt-12 md:pt-6 lg:pt-32 items-center text-center sm:text-left md:flex-row flex-col-reverse"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="flex justify-center items-center">
            <div className="xl:pl-32 w-full px-6 sm:px-6 md:px-6 lg:px-16">
              <h2 className="text-[#FF553E] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Poruči Pet ID kao poklon
              </h2>
              <p className="pt-8 text-md md:text-lg lg:text-xl text-black font-semibold">
                U nekoliko koraka Pet ID tag će biti na kućnom pragu tvoje drage
                osobe i njegovog ili njenog čupavog prijatelja.
              </p>
              <p className="pt-8 text-md md:text-lg lg:text-xl text-black font-semibold text-left">
                Tvoja draga osoba možda i ne razmišlja o tome da joj ljubimac
                može nestati, i zato je Pet ID tag savršen poklon koji znači
                brigu za bezbedan povratak kući.
              </p>
              <div className="px-3 sm:px-0 flex justify-center sm:justify-start xl:px-0">
                <div className="flex items-center justify-center text-white bg-[#3BC77E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#FF553E]">
                  <Link to="/proizvodi">
                    <h2 className="text-[1.75rem]">Poruči Pet ID tag</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full hidden sm:block pr-7 pl-1">
              <div className="flex md:justify-center">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="SrceRo"
                  src={Poruci}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold flex items-center">
                      Boby online{" "}
                      <span className="pl-2 text-[#ff0000]">
                        <FaHeart size={20} />
                      </span>
                      <span className="pl-2 text-[#ff0000]">
                        <FaHeart size={20} />
                      </span>
                      <span className="pl-2 text-[#ff0000]">
                        <FaHeart size={20} />
                      </span>
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-col min-[450px]:flex-row">
                    <div className="w-full sm:block pr-7 pl-1">
                      <div className="flex md:justify-center">
                        <LazyLoadImage
                          effect="blur"
                          loading="lazy"
                          decoding="async"
                          alt="Mobile"
                          src={Mobile}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:block pr-7 pl-1">
                      <div className="flex md:justify-center">
                        <LazyLoadImage
                          effect="blur"
                          loading="lazy"
                          decoding="async"
                          alt="Boby_O"
                          src={Boby}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        {/* Garancija */}
        <div
          className="flex justify-center 2xl:pb-6"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "100%",
          }}
        >
          <LazyLoadImage
            effect="blur"
            alt="Pet"
            src={PetXL}
            className="pt-0 min-[1471px]:mt-1 min-[1638px]:pt-3 min-[1638px]:pt-6 m-auto px-6 xl:px-0"
          />
        </div>

        <div
          className="w-full sm:pt-8 sm:pb-32 text-center sm:text-left"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="flex justify-center flex-col sm:flex-row pt-10">
            <div className="sm:w-full lg:w-[50%] px-6 sm:px-0 flex m-auto justify-center">
              <LazyLoadImage
                effect="blur"
                loading="lazy"
                decoding="async"
                alt="SrceRo"
                src={Cezar}
                className="m-auto"
              />
            </div>

            <div className="w-full lg:w-[70%] lg:pr-20 2xl:pr-[190px]">
              <div className="px-6">
                <h2 className="text-[#FF553E] text-3xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold md:text-left sm:mt-0 mt-6">
                  100% garancija na zadovoljstvo!
                </h2>
                <p className="pt-8 text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold text-black text-left">
                  Toliko smo sigurni u kvalitet i pouzdanost našeg Pet ID taga,
                  da vam garantujemo povraćaj novca u celokupnom iznosu i to bez
                  ikakvih pitanja prilikom zahteva za povrat u roku od 30 dana!
                </p>
                <p className="pt-8 text-[18px] sm:text-md md:text-lg lg:text-xl font-semibold text-black text-left">
                  Specijalno dizajniran materijal na bazi silikonske gume,
                  netoksične boje, apsolutna sigurnost kopči, bezbednost
                  podataka na najmodernijim serverima, enkriptovana razmena
                  podataka i novčanih transakcija, da navedemo samo neke od
                  stvari koje predstavljaju potvrdu vrhunskog kvaliteta našeg
                  proizvoda i usluge.
                </p>
              </div>
              <div className="px-8 xl:px-5">
                <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E] mb-6">
                  <Link to="/proizvodi">
                    <h2 className="text-[1.75rem]">Poruči Pet ID tag</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
