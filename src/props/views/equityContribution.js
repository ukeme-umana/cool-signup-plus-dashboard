import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import EquityMetricCards from "../components/equityMetricCards";

function EquityContribution() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Equity Contribution</h3>
        </div>
        <EquityMetricCards />
      </div>
    </div>
  );
}

export default EquityContribution;
