import React from "react";
import Category from "../../common/category/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form } from "react-bootstrap";
const Product = () => {
  return (
    <div>
      <Category />
      <div className="">
        <Form className="position-relative">
          <Form.Control
            type="search"
            placeHolder="Search..."
            aria-label="Search"
            className="rounded-pill search-input"
          />
          <FontAwesomeIcon
            icon="search"
            className="position-absolute text-400 search-box-icon"
          />
        </Form>
      </div>
    </div>
  );
};

export default Product;
