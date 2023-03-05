import React, { useState, useEffect, useRef } from "react";

function Pagination1() {
  const data = [
    "roze",
    "plavo",
    "belo",
    "zeleno",
    "svetlo-zeleno",
    "svetlo-plavo",
    "tamno-roze",
    "crveno",
    "crno",
    "lila",
    "zuto",
    "roze",
    "plavo",
    "belo",
    "zeleno",
    "svetlo-zeleno",
    "svetlo-plavo",
    "tamno-roze",
    "crveno",
    "crno",
    "lila",
    "zuto",
    "crveno",
    "crno",
    "lila",
    "zuto",
    "roze",
    "plavo",
    "belo",
    "zeleno",
    "svetlo-zeleno",
    "svetlo-plavo",
    "tamno-roze",
    "crveno",
    "crno",
    "lila",
    "zuto",
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 9;
  const maxPages = Math.ceil(data.length / itemsPerPage);
  console.log(maxPages);
  let items = [];
  let leftSide = currentPage - 1;
  if (leftSide <= 0) leftSide = 1;
  console.log(leftSide);
  let rightSide = currentPage + 1;
  if (rightSide > maxPages) rightSide = maxPages;
  console.log(rightSide);
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage ? "round-effect active" : "round-effect"
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
    console.log(items);
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const slicedData = data.slice(start, end);

    return slicedData.map((item, index) => <div key={index}>{item}</div>);
  };

  return (
    <>
      <div className="flex-container">
        <div> {renderData()} </div>

        <div className="paginate-ctn">
          <div className="round-effect" onClick={prevPage}>
            {" "}
            &lsaquo;{" "}
          </div>
          {items}
          <div className="round-effect" onClick={nextPage}>
            {" "}
            &rsaquo;{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Pagination1;
