import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/navbar";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartWidget from "../CartWidget";
import "./NavBar.css";

const NavBar = (props) => {
  const {cantidadTotal} = useCartContext()
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="text-decoration-none" to="/">Arcolo</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center contenedor-nav">
              <Link className="text-decoration-none text-white mx-3" to="/categoria/remeras">Remeras</Link>
              <Link className="text-decoration-none text-white mx-3"  to="/categoria/camisas">Camisas</Link>
              <Link className="text-decoration-none text-white mx-3" to="/categoria/jeans">Jeans</Link>
              <Link className="text-decoration-none text-white mx-3" to="/categoria/zapatillas">Zapatillas</Link>
              <Link className="text-decoration-none text-white mx-3" to="/categoria/accesorios">Accesorios</Link>
            </Nav>
            <Nav>
              { cantidadTotal()}
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
