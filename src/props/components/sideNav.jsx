import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div>
      <aside className="side-pl-div">
        <ul className="pg-nm-sty-ul">
          <li className="pg-nm-sty-li">
            <Link to="/testing-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/overview.369bde94.svg"
                alt=""
                className="icon-img"
              />
              Overview
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/farmers-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/trees.39159cf9.svg"
                alt=""
                className="icon-img"
              />
              Farmers
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/weather-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/subscription.5029ae8a.svg"
                alt=""
                className="icon-img"
              />
              Weather
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/agents-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/users-alt.41fbaa86.svg"
                alt=""
                className="icon-img"
              />
              Agents
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/farm-mapping-page" className="pg-nm-sty">
              <img src="" alt="" className="icon-img" />
              Farm Mapping
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/equity-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/subscription.5029ae8a.svg"
                alt=""
                className="icon-img"
              />
              Equity Contribution
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/warehouse-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/truck-loading.d2cd3e2e.svg"
                alt=""
                className="icon-img"
              />
              Warehouse
            </Link>
          </li>
          <li className="pg-nm-sty-li">
            <Link to="/finance-page" className="pg-nm-sty">
              <img
                src="http://thrive-aos-web.herokuapp.com/static/media/money-stack.d69cf234.svg"
                alt=""
                className="icon-img"
              />
              Finance
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideNav;
