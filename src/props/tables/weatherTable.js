import React from "react";

import { Table } from "reactstrap";
import TableHeaders from "../tableComponents/headerRender";
import { weatherHeadersArray } from "../tableComponents/headers";
import { weatherData } from "../tableComponents/data";
import TableSetup from "../tableComponents/row";
import { TablePagination } from "react-pagination-table";

function WeatherTable() {
  return (
    <div className="table-un">
      {/* <Table
        striped
        hover
        className="table bg-white mt-4 shadow table-sty"
        borderless
      >
        <thead>
          <tr>
            <TableHeaders
              headerDataToBeRendered={weatherHeadersArray}
              className="ov-hdr"
            />
          </tr>
        </thead>
        <TableSetup data={weatherData} />
      </Table> */}
      <TablePagination
        headers={weatherHeadersArray}
        data={weatherData}
        columns="state.request_forecast.status.daily_forecast.weekly_Forecast"
        perPageItemCount={5}
        totalCount={weatherData.length}
        arrayOption={[["size", "all", " "]]}
      />
    </div>
  );
}

export default WeatherTable;
