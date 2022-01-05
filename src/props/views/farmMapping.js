import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import FarmMappingTable from "../tables/farmMappingTable";

function FarmMapping() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Farm Mapping</h3>
        </div>
        <FarmMappingTable />
      </div>
    </div>
  );
}

export default FarmMapping;
