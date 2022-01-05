import React, { Component } from "react";
import { fontSize } from "@material-ui/system";

function Stats(props) {
  return <span className="stats-class">{props.figure}</span>;
}

class DBCard extends Component {
  render() {
    return (
      <div>
        <h3 className="blue-bold-h3">Analytics Overview</h3>
        <div className="main-overview">
          <div className="overviewcard">
            <div className="circle-styled"></div>
            <div className="overviewcard-icon">
              <span className="stat-name">Reach</span>
              <Stats figure="600k +" />
            </div>
          </div>
          <div className="overviewcard">
            <div className="circle-styled"></div>
            <div className="overviewcard-icon">
              <span className="stat-name">Engagements</span>
              <Stats figure="200,000" />
            </div>
          </div>
          <div className="overviewcard">
            <div className="circle-styled"></div>
            <div className="overviewcard-icon">
              <span className="stat-name">Impressions</span>
              <Stats figure="40,000 daily" />
            </div>
          </div>
          <div className="overviewcard">
            <div className="circle-styled"></div>
            <div className="overviewcard-icon">
              <span className="stat-name">Conversion</span>
              <Stats figure="82,350 talks" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DBCard;
