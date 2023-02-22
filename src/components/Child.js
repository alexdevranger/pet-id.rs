import React from "react";
import Grandchild from "./Grandchild";

const Child = ({ onClick }) => {
  return (
    <div>
      <h2>Child component</h2>
      <Grandchild onClick={onClick} />
    </div>
  );
};

export default Child;
