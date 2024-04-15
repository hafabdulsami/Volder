import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./style.css";
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
  needButton,
  width,
  overlayButtonText,
  height
}) => {
  return (
    <div className="l">
      <Card
        className=""
        style={
          cardStyle || {
            borderRadius: "25px",
            borderWidth: "2px",
            borderColor: "#D9D9D9"
          }
        }
        onClick={() => (onclick ? onclick(parameter) : null)}
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
            {needButton && (
              <Button
                style={{ borderRadius: "25px", marginTop: "10rem" }}
                size="lg"
                className="opacity-75 bg-white border-0 text-black"
              >
                {overlayButtonText}
              </Button>
            )}
          </Card.ImgOverlay>
        ) : (
          <>
            <Card.Body>
              <Card.Title
                className={cardTitleClassname || "fw-bold"}
              >
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
    </div>
  );
};

Cards.propTypes = {
  img: PropTypes.string,
  Title: PropTypes.string,
  description: PropTypes.string,
  overlay: PropTypes.bool,
  needButton: PropTypes.bool,
  cardStyle: PropTypes.object,
  bulletPoint: PropTypes.array,
  buttontext: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonClass: PropTypes.string,
  overlayButtonText: PropTypes.string,
  cardTitleClassname: PropTypes.string,
  onclick: PropTypes.func,
  parameter: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Cards;
