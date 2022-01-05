import React from "react";

import { FaCircle } from "react-icons/fa";

function ButtonDots({ onClick }) {
  return (
    <span className="btn-dots" onClick={onClick}>
      <FaCircle size={4} />
      <FaCircle size={4} />
      <FaCircle size={4} />
    </span>
  );
}

export default ButtonDots;
