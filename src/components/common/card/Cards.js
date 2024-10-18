import React from "react";
import PropTypes from "prop-types";
import BulletPoints from "../BulletPoints";
import "./style.css";

const Cards = ({
  img,
  Title,
  description,
  overlay,
  cardStyle,
  bulletPoint,
  cardClass,
  buttontext,
  buttonStyle,
  buttonClass,
  cardTitleClassname,
  onClick,
  needButton,
  width,
  overlayButtonText,
  height
}) => {
  return (
    <div className="p-4">
      <div
        className={`relative ${cardClass || ""}`}
        style={
          cardStyle || {
            borderRadius: "25px",
            borderWidth: "2px",
            borderColor: "#D9D9D9"
          }
        }
        onClick={onClick}
      >
        <img
          className="w-full rounded-t-lg"
          style={{
            borderRadius: "25px"
          }}
          src={img}
          alt="Card"
          height={height || 240}
          width={width || 384}
        />
        {overlay ? (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {needButton && (
              <button
                className="opacity-75 bg-white text-black rounded-full py-2 px-4"
                style={{ marginTop: "10rem" }}
              >
                {overlayButtonText}
              </button>
            )}
          </div>
        ) : (
          <div className="p-4 bg-white rounded-b-lg">
            <h2
              className={cardTitleClassname || "font-bold text-xl"}
            >
              {Title}
            </h2>
            {bulletPoint && (
              <div className="my-2">
                <BulletPoints bulletPoint={bulletPoint} />
              </div>
            )}
            {buttontext && (
              <button
                className={`py-2 px-4 mt-4 ${buttonClass || ""}`}
                style={buttonStyle}
              >
                {buttontext}
              </button>
            )}
            {description && (
              <p className="mt-2 text-gray-600">{description}</p>
            )}
          </div>
        )}
      </div>
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
  cardClass: PropTypes.string,
  buttontext: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonClass: PropTypes.string,
  overlayButtonText: PropTypes.string,
  cardTitleClassname: PropTypes.string,
  onClick: PropTypes.func,
  parameter: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Cards;
