import React from "react";

import { Table } from "reactstrap";
import TableHeaders from "../tableComponents/headerRender";
import { agentsHeaderArray } from "../tableComponents/headers";
import { agentsData } from "../tableComponents/data";
import TableSetup from "../tableComponents/row";
import { TablePagination } from "react-pagination-table";

function AgentsTable() {
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
              headerDataToBeRendered={agentsHeaderArray}
              className="ov-hdr"
            />
          </tr>
        </thead>
        <TableSetup data={agentsData} />
      </Table> */}
      <TablePagination
        headers={agentsHeaderArray}
        data={agentsData}
        columns="id.first_name.last_name.phone_number.sec_phone_number.gender.state.lga"
        perPageItemCount={5}
        totalCount={agentsData.length}
        arrayOption={[["size", "all", " "]]}
      />
    </div>
  );
}

export default AgentsTable;
