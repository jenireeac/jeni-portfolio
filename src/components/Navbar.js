import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link } from "react-router-dom"

const Bar = () => {
  return (
    <>  
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About Me</Nav.Link>
            <Nav.Link as={Link} to="/Work">My Work</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<section>
<Outlet></Outlet>
</section> 
  </>
  )
}

export default Bar;