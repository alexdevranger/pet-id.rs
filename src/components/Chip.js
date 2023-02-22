import React from "react";

const Chip = ({ label }) => (
  <input type="button" className="chip cursor-pointer" value={label} />
);

export default Chip;
