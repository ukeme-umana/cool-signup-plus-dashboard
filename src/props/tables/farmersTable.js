import React from "react";

import { Table } from "reactstrap";
import TableHeaders from "../tableComponents/headerRender";
import { farmersHeaderArray } from "../tableComponents/headers";
import { farmersData } from "../tableComponents/data";
import TableSetup from "../tableComponents/row";
import { TablePagination } from "react-pagination-table";

function FarmersTable() {
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
              headerDataToBeRendered={farmersHeaderArray}
              className="ov-hdr"
            />
          </tr>
        </thead>
        <TableSetup data={farmersData} />
      </Table> */}
      <TablePagination
        headers={farmersHeaderArray}
        className="ov-hdr"
        data={farmersData}
        columns="id.group_id.name.date"
        perPageItemCount={5}
        totalCount={farmersData.length}
        arrayOption={[["size", "all", " "]]}
      />
    </div>
  );
}

export default FarmersTable;
