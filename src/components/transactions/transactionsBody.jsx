import React, { Component } from "react";
import Header from "../dashboard/header";
import SideNav from "../dashboard/sidenav";
import EditableTable from "../../views/editableTable";

class TransactionsBody extends Component {
  render() {
    return (
      <div>
        <div className="grid-container-D1">
          <Header />
          <SideNav />
          <main className="main-D1">
            <div className="main-D1-header">
              <h3 className="blue-bold-h3">Transactions</h3>
              <div className="line-div">
                <div className="line-all align-total-txt">
                  <p>Total Spent</p>
                  <i class="fa fa-money"></i>
                </div>
                <div className="line-all align-total-txt">
                  <p>Total Earnings</p>
                  <i class="fas fa-wallet"></i>
                </div>
                <div className="align-total-txt sp-line-all">
                  <p>Total Returned</p>
                  <i class="fas fa-balance-scale"></i>
                </div>
              </div>
            </div>
            <EditableTable />
          </main>
        </div>
      </div>
    );
  }
}

export default TransactionsBody;
