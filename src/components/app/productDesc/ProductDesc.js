import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import H3 from "../../common/heading/H3";
import MainImg from "./MainImg";
import { getProductByID } from "../../../@Endpoint/getCalls";
import { useParams } from "react-router-dom";

const ProductDesc = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await getProductByID(id);
        console.log(res);
        setProduct(res.data?.product);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [id]);

  const renderSpecification = () => {
    if (!product || !product.specification) return null;

    // Split specification string by asterisk (*) and map over the resulting array
    return product.specification
      .split("**")
      .map((item, index) => <li key={index}>{item.trim()}</li>);
  };

  return (
    <Container fluid className="mt-4">
      <Row md={2} className="">
        <Col md={6}>
          {product && <MainImg img={product?.Productimages} />}{" "}
          {/* Conditional rendering */}
        </Col>
        <Col md={6}>
          <H3 text={product?.name || "Product Name"} />
          <p style={{ wordWrap: "break-word" }}>
            {product?.description || "Product Description"}
          </p>
          <H3 text={"Specifications"} />
          <ul>
            {renderSpecification()}{" "}
            {/* Render the specification list */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDesc;
