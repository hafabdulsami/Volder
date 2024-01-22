import React from "react";
import PropTypes from "prop-types";

const BulletPoints = ({ bulletPoint }) => {
  return (
    <ul style={{ listStyleType: "circle" }}>
      {bulletPoint.map((item, key) => {
        return <li key={key}>{item}</li>;
      })}
    </ul>
  );
};

BulletPoints.propTypes = {
  bulletPoint: PropTypes.array
};

export default BulletPoints;
