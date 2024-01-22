import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../../common/card/Cards";
import collection from "../../../assets/collection";
import CPagination from "../../common/CPagination";
import Flex from "../../common/Flex";

const ProductCard = () => {
  const productList = [
    { img: collection.bit, title: "Bit" },
    { img: collection.heatGun, title: "Heat Gun" },
    { img: collection.laminationGun, title: "Lamination Gun" },
    { img: collection.lcdSeprater, title: "LCD Separator" },
    { img: collection.powerSupply, title: "Power Supply" },
    { img: collection.solderWire, title: "Solder Wire" },
    { img: collection.solderingIron, title: "Soldering Iron" }
  ];
  const productsPerPage = 4;
  const totalPages = Math.ceil(productList.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container fluid>
      <H3 text={"Products"} />
      <Row xs={1} md={3} className="g-4">
        {currentProducts.map((product, key) => {
          return (
            <Col key={key}>
              <Cards
                img={product.img}
                cardStyle={{ borderRadius: "25px" }}
                overlay={false}
                Title={product.title}
                buttontext={"see more"}
                buttonStyle={{
                  borderRadius: "25px",
                  fontSize: "1rem"
                }}
                buttonClass={"bg-blue border-0 text-white w-100"}
                cardTitleClassname={"fs-6 fw-bold"}
              />
            </Col>
          );
        })}
      </Row>
      <Flex justifyContent={"center"} className={"mt-4"}>
        <CPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Container>
  );
};

export default ProductCard;
