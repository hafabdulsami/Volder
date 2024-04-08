import React from "react";
//import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import { Carousel } from "react-responsive-carousel";
//import Carouselsitem from "./Carouselsitem";
import mm from "./mm.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carousels = () => {
  var imgList = [mm, img1, img3, img2];
  return (
    <div className="mt-2" style={{ width: "100%" }}>
      <Carousel
        showArrows={true}
        showStatus={false}
        interval={3000}
        dynamicHeight={true}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {imgList.map((img, key) => (
          <div key={key}>
            <img
              src={img}
              style={{
                borderRadius: "25px",
                maxHeight: "30rem"
              }}
              alt={`Image ${key + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
