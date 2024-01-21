import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="">
      <Row xs={1} md={3} className="g-6 text-black">
        <Col className="pb-3">
          <Row>
            <h4 className="p-0 fw-bold">Information</h4>
          </Row>
          <Row>lorem ipsem</Row>
          <Row>lorem ipsem</Row>
          <Row>lorem ipsem</Row>
        </Col>
        <Col className="pb-3">
          <Row>
            <h4 className="p-0 fw-bold">Collections</h4>
          </Row>
          <Row>lorem ipsem</Row>
          <Row>lorem ipsem</Row>
          <Row>lorem ipsem</Row>
        </Col>
        <Col className="pb-3">
          <Row>
            <h4 className="p-0 fw-bold">Contact Info</h4>
          </Row>
          <Row>lorem ipsem</Row>
          <Row>lorem ipsem</Row>
          <Row>lorem ipsem</Row>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col className="d-flex gap-3 justify-content-center">
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            style={{ color: "#000000" }}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="xl"
            style={{ color: "#000000" }}
          />
          <FontAwesomeIcon
            icon={faLocationDot}
            size="xl"
            style={{ color: "#000000" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
