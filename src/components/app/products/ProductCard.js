import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import H3 from "../../common/heading/H3";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../../common/card/Cards";
import collection from "../../../assets/collection";
import CPagination from "../../common/CPagination";
import Flex from "../../common/Flex";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ search, params }) => {
  const Navigate = useNavigate();
  const initialProductList = [
    { id: 1, img: collection.bit, title: "Bit", category: "Bit" },
    {
      id: 2,
      img: collection.heatGun,
      title: "Heat Gun",
      category: "Heat Gun"
    },
    {
      id: 3,
      img: collection.laminationGun,
      title: "Lamination Gun",
      category: "Lamination Gun"
    },
    {
      id: 4,
      img: collection.lcdSeprater,
      title: "LCD Separator",
      category: "LCD Separator"
    },
    {
      id: 5,
      img: collection.powerSupply,
      title: "Power Supply",
      category: "Power Supply"
    },
    {
      id: 6,
      img: collection.solderWire,
      title: "Solder Wire",
      category: "Solder Wire"
    },
    {
      id: 7,
      img: collection.solderingIron,
      title: "Soldering Iron",
      category: "Soldering Iron"
    }
  ];

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [productList, setProductList] = useState(initialProductList);

  useEffect(() => {
    // Filter products based on category initially
    let filteredProducts = initialProductList;

    if (params && params.toLowerCase() !== "all") {
      filteredProducts = initialProductList.filter(product =>
        product.category.toLowerCase().includes(params.toLowerCase())
      );
    }

    if (search) {
      // Further filter based on search
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProductList(filteredProducts);
    setCurrentPage(1); // Reset currentPage when params or search change
  }, [params, search]);

  const totalPagesFiltered = Math.ceil(
    productList.length / productsPerPage
  );

  const indexOfLastFilteredProduct = currentPage * productsPerPage;
  const indexOfFirstFilteredProduct =
    indexOfLastFilteredProduct - productsPerPage;
  const currentFilteredProducts = productList.slice(
    indexOfFirstFilteredProduct,
    indexOfLastFilteredProduct
  );

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const onClick = parameter => {
    Navigate("/products/" + parameter);
  };

  return (
    <Container fluid>
      <H3 text={"Products"} />
      <Row xs={1} md={3} className="g-4">
        {currentFilteredProducts.map((product, key) => (
          <Col key={key}>
            <Cards
              img={product.img}
              overlay={false}
              Title={product.title}
              buttontext={"see more"}
              buttonStyle={{
                borderRadius: "25px",
                fontSize: "1rem"
              }}
              buttonClass={"bg-blue border-0 text-white w-100"}
              cardTitleClassname={"fs-6 fw-bold"}
              parameter={product.id}
              onclick={onClick}
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
  params: PropTypes.string
};

export default ProductCard;
