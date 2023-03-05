import React, { useState, useEffect } from "react";

function PaginationFinal({ items, initialPage, onChangePage }) {
  const [pager, setPager] = useState({});

  useEffect(() => {
    if (items && items.length) {
      setPage(initialPage);
    }
  }, [items, initialPage]);

  const setPage = (page) => {
    let pager = {};
    const totalItems = items.length;
    const pageSize = 9;
    const maxPagesToDisplay = 10;
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;

    if (page < 1 || page > totalPages) {
      return;
    }

    if (totalPages <= maxPagesToDisplay) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfwayPoint = Math.ceil(maxPagesToDisplay / 2);
      const pastHalfwayPoint = Math.floor(maxPagesToDisplay / 2) + 1;
      const beforeHalfwayPoint = halfwayPoint - 1;

      if (page <= pastHalfwayPoint) {
        startPage = 1;
        endPage = maxPagesToDisplay;
      } else if (page + beforeHalfwayPoint >= totalPages) {
        startPage = totalPages - (maxPagesToDisplay - 1);
        endPage = totalPages;
      } else {
        startPage = page - halfwayPoint;
        endPage = page + beforeHalfwayPoint;
      }
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    const pages = [...Array(endPage - startPage + 1).keys()].map(
      (i) => startPage + i
    );

    pager = {
      totalItems: totalItems,
      currentPage: page,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };

    setPager(pager);
    onChangePage(items.slice(startIndex, endIndex + 1));
  };

  if (!pager.pages || pager.pages.length <= 1) {
    return null;
  }

  return (
    <ul className="pagination paginate-ctn">
      <li
        className={`{pager.currentPage === 1 ? "disabled" : ""} round-effect`}
      >
        <a onClick={() => setPage(1)}>First</a>
      </li>
      <li
        className={`{pager.currentPage === 1 ? "disabled" : ""} round-effect`}
      >
        <a onClick={() => setPage(pager.currentPage - 1)}>Prev</a>
      </li>
      {pager.pages.map((page, index) => (
        <li
          key={index}
          className={`{pager.currentPage === page ? "active" : ""} round-effect`}
        >
          <a onClick={() => setPage(page)}>{page}</a>
        </li>
      ))}
      <li
        className={`{pager.currentPage === pager.totalPages ? "disabled" : ""} round-effect`}
      >
        <a onClick={() => setPage(pager.currentPage + 1)}>Next</a>
      </li>
      <li
        className={`{pager.currentPage === pager.totalPages ? "disabled" : ""} round-effect`}
      >
        <a onClick={() => setPage(pager.totalPages)}>Last</a>
      </li>
    </ul>
  );
}

export default PaginationFinal;
