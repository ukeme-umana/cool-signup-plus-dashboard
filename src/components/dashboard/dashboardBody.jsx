import React, { Component } from "react";
import Header from "./header";
import SideNav from "./sidenav";
import DBCard from "./dbCards";
import DashboardBar from "./dbBar";
import TheMetricCard from "./metricCard";
import DBChart from "./dbChart";

class DashboardBody extends Component {
  render() {
    return (
      <div>
        <div className="grid-container-D1">
          <Header />
          <SideNav />
          <main className="main-D1">
            <DBCard />
            {/* <div className="main-D1-header"></div> */}
            <div className="main-cards">
              <div className="card">
                {" "}
                <DashboardBar />
              </div>
              <div>
                <TheMetricCard />
              </div>
              <div className="card">
                <DBChart />
              </div>
            </div>
          </main>
          <footer className="footer-D1"></footer>
        </div>
      </div>
    );
  }
}

export default DashboardBody;
