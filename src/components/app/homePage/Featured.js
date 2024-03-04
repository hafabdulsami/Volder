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
          <Cards
            img={collection.bit}
            overlay={true}
            needButton={true}
            overlayButtonText={"Learn Me"}
          />
        </Col>
        <Col>
          <Cards
            img={collection.heatGun}
            overlay={true}
            needButton={true}
            overlayButtonText={"Learn Me"}
          />
        </Col>
        <Col>
          <Cards
            img={collection.lcdSeprater}
            overlay={true}
            needButton={true}
            overlayButtonText={"Learn Me"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
