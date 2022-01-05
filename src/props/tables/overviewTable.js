import React, { Component } from "react";

import { Table } from "reactstrap";
import TableHeaders from "../tableComponents/headerRender";
import { overviewHeaderArray } from "../tableComponents/headers";
import { overviewData } from "../tableComponents/data";
import TableSetup from "../tableComponents/row";
import { TableSimple } from "react-pagination-table";
import { TablePagination } from "react-pagination-table";

const OverviewTable = () => {
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
              headerDataToBeRendered={overviewHeaderArray}
              className="ov-hdr"
            />
          </tr>
        </thead>
        <TableSetup data={overviewData} />
      </Table> */}
      <TablePagination
        headers={overviewHeaderArray}
        data={overviewData}
        columns="_id.first_name.date.phone_number.gender.state.village.district"
        perPageItemCount={5}
        totalCount={overviewData.length}
        arrayOption={[["size", "all", " "]]}
      />
    </div>
  );
};

export default OverviewTable;
