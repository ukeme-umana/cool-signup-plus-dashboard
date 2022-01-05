import React from "react";
import Charts from "./charts";
import Pie from "./pie";

function Card() {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper-sub-div">
        <div className="card-chart">
          <Charts />
        </div>
        <div className="card-pie">
          <Pie />
        </div>
      </div>
    </div>
  );
}

export default Card;
