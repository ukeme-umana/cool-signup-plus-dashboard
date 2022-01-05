import React from "react";
import "../components/index.css";
import SideNav from "../components/sideNav";
import Header from "../components/header";
import AgentsTable from "../tables/agentsTable";

function Agents() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body-wrapper">
        <div className="ps-h3-div">
          <h3 className="ps-h3">Agents</h3>
        </div>
        <AgentsTable />
      </div>
    </div>
  );
}

export default Agents;
