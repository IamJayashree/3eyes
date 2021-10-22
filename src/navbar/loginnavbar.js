import React from 'react';
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function LoginNavBar() {
  return (
    <Router>
      <Navbar bg="light" variant="light" expand="lg" fixed="top" className="px-lg-4 shadow">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand p-0 me-2 fw-bold lh-lg">
            <svg className="d-inline-block my-1 me-2" xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" role="img">
              <use xlinkHref="#logo"></use>
            </svg>
            <span>i</span>nclude{' '}
            <span>i</span>nvolve{' '}
            <span>i</span>nspire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/HowItWorks">How It Works?</Nav.Link>
              <Nav.Link href="/SignIn">Login</Nav.Link>
              <Nav.Link href="/SignUp">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}