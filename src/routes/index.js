import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CoolSignInPage from "../CoolSignUp/SignInPage/index";
import CoolSignUpPage from "../CoolSignUp/SignUpPage/index";
import DashboardLandingPage from "../components/dashboard/dashboardBody";
import EditableTable from "../views/editableTable";
import Users from "../views/users";
import Business from "../views/businessPage";
import Drivers from "../views/drivers";
import moveAbleComponent from "../views/moveAbleComponent";
import Transactions from "../views/transactions";
import Carts from "../views/carts";
import PopUp from "../views/popup";
import Testing from "../props/components/Testing";
import Agents from "../props/views/agents";
import EquityContribution from "../props/views/equityContribution";
import Farmers from "../props/views/farmers";
import FarmMapping from "../props/views/farmMapping";
import Finance from "../props/views/finance";
import Warehouse from "../props/views/warehouse";
import LoginPage from "../props/views/loginPage";
import Weather from "../props/views/weather";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/cool-signin" component={CoolSignInPage} />
        <Route path="/cool-signup" component={CoolSignUpPage} />
        <Route path="/dashboard" component={DashboardLandingPage} />
        <Route path="/table" component={EditableTable} />
        <Route path="/users" component={Users} />
        <Route path="/business" component={Business} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/carts" component={Carts} />
        <Route path="/component-moving" component={moveAbleComponent} />
        <Route path="/edit-popup" component={PopUp} />
        <Route path="/testing-page" component={Testing} />
        <Route path="/agents-page" component={Agents} />
        <Route path="/farmers-page" component={Farmers} />
        <Route path="/weather-page" component={Weather} />
        <Route path="/farm-mapping-page" component={FarmMapping} />
        <Route path="/warehouse-page" component={Warehouse} />
        <Route path="/finance-page" component={Finance} />
        <Route path="/equity-page" component={EquityContribution} />
        <Route path="/tradr-login-page" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
