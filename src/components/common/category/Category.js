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
      <H3 text={"Category"} />
      <Slider
        swiperClassName={"sample-slider w-100 mt-4"}
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
          borderRadius: "25px",
          width: "80px",
          height: "80px",
          border: "none"
        }}
        loop={true}
        width={80}
        height={80}
        cardList={cardList}
      />
    </Container>
  );
};

export default ProductCategory;
