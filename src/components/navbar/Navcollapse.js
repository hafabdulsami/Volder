import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Navcollapse = ({
  navBarClass,
  navBarStyle,
  navClass,
  navStyle,
  items,
  buttonstyle
}) => {
  const usenavigate = useNavigate();
  return (
    <Navbar.Collapse
      className={navBarClass}
      style={navBarStyle}
      id="basic-navbar-nav"
    >
      <Nav className={`${navClass}`} style={navStyle}>
        {items.map((item, key) => {
          return (
            <Nav.Link
              key={key}
              href={item.navigate}
              onClick={() => {
                if (item.to) {
                  usenavigate(item.to);
                }
              }}
            >
              <button
                className="btn btn-outline-primary"
                style={buttonstyle}
              >
                {item.label}
              </button>
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
  navStyle: PropTypes.object,
  buttonstyle: PropTypes.object
};

export default Navcollapse;
