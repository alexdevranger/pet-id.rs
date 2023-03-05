import React from "react";
import { FaUserAlt } from "react-icons/fa";

function UdomiDetail({
  slika,
  dan,
  mesec,
  petName,
  pol,
  starost,
  vakcinisan,
  grad,
  kontakt,
  psp,
  galery,
}) {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  return (
    <div>
      {" "}
      <div className="card2 duration-500 hover:border hover:border-[#ff543c]">
        <div className="card2-img relative border-b-4 border-[#ff543c]">
          <img src={slika} />
          <div className="date1">
            {dan}
            <br /> {mesec}
          </div>
          <div className="udomi-ime1">{petName}</div>
        </div>
        <div className="flex flex-col">
          <div className="profile__stats flex justify-around bg-[#fff] border-b-4 border-[#ff543c]">
            {pol && (
              <>
                <p className="profile__stats__title">{pol}</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
              </>
            )}
            {starost && (
              <>
                <p className="profile__stats__title">{starost}</p>
                <img
                  src="/assets/images/red-heart-icon.svg"
                  alt="heart"
                  width="13px"
                />
              </>
            )}
            {vakcinisan && (
              <p className="profile__stats__title">{vakcinisan}</p>
            )}
          </div>

          <div className="w-full flex justify-between items-center relative">
            <div className="flex flex-row">
              <div className="flex flex-col items-center">
                <div className="flex flex-row">
                  <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                    <img
                      src="/assets/images/map-icon.svg"
                      alt="heart"
                      width="13px"
                      style={{ marginRight: "10px" }}
                    />
                    {grad}
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <h5 className="profile__stats__info border border-[#d3d3d3] p-[5px] flex">
                <FaUserAlt size={20} style={{ marginRight: "10px" }} />
                {kontakt}
              </h5>
            </div>

            <div className="absolute text-[13px] smallSub">{psp}</div>
          </div>

          <div className="flex flex-row justify-evenly items-center mb-4">
            <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
              <h2 onClick={() => setShowModal1(true)}>Galerija</h2>
            </button>
            <button className="udomi-btn2 hover:bg-[#3bc77e] hover:duration-500">
              <h2 onClick={() => setShowModal2(true)}>Više...</h2>
            </button>
          </div>
        </div>
        {showModal1 ? (
          <>
            <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold flex items-center">
                      {petName}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal1(false);
                      }}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-col">
                    <div className="CSSgal">
                      {galery.map((slide, index) => (
                        <s id={`s${index + 1}`} key={`sg${index + 1}`}></s>
                      ))}
                      {/* <s id="s1"></s>
                      <s id="s2"></s>
                      <s id="s3"></s>
                      <s id="s4"></s> */}

                      <div className="slider">
                        {galery.map((slide, index) => (
                          <div
                            key={`s${index + 1}`}
                            // id={`s${index}`}
                            style={{ background: "#ffeb3b" }}
                          >
                            <img
                              src={slide}
                              className="text-ceneter m-auto"
                              alt={`s${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                      {galery.length === 4 && (
                        <>
                          <div className="prevNext">
                            <div>
                              <a href="#s4">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s2">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s1">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s3">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s2">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s4">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s3">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s1">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                      {galery.length === 3 && (
                        <>
                          <div className="prevNext">
                            <div>
                              <a href="#s3">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s2">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s1">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s3">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s2">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s1">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                      {galery.length === 2 && (
                        <>
                          <div className="prevNext">
                            <div>
                              <a href="#s2">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s2">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                            <div>
                              <a href="#s1">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s1">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                      {galery.length === 1 && (
                        <>
                          <div className="prevNext">
                            <div>
                              <a href="#s1">
                                <span className="prev-slide">&lsaquo;</span>
                              </a>
                              <a href="#s1">
                                <span className="next-slide">&rsaquo;</span>
                              </a>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="bullets">
                        {galery.map((slide, index) => (
                          <a href={`#s${index + 1}`} key={`sk${index + 1}`}>
                            {index + 1}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal1(false);
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
        {showModal2 ? (
          <>
            <div className="justify-center items-center fixed inset-0 z-50 overflow-auto outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold flex items-center">
                      Boby online{" "}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowModal2(false);
                      }}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-col">
                    <p className="text-left">
                      Cezar je vraćen i ponovo traži dom. Osoba koja ga je
                      usvojila vratila ga je jer "se ne slaže sa mačkama i
                      pernatim životinjama". Spasili smo ga sa ulice kada je
                      imao svega mesec dana, sada ima oko 5 i po meseci,
                      vakcinisan je i očišćen od parazita, veseo i mazan. Ponovo
                      tražimo dom za Cezara u kome će biti voljen, a što će on
                      mnogostruko vratiti.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal2(false);
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
    </div>
  );
}

export default UdomiDetail;
