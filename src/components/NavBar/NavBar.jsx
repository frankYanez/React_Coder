import React from 'react';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    


  return (
    <div>
     <navbar bg="dark" variant="dark">
        <Container>
          <Link to='/'>Arcolo</Link>
          <Nav className="me-auto">
            <Link to='/categoria/remeras'>Remeras</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Link><CartWidget/> </Link>
        </Container>
      </navbar>
      
    </div>
    
   
  );
};

export default Navbar;
