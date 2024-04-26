import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../../common/card/Cards";
import CPagination from "../../common/CPagination";
import Flex from "../../common/Flex";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ search, params, productList }) => {
  const Navigate = useNavigate();

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProductList] = useState(productList);

  useEffect(() => {
    // Filter products based on category initially
    let filteredProducts = productList;

    if (params && params.toLowerCase() !== "all") {
      filteredProducts = productList.filter(product =>
        product.categoryId
          .toLowerCase()
          .includes(params.toLowerCase())
      );
    }

    if (search) {
      // Further filter based on search
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProductList(filteredProducts);
    setCurrentPage(1); // Reset currentPage when params or search change
  }, [params, search]);

  const totalPagesFiltered = Math.ceil(
    products.length / productsPerPage
  );

  const indexOfLastFilteredProduct = currentPage * productsPerPage;
  const indexOfFirstFilteredProduct =
    indexOfLastFilteredProduct - productsPerPage;
  const currentFilteredProducts = products.slice(
    indexOfFirstFilteredProduct,
    indexOfLastFilteredProduct
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const onClick = parameter => {
    Navigate("/product/" + parameter);
  };

  return (
    <Container fluid>
      <H3 text={"Products"} />
      <Row xs={1} md={3} className="g-4">
        {currentFilteredProducts.map((product, key) => (
          <Col key={key}>
            <Cards
              cardClass={"p-2"}
              img={product.Productimages[0].preview}
              overlay={false}
              Title={product.name}
              buttontext={"see more"}
              buttonStyle={{
                borderRadius: "25px",
                fontSize: "1rem"
              }}
              onClick={() => {
                onClick(product.id);
              }}
              buttonClass={"bg-blue border-0 text-white w-100"}
              cardTitleClassname={"fs-6 fw-bold"}
              parameter={product.id}
            />
          </Col>
        ))}
      </Row>
      <Flex justifyContent={"center"} className={"mt-4"}>
        <CPagination
          totalPages={totalPagesFiltered}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Container>
  );
};

ProductCard.propTypes = {
  search: PropTypes.string,
  params: PropTypes.string,
  productList: PropTypes.array
};

export default ProductCard;
