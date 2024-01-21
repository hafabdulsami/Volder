import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../common/logo/Logo";
import { useNavigate } from "react-router-dom";
import Navcollapse from "./Navcollapse";
import navBarRoutes from "../../routes/navBarRoutes";
function navBar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const usenavigate = useNavigate();
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
        <Navbar.Brand
          className="w-20 "
          style={{ width: "20%" }}
          onClick={() => {
            usenavigate("/");
          }}
        >
          <Logo width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navcollapse
          navBarClass="justify-content-center"
          navBarStyle={{ width: "60%" }}
          navClass="gap-2 w-80"
          navStyle={{ fontWeight: "bolder" }}
          items={navBarRoutes[0].childer}
        />
        <Navcollapse
          navBarClass={`justify-content-end ${isNavCollapsed ? "flex-row justify-content-end" : ""}`}
          navBarStyle={{ width: "20%" }}
          navClass={`test ${isNavCollapsed ? "gap-2" : ""}`}
          items={navBarRoutes[1].childer}
        />
      </Container>
    </Navbar>
  );
}

export default navBar;
