import React from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Slider from "../../common/slider/Slider";
import collection from "../../../assets/collection";
const ProductCategory = () => {
  const cardList = [
    {
      img: collection.bit,
      title: "Bit"
    },
    {
      img: collection.heatGun,
      title: "Heat Gun"
    },
    {
      img: collection.laminationGun,
      title: "Lamination Gun"
    },
    {
      img: collection.lcdSeprater,
      title: "LCD Separator"
    },
    {
      img: collection.powerSupply,
      title: "Power Supply"
    },
    {
      img: collection.solderWire,
      title: "Solder Wire"
    },
    {
      img: collection.solderingIron,
      title: "Soldering Iron"
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
