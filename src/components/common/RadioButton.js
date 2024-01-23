import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const RadioButton = ({ label, checked, onChange }) => {
  return (
    <Form.Check
      type="radio"
      label={label}
      checked={checked}
      onChange={onChange}
    />
  );
};
RadioButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default RadioButton;
