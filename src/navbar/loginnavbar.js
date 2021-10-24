import React from 'react';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function LoginNavBar() {
  return (
    <Router>
      <Navbar bg="light" variant="light" expand="lg" fixed="top" className="px-lg-4 shadow">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand p-0 me-2 lh-lg">
            <svg className="d-inline-block my-1 me-2" xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" role="img">
              <use xlinkHref="#logo"></use>
            </svg>
            <span>i</span>nclude{' '}
            <span>i</span>nvolve{' '}
            <span>i</span>nspire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex flex-column flex-lg-row ms-auto">
              <a href="/HowItWorks" className="nav-link text-black-50">How It Works?</a>
              <a href="/SignIn" className="btn btn-outline-primary mb-2 me-md-2">Login</a>
              <a href="/SignUp" className="btn btn-primary mb-2">Register</a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}