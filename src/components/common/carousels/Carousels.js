import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carousels = ({ heroSection }) => {
  return (
    <div className="mt-2" style={{ width: "100%" }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        interval={3000}
        dynamicHeight={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {heroSection.map((img, key) => (
          <div key={key}>
            <img
              src={img.preview}
              style={{
                borderRadius: "25px",
                maxHeight: "30rem"
              }}
              alt={`Image ${key + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

Carousels.propTypes = {
  heroSection: PropTypes.array
};

export default Carousels;
