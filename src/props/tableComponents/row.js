import React, { Component } from "react";
import ActionDropdown from "../components/actionDropdown";

function TableSetup({ ...props }) {
  const displayRow = props.data.map(av => (
    <tr>
      {Object.values(av).map(av => (
        <td>{av}</td>
      ))}
      <td>
        <ActionDropdown />
      </td>
    </tr>
  ));

  return <tbody className="table-body-sty">{displayRow}</tbody>;
}

export default TableSetup;
