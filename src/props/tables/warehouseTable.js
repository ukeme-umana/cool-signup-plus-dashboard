import React from "react";

import { Table } from "reactstrap";
import TableHeaders from "../tableComponents/headerRender";
import { warehouseHeadersArray } from "../tableComponents/headers";

function WarehouseTable() {
  return (
    <div className="table-un">
      <Table
        striped
        hover
        className="table bg-white mt-4 shadow table-sty"
        borderless
      >
        <thead>
          <tr>
            <TableHeaders
              headerDataToBeRendered={warehouseHeadersArray}
              className="ov-hdr"
            />
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default WarehouseTable;
