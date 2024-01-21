import React from "react";
import PropTypes from "prop-types";
const H3 = ({ text }) => {
  return (
    <div>
      <h3 className=" fw-bold my-4">{text}</h3>
    </div>
  );
};

H3.propTypes = {
  text: PropTypes.string
};

export default H3;
