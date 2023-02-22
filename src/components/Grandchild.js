import React from "react";

const Grandchild = ({ onClick }) => {
  console.log(typeof onClick);
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
