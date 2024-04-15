import React from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Slider from "../../common/slider/Slider";
import PropTypes from "prop-types";

const ProductCategory = ({ categoryList }) => {
  return (
    <Container fluid>
      <H3 text={"Category"} />
      <Slider
        swiperClassName={"sample-slider w-100 p-2"}
        autoPlay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        style={{
          borderRadius: "25px"
        }}
        spaceBetween={10}
        speed={7000}
        breakPoints={{
          375: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          850: {
            slidesPerView: 5,
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
          border: "none"
        }}
        loop={true}
        width={80}
        height={80}
        cardList={categoryList}
      />
    </Container>
  );
};

ProductCategory.propTypes = {
  categoryList: PropTypes.array
};

export default ProductCategory;
