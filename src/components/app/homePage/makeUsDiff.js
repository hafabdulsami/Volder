import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../../common/card/Cards";
import H3 from "../../common/heading/H3";
//import Button from "react-bootstrap/Button";
const makeUsDiff = ({ qualitiesList }) => {
  return (
    <Container fluid>
      <H3 text={"What Make Us Different"} />
      <Row xs={1} md={3} className="g-4">
        {qualitiesList.map((data, key) => {
          return (
            <Col key={key}>
              <Cards
                onclick={() => null}
                cardClass={"p-2"}
                img={data.Qualityimages[0].preview}
                Title={data.name}
                description={data.description}
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
