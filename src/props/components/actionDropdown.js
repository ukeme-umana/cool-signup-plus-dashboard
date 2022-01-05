import React, { useState } from "react";

import ButtonDots from "./btnDot";
import { FiEdit2, FiFile } from "react-icons/fi";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function ActionDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown direction="up" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <ButtonDots />
      </DropdownToggle>
      <DropdownMenu className="drop-menu" right>
        <DropdownItem className="menu-opt">
          <FiEdit2 className="m-2" />
          <span>Edit</span>
        </DropdownItem>

        <DropdownItem className="menu-opt">
          <FiFile className="m-2" />
          View
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ActionDropdown;
