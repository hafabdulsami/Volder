import React from "react";
import collection from "../../../assets/collection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../index.css";

const Category = () => {
  const imgList = [
    collection.bit,
    collection.heatGun,
    collection.laminationGun,
    collection.lcdSeprater,
    collection.powerSupply,
    collection.solderWire,
    collection.solderingIron
  ];

  return (
    <div className="w-100 my-4 overflow-auto no-scrollbar">
      <Row
        className="no-scrollbar"
        style={{ gap: "50px", width: "80rem" }}
      >
        {imgList.map((img, key) => (
          <Col key={key}>
            <img
              src={img}
              alt={`Image ${key}`}
              className="img-fluid"
              style={{ width: "80px", height: "80px" }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
