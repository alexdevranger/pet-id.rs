import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/bg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingPlaceHolder, { containerStyles } from "./LoadingPlaceHolder";
import Bone from "../assets/bone.png";
import Boby from "../assets/galerija/bobi_optimized.webp";
import Cezar from "../assets/galerija/cezar_optimized.webp";
import Djina from "../assets/galerija/Djina_optimized.webp";
import Riki from "../assets/galerija/Riki_optimized.webp";
import Pablo from "../assets/galerija/pablo_optimized.webp";
import Elisa from "../assets/galerija/Elisa_optimized.webp";
import Billy from "../assets/galerija/Billy_optimized.webp";
import Indi from "../assets/galerija/indi_optimized.webp";
import Keks from "../assets/galerija/keks_optimized.webp";
import Gara from "../assets/galerija/gara_optimized.webp";
import Kim from "../assets/galerija/kim_optimized.webp";
import Kurdo from "../assets/galerija/kurdo_optimized.webp";
import Luna from "../assets/galerija/luna_optimized.webp";
import Maks from "../assets/galerija/maks_optimized.webp";
import Meda from "../assets/galerija/meda_optimized.webp";
import Miro from "../assets/galerija/miro_optimized.webp";
import Moli from "../assets/galerija/Moli.webp";
import Nina from "../assets/galerija/nina_optimized.webp";
import Oto from "../assets/galerija/Oto_optimized.webp";
import Persi from "../assets/galerija/persi_optimized.webp";
import Arci from "../assets/galerija/arci_optimized.webp";
import Beti from "../assets/galerija/beti_optimized.webp";
import Rada from "../assets/galerija/Rada_optimized.webp";
import Zizi from "../assets/galerija/zizi_optimized.webp";
import Gea from "../assets/galerija/gea_optimized.webp";
import Pepito from "../assets/galerija/pepito_optimized.webp";
import Zoi from "../assets/galerija/zoi_optimized.webp";
import Franc from "../assets/galerija/franc_optimized.webp";

function Galerija() {
  const [loaded, setLoaded] = useState(false);
  let imageLoadNum = 0;
  const stuffLoaded = () => {
    imageLoadNum++;
    if (imageLoadNum < 2) return;
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  };
  return (
    <div
      className="text-gray-700 body-font relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container pt-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold pb-8 mt-12 sm:mt-0 text-center text-[#FF553E]">
            Galerija Srećnih Ljubimaca
          </h1>
          <div className="flex justify-center">
            <img src={Bone} alt="bone" className="hidden floating sm:block" />
            <p className="pt-6 font-bold text-xl sm:text-xl md:text-xl lg:text-xl text-center">
              Ovo su naši ponosni članovi
            </p>
            <img src={Bone} alt="bone" className="hidden floating sm:block" />
          </div>
        </div>
        {/* <div className="card snip1426">
          <div style={containerStyles}>
            {!loaded && (
              <LoadingPlaceHolder
                extraStyles={{ height: "100%", top: "0", left: "0" }}
                container
              />
            )}
            <LazyLoadImage
              src={Boby}
              alt="Boby"
              className="cardHeaderImg"
              onLoad={stuffLoaded}
            />
            <figcaption>
              <div>
                <h4>BOBY</h4>
              </div>
            </figcaption>
          </div>
        </div> */}
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Zoi}
            loading="lazy"
            decoding="async"
            alt="Zoi"
          />
          <figcaption>
            <div>
              <h4>Zoi</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Gara}
            loading="lazy"
            decoding="async"
            alt="Gara"
          />
          <figcaption>
            <div>
              <h4>Gara</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Franc}
            loading="lazy"
            decoding="async"
            alt="Franc"
          />
          <figcaption>
            <div>
              <h4>Franc</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Zizi}
            loading="lazy"
            decoding="async"
            alt="Zizi"
          />
          <figcaption>
            <div>
              <h4>Zizi</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Luna}
            loading="lazy"
            decoding="async"
            alt="Luna"
          />
          <figcaption>
            <div>
              <h4>Luna</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Boby}
            loading="lazy"
            decoding="async"
            alt="Boby"
          />
          <figcaption>
            <div>
              <h4>Boby</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Kim}
            loading="lazy"
            decoding="async"
            alt="Kim"
          />
          <figcaption>
            <div>
              <h4>Kim</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Persi}
            loading="lazy"
            decoding="async"
            alt="Persi"
          />
          <figcaption>
            <div>
              <h4>Persi</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Oto}
            loading="lazy"
            decoding="async"
            alt="Oto"
          />
          <figcaption>
            <div>
              <h4>Oto</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Cezar}
            loading="lazy"
            decoding="async"
            alt="Cezar"
          />
          <figcaption>
            <div>
              <h4>Cezar</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Riki}
            loading="lazy"
            decoding="async"
            alt="Riki"
          />
          <figcaption>
            <div>
              <h4>Riki</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Nina}
            loading="lazy"
            decoding="async"
            alt="Nina"
          />
          <figcaption>
            <div>
              <h4>Nina</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Pablo}
            loading="lazy"
            decoding="async"
            alt="Pablo"
          />
          <figcaption>
            <div>
              <h4>Pablo</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Maks}
            loading="lazy"
            decoding="async"
            alt="Maks"
          />
          <figcaption>
            <div>
              <h4>Maks</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Meda}
            loading="lazy"
            decoding="async"
            alt="Meda"
          />
          <figcaption>
            <div>
              <h4>Meda</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Djina}
            loading="lazy"
            decoding="async"
            alt="Djina"
          />
          <figcaption>
            <div>
              <h4>Đina</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Beti}
            loading="lazy"
            decoding="async"
            alt="Beti"
          />
          <figcaption>
            <div>
              <h4>Beti</h4>
            </div>
          </figcaption>
        </figure>

        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Keks}
            loading="lazy"
            decoding="async"
            alt="Keks"
          />
          <figcaption>
            <div>
              <h4>Keks</h4>
            </div>
          </figcaption>
        </figure>

        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Miro}
            loading="lazy"
            decoding="async"
            alt="Miro"
          />
          <figcaption>
            <div>
              <h4>Miro</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Kurdo}
            loading="lazy"
            decoding="async"
            alt="Kurdo"
          />
          <figcaption>
            <div>
              <h4>Kurdo</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Moli}
            loading="lazy"
            decoding="async"
            alt="Moli"
          />
          <figcaption>
            <div>
              <h4>Moli</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Elisa}
            loading="lazy"
            decoding="async"
            alt="Elisa"
          />
          <figcaption>
            <div>
              <h4>Elisa</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Billy}
            loading="lazy"
            decoding="async"
            alt="Billy"
          />
          <figcaption>
            <div>
              <h4>Billy</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Arci}
            loading="lazy"
            decoding="async"
            alt="Arci"
          />
          <figcaption>
            <div>
              <h4>Arči</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Rada}
            loading="lazy"
            decoding="async"
            alt="Rada"
          />
          <figcaption>
            <div>
              <h4>Rada</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Indi}
            loading="lazy"
            decoding="async"
            alt="Indi"
          />
          <figcaption>
            <div>
              <h4>Indi</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Pepito}
            loading="lazy"
            decoding="async"
            alt="Pepito"
          />
          <figcaption>
            <div>
              <h4>Pepito</h4>
            </div>
          </figcaption>
        </figure>
        <figure className="snip1426">
          <LazyLoadImage
            effect="blur"
            src={Gea}
            loading="lazy"
            decoding="async"
            alt="Gea"
          />
          <figcaption>
            <div>
              <h4>Gea</h4>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Galerija;
