import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/logo.png";

const Logo = ({ width }) => {
  return (
    <div>
      <img src={logo} alt="error" width={width} />
    </div>
  );
};

Logo.propTypes = {
  width: PropTypes.number
};

export default Logo;
