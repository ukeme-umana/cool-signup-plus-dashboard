import React from "react";
import "./index.css";
import SideNav from "./sideNav";
import Header from "./header";
import MetricCards from "./metricCards";
import Card from "./card";
import OverviewTable from "../tables/overviewTable";

function Testing() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Overview</h3>
        </div>

        <MetricCards />
        <Card />
        <h2 className="txt-bfr-table">Farmers Onboarded</h2>
        <OverviewTable />
      </div>
    </div>
  );
}

export default Testing;
