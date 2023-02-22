import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [value, setValue] = useState("");

  const handleClick = (value) => {
    setValue(value);
  };
  console.log(typeof onClick);

  return (
    <div>
      <h1>Parent component</h1>
      <Child onClick={handleClick} />
      <p>Value: {value}</p>
    </div>
  );
};

export default Parent;
