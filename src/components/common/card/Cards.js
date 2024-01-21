import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
const Cards = ({ img, Title, description, overlay }) => {
  return (
    <Card
      className=""
      style={{ borderRadius: "25px", border: "none" }}
    >
      <Card.Img
        variant="top"
        className="p-2"
        style={{
          borderRadius: "25px"
        }}
        src={img}
        height={240}
        width={384}
      />
      {overlay ? (
        <Card.ImgOverlay>
          <Button
            style={{ borderRadius: "25px", marginTop: "10rem" }}
            size="lg"
            className="opacity-75 bg-white border-0 text-black"
          >
            Learn More
          </Button>{" "}
        </Card.ImgOverlay>
      ) : (
        <>
          <Card.Body>
            <Card.Title className="fw-bold">{Title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

Cards.propTypes = {
  img: PropTypes.string,
  Title: PropTypes.string,
  description: PropTypes.string,
  overlay: PropTypes.bool
};

export default Cards;
