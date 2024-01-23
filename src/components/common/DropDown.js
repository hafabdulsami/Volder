import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import RadioButton from "./RadioButton";

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = eventKey => {
    setSelectedValue(prevSelectedValue => {
      // Toggle the selection when clicking on the same option again
      return prevSelectedValue === eventKey ? null : eventKey;
    });
  };

  return (
    <Dropdown
      className="px-2"
      onSelect={handleSelect}
      autoClose="outside"
    >
      <Dropdown.Toggle
        id="dropdown-custom-components"
        style={{ borderRadius: "25px" }}
      >
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">
          <RadioButton
            label="Check it"
            checked={selectedValue === "1"}
            onChange={() => handleSelect("1")}
          />
        </Dropdown.Item>
        <Dropdown.Item eventKey="2"></Dropdown.Item>
        <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
        <Dropdown.Item eventKey="4">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
