import React from "react";
import { Link } from "react-router-dom";
import HvalaSlika from "../assets/hvala.png";
import { useNavigate, useLocation } from "react-router-dom";

const Hvala = (props) => {
  let location = useLocation();
  console.log(location);
  console.log(location.state);
  return (
    <div className="bg-white">
      <div className="text-center mt-28">
        <h1 className="text-4xl font-bold text-[#3BC77E]">
          Hvala Vam na poverenju!
        </h1>
        <h2 className="text-3xl mt-2">Vasa porudzbina je prihvacena</h2>
        <p className="text-xl mt-7">
          Broj vaše porudžbine je <b>{location.state}</b> <br></br> Pet ID će
          vam biti poslat u roku od 48 sati.{" "}
        </p>
        <div className="flex justify-center">
          <img src={HvalaSlika}></img>
        </div>
        <Link to="/shop">
          <div className="w-full flex justify-center">
            <div className="flex items-center justify-center text-white bg-[#3BC77E] hover:bg-[#FF553E] w-[321px] h-[64px] rounded-lg mt-16">
              <h2 className="text-xl">Naruci opet kao poklon prijatelju</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hvala;
