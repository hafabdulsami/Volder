import React from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Slider from "../../common/slider/Slider";
import PropTypes from "prop-types";
const ProductCategory = ({ categoryList }) => {
  return (
    <Container fluid>
      <H3 text={"Product Category"} />
      <Slider
        swiperClassName={"sample-slider w-100 py-4"}
        autoPlay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        spaceBetween={40}
        speed={7000}
        breakPoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        loop={true}
        cardList={categoryList}
      />
    </Container>
  );
};

ProductCategory.propTypes = {
  categoryList: PropTypes.array
};

export default ProductCategory;
