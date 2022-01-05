import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <aside className="sidenav-D1">
        <ul className="sidenav-D1-list">
          <li className="sidenav-D1-list-item-special">
            <h2 className="blue-h2">stripe</h2>
          </li>
          <li className="sidenav-D1-list-item">
            <Link to="/dashboard" className="sidenav-link">
              Dashboard
            </Link>
          </li>
          <li className="sidenav-D1-list-item">
            <Link to="/users" className="sidenav-link">
              Users
            </Link>
          </li>
          <li className="sidenav-D1-list-item">
            <Link to="/business" className="sidenav-link">
              Businesses
            </Link>
          </li>
          <li className="sidenav-D1-list-item">
            <Link to="/drivers" className="sidenav-link">
              Drivers
            </Link>
          </li>
          <li className="sidenav-D1-list-item">
            <Link to="/transactions" className="sidenav-link">
              Transactions
            </Link>
          </li>
          <li className="sidenav-D1-list-item">
            <Link to="/carts" className="sidenav-link">
              Carts
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideNav;
