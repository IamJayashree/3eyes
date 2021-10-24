import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import WaveSVG from '../assets/images/wave.svg';
import SignInSVG from "../assets/images/signin.svg";
import LoginNavBar from "../navbar/loginnavbar";
import Footer from "../footer";

export default function Login(props) {

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    localStorage.setItem("isUserLoggedIn", true);
    props.history.push({
      pathname: '/LandingPage', state: {
        name: data.get('email'),
        password: data.get('password')
      }
    });
  }

  return (
    <>
      <LoginNavBar></LoginNavBar>
      <img className="wave" src={WaveSVG} alt="3I" />
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse g-5">
          <div className="col-10 col-sm-8 col-lg-6 d-none d-lg-block m-auto py-5 my-5">
            <img src={SignInSVG} className="d-block mx-lg-auto img-fluid" alt="3I" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <Form onSubmit={handleSubmit} className="p-md-4 p-md-5">
              <h2 className="lh-1 mb-4 text-center d-none d-lg-block display-6 fw-bold">Sign in</h2>
              <Form.Group size="lg" controlId="email" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill"
                  autoFocus
                  type="email"
                  // placeholder="name@example.com"
                  name="email"
                  required
                />
                <Form.Label className="px-4">Email address</Form.Label>
              </Form.Group>
              <Form.Group size="lg" controlId="password" className="form-floating mb-3">
                <Form.Control className="form-control px-4 rounded-pill"
                  type="password"
                  // placeholder="Password"
                  name="password"
                  required
                />
                <Form.Label className="px-4">Password</Form.Label>
              </Form.Group>
              <Button block size="lg" type="submit" className="btn btn-lg btn-primary rounded-pill py-3 w-100">
                Sign In
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
