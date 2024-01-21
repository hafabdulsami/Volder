import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

const Navcollapse = ({
  navBarClass,
  navBarStyle,
  navClass,
  navStyle,
  items
}) => {
  return (
    <Navbar.Collapse
      className={navBarClass}
      style={navBarStyle}
      id="basic-navbar-nav"
    >
      <Nav className={`${navClass}`} style={navStyle}>
        {items.map((item, key) => {
          return (
            <Nav.Link key={key} href={item.navigate}>
              {item.label}
            </Nav.Link>
          );
        })}
      </Nav>
    </Navbar.Collapse>
  );
};

Navcollapse.propTypes = {
  items: PropTypes.array,
  navBarClass: PropTypes.string,
  navBarStyle: PropTypes.object,
  navClass: PropTypes.string,
  navStyle: PropTypes.object
};

export default Navcollapse;
