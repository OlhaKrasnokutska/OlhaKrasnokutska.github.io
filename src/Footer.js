import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <footer>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize:"12px" }}><a href="https://github.com/OlhaKrasnokutska" target="blank">Created by Olha Krasnokutska</a></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">2023</Nav.Link>
           </Nav>
        </Container>
      </Navbar>
      </footer>
  );
}

export default Footer;
