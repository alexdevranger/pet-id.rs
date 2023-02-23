import React from "react";
import Chip from "./Chip";

const Grandchild = ({ onClick }) => {
  const handleClick = () => {
    onClick("hello");
  };

  return (
    <div>
      <input
        type="button"
        className="chip cursor-pointer"
        value="hello"
        onClick={handleClick}
      />
    </div>
  );
};

export default Grandchild;
