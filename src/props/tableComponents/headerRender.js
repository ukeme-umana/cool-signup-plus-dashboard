import React from "react";

export default function TableHeaders({ headerDataToBeRendered, className }) {
  const headers = headerDataToBeRendered.map(header => {
    return (
      <th key={header.id} className="table-header-sty">
        {header.headerName}
      </th>
    );
  });

  return <>{headers}</>;
}
