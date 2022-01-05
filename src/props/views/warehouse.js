import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import WarehouseBody from "../components/warehouseBody";
import WarehouseTable from "../tables/warehouseTable";

function Warehouse() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Warehouse</h3>
        </div>
        <WarehouseBody />
        <WarehouseTable />
      </div>
    </div>
  );
}

export default Warehouse;
