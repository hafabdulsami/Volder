import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../common/logo/Logo";
//import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Navcollapse from "./Navcollapse";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function navBar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const middleOption = [
    {
      label: "Product",
      navigate: "none"
    },
    {
      label: "Contact Us",
      navigate: "none"
    }
  ];
  const endOption = [
    {
      label: (
        <FontAwesomeIcon
          icon={faFacebook}
          size="xl"
          style={{ color: "#345CFB" }}
        />
      ),
      navigate: "none"
    },
    {
      label: (
        <FontAwesomeIcon
          icon={faLocationDot}
          size="xl"
          style={{ color: "#345CFB" }}
        />
      ),
      navigate: "none"
    }
  ];
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  return (
    <Navbar
      expand="lg"
      className="p-2"
      sticky="top"
      bg="white"
      onToggle={handleNavCollapse}
    >
      <Container fluid className="align-items-center p-0 m-0">
        <Navbar.Brand className="w-20 " style={{ width: "20%" }}>
          <Logo width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navcollapse
          navBarClass="justify-content-center"
          navBarStyle={{ width: "60%" }}
          navClass="gap-2 w-80"
          navStyle={{ fontWeight: "bolder" }}
          items={middleOption}
        />
        <Navcollapse
          navBarClass={`justify-content-end ${isNavCollapsed ? "flex-row justify-content-end" : ""}`}
          navBarStyle={{ width: "20%" }}
          navClass={`test ${isNavCollapsed ? "gap-2" : ""}`}
          items={endOption}
        />
      </Container>
    </Navbar>
  );
}

export default navBar;
