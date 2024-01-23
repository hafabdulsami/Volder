import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import collection from "../../../assets/collection";
import H3 from "../../common/heading/H3";
const ProductDesc = () => {
  return (
    <Container fluid className="mt-4">
      <Row md={2} className="">
        <Col>
          <img
            src={collection.bit}
            style={{
              backgroundColor: "gray",
              height: "30rem",
              width: "100%"
            }}
          />
        </Col>
        <Col>
          <H3 text={"testing"} />
          <p style={{ wordWrap: "break-word" }}>
            mmmmmmmmmmmmmmmmmmmmmmmmmmmmm
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDesc;
