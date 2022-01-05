import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import FinanceBody from "../components/financeBody";

function Finance() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Finance</h3>
        </div>
        <FinanceBody />
      </div>
    </div>
  );
}

export default Finance;
