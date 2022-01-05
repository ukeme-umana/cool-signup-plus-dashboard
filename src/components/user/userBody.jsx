import React, { Component } from "react";
import Header from "../dashboard/header";
import SideNav from "../dashboard/sidenav";
import EditableTable from "../../views/editableTable";

class UserBody extends Component {
  render() {
    return (
      <div>
        <div className="grid-container-D1">
          <Header />
          <SideNav />
          <main className="main-D1">
            <div className="main-D1-header">
              <h3 className="blue-bold-h3">Welcome Back!</h3>
            </div>
            <EditableTable />
          </main>
        </div>
      </div>
    );
  }
}

export default UserBody;
