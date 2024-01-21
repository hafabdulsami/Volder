import React from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Slider from "../../common/slider/Slider";
import collection from "../../../assets/collection";
import Cards from "../../common/card/Cards";
const ProductCategory = () => {
  const cardList = [
    {
      card: <Cards img={collection.img1} overlay={true} />
    },
    {
      card: <Cards img={collection.img2} overlay={true} />
    },
    {
      card: <Cards img={collection.img3} overlay={true} />
    },
    {
      card: <Cards img={collection.img2} overlay={true} />
    }
  ];
  return (
    <Container fluid>
      <H3 text={"Product Category"} />
      <Slider
        swiperClassName={"sample-slider w-100"}
        autoPlay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        style={{
          borderRadius: "25px"
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
        cardList={cardList}
      />
    </Container>
  );
};

export default ProductCategory;
