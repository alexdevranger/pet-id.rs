import React from "react";

const Grandchild = ({ onClick }) => {
  const handleClick = () => {
    onClick("hello");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Grandchild;
