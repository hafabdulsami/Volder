import React from "react";
import collection from "../../../assets/collection";
import Cards from "../../common/card/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import H3 from "../../common/heading/H3";
const Featured = () => {
  return (
    <Container fluid className="mt-4">
      <H3 text={"Featured"} />
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Cards img={collection.img1} overlay={true} />
        </Col>
        <Col>
          <Cards img={collection.img2} overlay={true} />
        </Col>
        <Col>
          <Cards img={collection.img3} overlay={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
