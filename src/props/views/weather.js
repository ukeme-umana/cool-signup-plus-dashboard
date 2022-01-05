import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import WeatherTable from "../tables/weatherTable";

function Weather() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Weather</h3>
        </div>
        <WeatherTable />
      </div>
    </div>
  );
}

export default Weather;
