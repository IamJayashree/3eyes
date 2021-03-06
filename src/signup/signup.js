import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

import WaveSVG from '../assets/images/wave.svg';
import SignUpSVG from '../assets/images/signup.svg';
import LoginNavBar from '../navbar/loginnavbar';
import Footer from "../footer";

export default function SignUp(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    localStorage.setItem("userName", data.get('firstName'));
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
    props.history.push({
      pathname: '/Registration', state: {
        firstName: data.get('firstName'),
        lastName: data.get('lastName')
      }
    });
  }

  return (
    <>
      <LoginNavBar></LoginNavBar>
      <img className="wave" src={WaveSVG} alt="3I" />
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6 d-none d-lg-block m-auto">
            <img src={SignUpSVG} className="d-block mx-lg-auto img-fluid" alt="3I" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <Form onSubmit={handleSubmit} className="p-md-4 p-md-5">
              <h2 className="lh-1 mb-4 text-center d-none d-lg-block display-6 fw-bold">Sign up</h2>
              <Form.Group size="lg" controlId="firstName" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill"
                  autoFocus
                  type="text"
                  name="firstName"
                  required
                />
                <Form.Label className="px-4">Full Name</Form.Label>
              </Form.Group>
              {/* <Form.Group size="lg" controlId="phone" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill" maxLength="10"
                  type="text"
                  name="phone"
                  required
                />
                <Form.Label className="px-4">Phone number</Form.Label>
              </Form.Group> */}
              <Form.Group size="lg" controlId="email" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill"
                  type="email"
                  name="email"
                  required
                />
                <Form.Label className="px-4">Email address</Form.Label>
              </Form.Group>
              <Form.Group size="lg" controlId="password" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill"
                  type="password"
                  name="password"
                  required
                />
                <Form.Label className="px-4">Password</Form.Label>
              </Form.Group>
              <Form.Group size="lg" controlId="confirmPassword" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill"
                  type="password"
                  name="confirmPassword"
                  required
                />
                <Form.Label className="px-4">Retype Password</Form.Label>
              </Form.Group>
              <Button block size="lg" type="submit" className="btn btn-lg btn-primary rounded-pill py-3 w-100">
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
      <br />
      <br />
      <br />
    </>
  );
}
