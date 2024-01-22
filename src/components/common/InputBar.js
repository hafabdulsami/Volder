import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import Flex from "./Flex";
const InputBar = ({ setSearch }) => {
  return (
    <Flex justifyContent="center">
      <div className="" style={{ width: "30rem" }}>
        <Form className="position-relative">
          <Flex alignItems={"center"}>
            <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="rounded-pill search-input"
              style={{ paddingRight: "2.5rem" }}
              onChange={({ target }) => setSearch(target.value)}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="position-absolute text-400"
              style={{ color: "#000000", right: "1rem" }}
            />
          </Flex>
        </Form>
      </div>
    </Flex>
  );
};

InputBar.propTypes = {
  setSearch: PropTypes.string
};
export default InputBar;
