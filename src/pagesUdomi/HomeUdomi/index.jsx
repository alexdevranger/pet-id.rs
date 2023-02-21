import React, { useState } from "react";
import EmptyListUdomi from "../../components/commonUdomi/EmptyListUdomi";
import BlogListUdomi from "../../components/HomeUdomi/BlogListUdomi";
import { blogListUdomi } from "../../configUdomi/data1";
import bg from "../../assets/bg.webp";
//import Typed from 'react-typed';
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState(blogListUdomi);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="mt-20 w-full mx-auto text-center flex flex-col justify-center">
        <Typed
          className="md:text-5xl sm:text-4xl text-3xl font-bold md:pl-4 px-2"
          strings={[
            "Udomite ljubimca, osvojite najboljeg prijatelja za ceo život",
            "Dajte nekome drugome šansu za ljubav",
            "Udomi ljubav, spasavaj život",
            "Udomi i otvori svoje srce velikoj ljubavi",
            "Udomi ljubimca i postani heroj u njegovim očima",
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </div>
      <div className="m-auto text-center w-full lg:w-[80%]">
        <h2 className="text-xl sm:text-2xl px-2 md:text-3xl lg:px-32 mt-16">
          Pridružite nam se u borbi protiv napuštanja ljubimaca!
        </h2>
        <h2 className="text-md sm:text-lg px-6 md:text-xl lg:px-32 mt-16">
          Ako imate psa ili mačku kojima ne možete pružiti brigu koju zaslužuju,
          nemojte ih napuštati - pomoć je na dohvat ruke. Ako ste pronašli psa
          ili mačku na ulici, nemojte ih ostaviti tamo... Vaša odluka može
          spasiti život ovih divnih stvorenja. Ako imate psa ili mačku kojima ne
          možete pružiti ljubav i pažnju koju zaslužuju, nemojte ih ostavljati
          na ulici - pronađite im novi dom i porodicu koja će im pružiti sve što
          im je potrebno.
        </h2>
        <h2 className="text-lg md:text-xl px-3 lg:px-32 mt-16">
          Dajte svoj doprinos u spašavanju života napuštenih životinja klikom na
          dugme ispod i pružite im šansu da nađu svoj novi dom
        </h2>
      </div>
      <div className="px-1 sm:px-8 flex justify-center ">
        <div className="flex items-center justify-center text-white bg-[#3BC77E] w-[90%] lg:w-[60%] xl:w-[800px] h-[64px] rounded-lg mt-6 duration-500 hover:bg-[#FF553E]">
          <Link to="/kontakt-udomi">
            <h2 className="text-[19px] sm:text-xl md:text-2xl lg:text-2xl text-center min-[465px]:text-left">
              Doprinosi u spašavanju života napuštenih životinja
            </h2>
          </Link>
        </div>
      </div>

      {/* Blog List & Empty View */}
      <div className="pt-20">
        {!blogs.length ? <EmptyListUdomi /> : <BlogListUdomi blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;
