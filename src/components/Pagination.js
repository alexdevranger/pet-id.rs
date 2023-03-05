import React, { useState } from "react";

const Pagination = () => {
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    const prevPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    const nextPage =
      currentPage + 1 > totalPages ? totalPages : currentPage + 1;

    pages.push(
      <li key="prev">
        <a href="#" onClick={(e) => handleClick(e, prevPage)}>
          Prev
        </a>
      </li>
    );

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <a href="#" onClick={(e) => handleClick(e, i)}>
            {i}
          </a>
        </li>
      );
    }

    pages.push(
      <li key="next">
        <a href="#" onClick={(e) => handleClick(e, nextPage)}>
          Next
        </a>
      </li>
    );

    return pages;
  };

  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const slicedData = data.slice(start, end);

    return slicedData.map((item, index) => <div key={index}>{item}</div>);
  };

  return (
    <div>
      {renderData()}
      <ul className="pagination">{renderPagination()}</ul>
    </div>
  );
};

export default Pagination;
