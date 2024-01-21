import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
//import Carouselsitem from "./Carouselsitem";

const Carousels = () => {
  var imgList = [img1, img2, img3];
  return (
    <div
      className="mt-2 carousels"
      style={{ width: "100%", height: "30rem" }}
    >
      <Carousel
        className=""
        style={{
          width: "100%"
        }}
      >
        {/*<Carouselsitem
          imgList={list}
          imgClassName={"w-100 h-40"}
          imgStyle={{
            borderRadius: "25px",
            height: "30rem"
          }}
          interval={1000}
          img3={img3}
        />*/}
        {imgList.map((img, key) => (
          <Carousel.Item key={key} interval={1000}>
            <img
              className={"w-100 h-40 carousels"}
              src={img}
              style={{
                borderRadius: "25px",
                height: "30rem"
              }}
              alt={`Image ${key + 1}`}
            />
          </Carousel.Item>
        ))}
        {/*<Carousel.Item
          interval={1000}
          style={{
            height: "40%",
            width: "100%",
            borderRadius: "25%"
          }}
        >
          <img
            className="w-100 h-100"
            src={img2}
            style={{ borderRadius: "25px" }}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={1000}
          style={{
            height: "40%",
            width: "100%",
            borderRadius: "25%"
          }}
        >
          <img
            className="d-block h-100 w-100"
            src={img3}
            style={{ borderRadius: "25px" }}
            alt="Image three"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>*/}
      </Carousel>
    </div>
  );
};

export default Carousels;
