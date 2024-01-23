import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import BulletPoints from "../BulletPoints";
const Cards = ({
  img,
  Title,
  description,
  overlay,
  cardStyle,
  bulletPoint,
  buttontext,
  buttonStyle,
  buttonClass,
  cardTitleClassname,
  onclick,
  parameter,
  width,
  height
}) => {
  return (
    <Card
      className=""
      style={
        cardStyle || {
          borderRadius: "25px",
          border: "none",
          width: "80px",
          height: "80px"
        }
      }
      onClick={() => {
        onclick(parameter);
      }}
    >
      <Card.Img
        variant="top"
        className="p-2"
        style={{
          borderRadius: "25px"
        }}
        src={img}
        height={width || 240}
        width={height || 384}
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
            <Card.Title className={cardTitleClassname || "fw-bold"}>
              {Title}
            </Card.Title>

            {bulletPoint && (
              <Card.Text>
                <BulletPoints bulletPoint={bulletPoint} />
              </Card.Text>
            )}
            {buttontext && (
              <Button
                style={buttonStyle}
                size="lg"
                className={buttonClass}
              >
                {buttontext}
              </Button>
            )}
            {description && <Card.Text>{description}</Card.Text>}
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
  overlay: PropTypes.bool,
  cardStyle: PropTypes.object,
  bulletPoint: PropTypes.array,
  buttontext: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonClass: PropTypes.string,
  cardTitleClassname: PropTypes.string,
  onclick: PropTypes.func,
  parameter: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Cards;
