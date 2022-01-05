import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import FarmersTable from "../tables/farmersTable";

function Farmers() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Farmers</h3>
        </div>
        <FarmersTable />
      </div>
    </div>
  );
}

export default Farmers;
