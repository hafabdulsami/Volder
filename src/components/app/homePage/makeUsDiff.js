import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../../common/card/Cards";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import H3 from "../../common/heading/H3";
//import Button from "react-bootstrap/Button";
const makeUsDiff = () => {
  const cardData = [
    {
      img: img1,
      Title: "Customer Satisfaction",
      Description:
        "Customer satisfaction is our top priority. We strive to exceed expectations by delivering high-quality products and exceptional service."
    },
    {
      img: img2,
      Title: "Product Quality",
      Description:
        "Product quality is paramount, adhering to rigorous standards, ensuring reliability and excellence in every aspect of our offerings"
    },
    {
      img: img3,
      Title: "Competitive Pricing",
      Description:
        "We prioritize offering competitive rates without compromising quality. Your satisfaction and financial well-being matter to us."
    }
  ];

  return (
    <Container fluid>
      <H3 text={"What Make Us Different"} />
      <Row xs={1} md={3} className="g-4">
        {cardData.map((data, key) => {
          return (
            <Col key={key}>
              <Cards
                onclick={() => null}
                img={data.img}
                Title={data.Title}
                description={data.Description}
                overlay={false}
              />
            </Col>
          );
        })}
      </Row>
      {/*<div className="w-100 text-center mt-4">
        {" "}
        <Button
          variant="primary"
          style={{ borderRadius: "25px" }}
          size="lg"
        >
          Learn More
        </Button>{" "}
      </div>*/}
    </Container>
  );
};

export default makeUsDiff;
