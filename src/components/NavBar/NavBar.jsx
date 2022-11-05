import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/navbar";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Arcolo</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/categoria/remeras">Remeras</Link>
              <Link to="/categoria/camisas">Camisas</Link>
              <Link to="/categoria/jeans">Jeans</Link>
              <Link to="/categoria/zapatillas">Zapatillas</Link>
              <Link to="/categoria/accesorios">Accesorios</Link>
            </Nav>
            <Nav>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
