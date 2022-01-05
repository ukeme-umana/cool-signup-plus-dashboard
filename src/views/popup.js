import React, { Component } from "react";
import SideNav from "../components/dashboard/sidenav";

class PopUp extends Component {
  render() {
    return (
      <div className="overlay-popup">
        <div className="grid-container-D1">
          <SideNav />
          <div className="popup-wrapper">
            <div className="popup-container">
              <h4 className="red-text">
                Are you sure you want to delete this row?
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
