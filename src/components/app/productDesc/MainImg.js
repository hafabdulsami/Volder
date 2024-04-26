import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "../../common/slider/Slider";

import "swiper/css";

const MainImg = ({ img }) => {
  const [image, setImage] = useState(img[0]);
  console.log(img);
  const onClick = parameter => {
    setImage(parameter);
  };
  return (
    <>
      <div
        className="pb-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #e0e0e0" // Light bottom border
        }}
      >
        <img
          src={image.preview}
          style={{
            borderRadius: "25px",
            height: "20rem",
            width: "20rem"
          }}
          alt="mm"
          loading="lazy"
        />
      </div>

      <Slider
        swiperClassName={"sample-slider w-100 p-2 pt-4"}
        autoPlay={false}
        spaceBetween={10}
        breakPoints={{
          375: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          850: {
            slidesPerView: 6,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 10
          }
        }}
        cardStyle={{
          width: "80px",
          height: "80px",
          borderRadius: "25px",
          border: "none"
        }}
        loop={false}
        width={80}
        onClick={onClick}
        height={80}
        cardList={img}
      />
    </>
  );
};

MainImg.propTypes = {
  img: PropTypes.array
};

export default MainImg;
