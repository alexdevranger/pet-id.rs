import React, { useState } from "react";
import PaginationFinal from "./PaginationFinal";

// const propTypes = {
//   items: React.PropTypes.array.isRequired,
//   onChangePage: React.PropTypes.func.isRequired,
//   initialPage: React.PropTypes.number,
// };

// const defaultProps = {
//   initialPage: 1,
// };

function PaginationPage() {
  const [exampleItems, setExampleItems] = useState(
    [...Array(55).keys()].map((i) => ({
      id: i + 1,
      name: "Item " + (i + 1),
      anotherProperty: "Just another value for testing display",
    }))
  );
  const [filteredItems, setFilteredItems] = useState(exampleItems);
  const [pageOfItems, setPageOfItems] = useState([]);

  const onChangePage = (pageOfItems) => {
    setPageOfItems(pageOfItems);
  };

  const handleFilter = (e) => {
    const inputValue = e.currentTarget.value.toString().toLowerCase();
    const newFilteredItems = exampleItems.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );

    if (newFilteredItems.length === 0) {
      newFilteredItems.push({ id: 0, name: "" });
    }
    setFilteredItems(newFilteredItems);
  };

  let noResultsMessage =
    filteredItems[0].id === 0 ? <div>No results found!</div> : "";

  let tableDisplay = filteredItems[0].id === 0 ? "hidden" : "";
  return (
    <div>
      <div className="container">
        <div className="text-center flex-container">
          <h1>React - Pagination Example with logic like Google</h1>

          <input
            type="text"
            placeholder="Filter items"
            onInput={handleFilter}
          />

          <div className={`table ${tableDisplay}`}>
            <div className="row row--heading">
              <div className="item__id">ID</div>
              <div className="item__name">Name</div>
              <div className="item__description">Description</div>
            </div>

            {pageOfItems.map((item) => (
              <div key={item.id} className={`item--${item.id} row`}>
                <div className="item__id">{item.id}</div>
                <div className="item__name">{item.name}</div>
                <div className="item__description">{item.anotherProperty}</div>
              </div>
            ))}
          </div>

          {noResultsMessage}

          <PaginationFinal
            items={filteredItems}
            initialPage="1"
            onChangePage={onChangePage}
          />
        </div>
      </div>
    </div>
  );
}

export default PaginationPage;
