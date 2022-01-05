import React from "react";

import { Table } from "reactstrap";
import TableHeaders from "../tableComponents/headerRender";
import { farmMappingHeadersArray } from "../tableComponents/headers";
import { farmMappingData } from "../tableComponents/data";
import TableSetup from "../tableComponents/row";
import { TablePagination } from "react-pagination-table";

function FarmMappingTable() {
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
              headerDataToBeRendered={farmMappingHeadersArray}
              className="ov-hdr"
            />
          </tr>
        </thead>
        <TableSetup data={farmMappingData} />
      </Table> */}
      <TablePagination
        headers={farmMappingHeadersArray}
        data={farmMappingData}
        columns="id.crop_type.date.agent.farmer.latitude.longitude.accuracy"
        perPageItemCount={5}
        totalCount={farmMappingData.length}
        arrayOption={[["size", "all", " "]]}
      />
    </div>
  );
}

export default FarmMappingTable;
