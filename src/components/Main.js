import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Pet from "../assets/girl-main.webp";
import bg from "../assets/bg.webp";
import Vektor from "../assets/Vector.png";
import Map from "../assets/map1.webp";
import Tags from "../assets/tags-image.webp";
import Sig from "../assets/sig1.webp";
import Zvr from "../assets/Zvrrr.png";
import Cezar from "../assets/garancija1.png";
import Gift from "../assets/gift.webp";
import Poruci from "../assets/poruci.webp";
import Utisci from "../assets/new-1.webp";
import MackaUpitnik from "../assets/mackaUpitnik.webp";

const Main = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        {/* Glavna */}
        <div className="flex pt-28 flex-col xl:flex-row">
          <div className="w-full lg:w-[80%] lg:pl-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center sm:text-left px-3 sm:px-6 md:px-6">
              Želiš svog ljubimca nazad ako se izgubi?
            </h1>
            <div className="px-12 sm:px-6 md:px-8">
              <h4 className="pt-8 font-bold text-xl sm:text-xl md:text-xl lg:text-3xl text-center sm:text-left">
                9 od 10 izgubljenih pasa i mačaka koji imaju Pet ID tag bude
                vraćeno svojim porodicama, i to često za manje od 24 sata!
              </h4>
            </div>
            <div className="px-3 sm:px-6 md:px-6">
              <div className="pt-12 flex items-center">
                <img className="pr-5" src={Vektor} alt="Vektor" />
                <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl font-semibold">
                  Veoma lako se uočava sa razdaljine od 10 metara, i lako se
                  očitava pomoću mobilnog koji ima svaki pronalazač.
                </p>
              </div>
              <div className="pt-6 flex items-center">
                <img className="pr-5" src={Vektor} alt="Vektor" />
                <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl font-semibold">
                  Ne smeta vašem ljubimcu kada se igra, spava ili kupa, jer je
                  mali, savitljiv i vodootporan.
                </p>
              </div>
              <div className="pt-6 flex items-center">
                <img className="pr-5" src={Vektor} alt="Vektor" />
                <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl font-semibold">
                  Specijalno dizajniran sastav materijala od koga je izrađen Pet
                  ID tag, tako da bude potpuno bezopasan i za vašeg ljubimca, i
                  za okolinu. Netoksične boje. Apsolutno sigurna kopča.
                </p>
              </div>
            </div>
            <div className="px-8 flex justify-center xl:justify-start">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E]">
                <Link to="/proizvodi">
                  <h2 className="text-3xl">Poruči Pet ID tag</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <LazyLoadImage
              effect="blur"
              alt="Pet"
              src={Pet}
              className="mt-0 xl:mt-[-100px] lg:w-full m-auto"
            />
          </div>
        </div>

        {/* Utisci */}
        <div className="flex 2xl:justify-center lg:pt-16 sm:pt-2 md:pt-86 w-full pb-16 lg:flex-row flex-col items-center flex-col-reverse">
          <div className="w-full lg:w-[50%]">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="Utisci"
              className="w-[700px] rounded-lg"
              src={Utisci}
            />
          </div>
          <div className="w-full lg:w-[50%] pr-6 xl:pr-52 sm:w-[100%] px-6">
            <h2 className="text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pb-8 mt-12 sm:mt-0 text-center sm:text-left">
              Neki od utisaka...
            </h2>
            <p className="font-semibold text-black text-sm sm:text-xl md:text-lg lg:text-xl">
              Jedan od najstrašnijih momenata u životu mi je bio kad sam se
              okrenula oko sebe i shvatila da Paka nema nigde. Preplakala sam
              popodne ali već istog dana zvao me je čovek i rekao - “Našao sam
              vašeg psa, hajde da se nađemo da vam ga vratim”.
            </p>
            <p className="font-semibold text-black text-sm sm:text-xl md:text-lg lg:text-xl">
              Moja Milica ne izlazi nigde, ona je tipična kućna maca, i ne znam
              šta joj je bilo da pobegne, ali srećom, posle užasne neprospavane
              noći sutradan je zvao dečko koji je pronašao u svom ulazu kako
              mjauče i traži pomoć. Zvao me je i nisam mogla da verujem da mi se
              moja Milica vraća u krilo. Hvala Pet ID tagu!!!!
            </p>
            <p className="pt-8 text-sm sm:text-lg md:text-2xl lg:text-xl font-semibold">
              Poseti websajt ovog urduženja za više informacija
            </p>
            <p className="text-md md:text-2xl lg:text-xl">www.nesto.com</p>
            <div className="px-3 flex justify-center xl:justify-start">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E]">
                <Link to="/proizvodi">
                  <h2 className="text-3xl">Poruči Pet ID tag</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Koraci */}
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-0">
            U 3 brza koraka do Pet ID taga
          </h1>
        </div>
        <div className="sivaPozadina">
          <div className="sivaPozadina">
            <div className="w-full justify-center flex lg:justify-center items-center">
              <div className="flex mt-2 lg:mt-12 xl:mt-52 justify-center flex-col md:flex-row text-center sm:text-left md:px-6 md:pt-8 lg:pt-0 items-flex-start">
                <div className="flex flex-col-reverse w-[250px] sm:w-[300px] md:w-[200px] lg:w-[300px] text-center">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Tags"
                    className="mx-0 md:mx-6 m-auto lg:mx-0 pr-3"
                    src={Tags}
                  />
                  <div className="w-full xl:w-[200px] lg:ml-6 mr-6">
                    <h2 className="text-[#3BC77E] text-3xl font-bold xl:text-5xl mt-9 xl:mt-0 pt-0 sm:pt-5 md:pt-0">
                      Korak 1
                    </h2>
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold mb-3 mt-3">
                      Izaberi boju i oblik priveska Pet ID za vašeg ljubimca.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col-reverse w-[250px] sm:w-[300px] md:w-[200px] lg:w-[300px] text-center md:mx-12">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Sig"
                    className="mx-6 m-auto lg:mx-0 pr-3"
                    src={Sig}
                  />
                  <div className="w-full xl:w-[200px] lg:ml-6 mr-6">
                    <h2 className="text-[#3BC77E] text-3xl font-bold xl:text-5xl mt-9 xl:mt-0 pt-0 sm:pt-5 md:pt-0">
                      Korak 2
                    </h2>
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold mb-3 mt-3">
                      Ostavi podatke kako te kontaktiramo kada ga nađemo.
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col-reverse w-[250px] sm:w-[300px] md:w-[200px] lg:w-[300px] text-center">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    decoding="async"
                    alt="Map"
                    className="mx-6 m-auto lg:mx-0 pr-3"
                    src={Map}
                  />
                  <div className="w-full xl:w-[200px] lg:ml-6 mr-6">
                    <h2 className="text-[#3BC77E] text-3xl font-bold xl:text-5xl mt-9 xl:mt-0 pt-0 sm:pt-5 md:pt-0">
                      Korak 3
                    </h2>
                    <h3 className="text-md md:text-lg lg:text-xl font-semibold mb-3 mt-3">
                      Još samo na koju adresu želiš da ti stigne Pet ID.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center rounded-lg md:ml-4 lg:ml-0">
            <div className="pt-16 mb-14 w-[90%] sm:w-[70%] md:w-[700px] lg:w-[1000px] xl:w-[987px] 2xl:w-[1000px]">
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

                <div className="flex xl:flex-row flex-col text-center sm:text-left">
                  <div className="">
                    <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl font-semibold lg:mt-0 pr-[15px] md:pb-0">
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
              <p className="text-black text-[16px] font-semibold pb-12 sm:pb-9 md:pb-0 text-center mt-8">
                Takođe, porudžbinu možete izvršiti i telefonom ako vam je
                lakše!!!
              </p>
              <p className="text-center text-black text-md md:text-lg lg:text-xl font-semibold mt-3 lg:mt-0 pb-12 sm:pb-9 md:pb-0 align-sub">
                Pozovite na
                <span className="text-4xl sm:text-5xl text-[#3bc77e] font-bold mr-2 lg:text-3xl pl-1 align-sub">
                  060/60-12-199
                </span>
                <br></br>i ostavite sve potrebne podatke.
              </p>
            </div>
          </div>
        </div>

        {/* Odgovori na pitanja */}
        <div
          className="flex sm:pt-3 md:pt-28 items-center text-center sm:text-left md:flex-row flex-col-reverse"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "repeat",
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
                <br />• plaši se da vašem ljubimca transportuje jer ne zna da li
                voli da se vozi,
                <br />• nema adekvatan transporter, pa se plaši da mu/joj ne
                pobegne
              </p>
            </div>
            <div className="px-8 flex justify-center xl:justify-start">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E]">
                <Link to="/proizvodi">
                  <h2 className="text-3xl">Poruči Pet ID tag</h2>
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
        <div className="flex justify-center sm:pt-12 md:pt-8 lg:pt-44 w-full pb-16 lg:flex-row flex-col items-center sivaPozadina mt-8 pt-6 sm:mt-6">
          <div className="w-full lg:w-[50%]">
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="SrceRo"
              src={Gift}
            />
          </div>
          <div className="w-full lg:w-[70%] px-1 sm:px-9 md:px-6 lg:px-0">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold pb-8 text-center sm:text-left">
              Poklanjamo u tvoje ime
            </h2>
            <p className="font-semibold text-black text-[19px] sm:text-md md:text-lg lg:text-xl px-5 sm:px-0">
              Od svakog Pet ID taga 100 din se uplaćuje na račun Udruženja za
              zaštitnu životinja ________ <br></br>
              jer im je finansijska pomoć prekopotrebna da nahrane, leče i udome
              životinje koje nisu <br></br>
              baš imale sreće u životu.. Budi i ti deo ove humanitarne akcije,
              jer to je najmanje što svi <br></br>
              zajedno možemo da uradimo!
            </p>
            <p className="pt-8 text-md md:text-2xl lg:text-xl font-semibold px-5 sm:px-0">
              Poseti websajt ovog urduženja za više informacija
            </p>
            <p className="text-md md:text-2xl lg:text-xl px-5 sm:px-0">
              www.nesto.com
            </p>
            <div className="px-8 flex justify-center xl:justify-start">
              <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E] text-center">
                <Link to="/proizvodi">
                  <h2 className="text-3xl">Poruči Pet ID tag</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Poruci */}
        <div
          className="sm:w-[90%] pb-24 flex sm:pt-3 pt-32 md:pt-6 lg:pt-32 items-center text-center sm:text-left md:flex-row flex-col-reverse"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "repeat",
          }}
        >
          <div className="flex justify-center">
            <div className="xl:pl-32 w-full px-6 sm:px-6 md:px-6 lg:px-16">
              <h2 className="text-[#FF553E] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Poruči Pet ID kao poklon
              </h2>
              <p className="pt-8 text-md md:text-lg lg:text-xl text-black font-semibold">
                U nekoliko koraka Pet ID tag će biti na kućnom pragu tvoje drage
                osobe i njegovog ili njenog čupavog prijatelja.
              </p>
              <p className="pt-8 text-md md:text-lg lg:text-xl text-black font-semibold">
                Tvoja draga osoba možda i ne razmišlja o tome da joj ljubimac
                može nestati, i zato je Pet ID tag savršen poklon koji znači
                brigu za bezbedan povratak kući.
              </p>
              <div className="px-3 flex justify-center xl:justify-start">
                <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E]">
                  <Link to="/proizvodi">
                    <h2 className="text-3xl">Poruči Pet ID tag</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full hidden md:block">
              <div className="flex justify-end md:justify-center lg:justify-end">
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

        {/* Garancija */}
        <div className="w-full sm:pt-32 sm:pb-32 text-center sm:text-left">
          <div className="flex justify-center flex-col sm:flex-row">
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
            <div className="w-full lg:w-[70%] 2xl:pr-[190px]">
              <div className="px-6">
                <h2 className="text-[#FF553E] text-3xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold md:text-left sm:mt-0 mt-6">
                  100% garancija na zadovoljstvo!
                </h2>
                <p className="pt-8 text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-black">
                  Toliko smo sigurni u kvalitet i pouzdanost našeg Pet ID taga,
                  da vam garantujemo povraćaj novca u celokupnom iznosu i to bez
                  ikakvih pitanja prilikom zahteva za povrat u roku od 30 dana!{" "}
                </p>
                <p className="pt-8 text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-black">
                  Specijalno dizajniran materijal, netoksične boje, apsolutna
                  sigurnost kopči, bezbednost podataka na najmodernijim
                  serverima, enkriptovana razmena podataka i novčanih
                  transakcija, da navedemo samo neke od stvari koje
                  predstavljaju potvrdu vrhunskog kvaliteta našeg proizvoda i
                  usluge.
                </p>
              </div>
              <div className="px-8">
                <div className="flex items-center justify-center text-white bg-[#FF553E] w-full sm:w-[300px] h-[64px] rounded-lg mt-16 duration-500 hover:bg-[#3BC77E] mb-6">
                  <Link to="/proizvodi">
                    <h2 className="text-3xl">Poruči Pet ID tag</h2>
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

export default Main;
