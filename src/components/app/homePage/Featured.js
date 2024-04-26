import React from "react";
import Cards from "../../common/card/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import H3 from "../../common/heading/H3";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Featured = ({ featuredProducts }) => {
  // Calculate the number of items in the last row
  const itemsInLastRow = featuredProducts.length % 3;
  const navigate = useNavigate();
  const onClick = parameter => {
    navigate("/product/" + parameter.id);
  };
  return (
    <Container fluid className="mt-4">
      <H3 text={"Featured"} />
      <Row xs={1} md={3} className="g-4">
        {/* Render the first three products */}
        {featuredProducts
          .slice(0, -itemsInLastRow)
          .map((item, key) => (
            <Col key={key}>
              <Cards
                cardClass={"p-2"}
                onClick={() => {
                  onClick(item);
                }}
                img={item?.Productimages[0]?.preview || null}
                overlay={true}
                needButton={true}
                overlayButtonText={"Learn Me"}
              />
            </Col>
          ))}
      </Row>
      {/* Conditionally render the centered row if there is space in the last row */}
      {itemsInLastRow > 0 && (
        <Row className="justify-content-center pt-4" xs={1} md={3}>
          {featuredProducts
            .slice(-itemsInLastRow)
            .map((item, key) => (
              <Col key={key}>
                <Cards
                  cardClass={"p-2"}
                  img={item?.Productimages[0]?.preview || null}
                  overlay={true}
                  onClick={() => {
                    onClick(item);
                  }}
                  needButton={true}
                  overlayButtonText={"Learn Me"}
                />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

Featured.propTypes = {
  featuredProducts: PropTypes.array
};

export default Featured;
