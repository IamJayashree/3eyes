import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

import {
  Route,
  Link
} from "react-router-dom";
import Login from '../signin/signin';

export function VolunteerSignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Register</h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="8" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="8" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="8" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="8" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter password"
              name="password"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>

        <p className="forgot-password text-right">
          Already registered? <span></span>
          <Link to="/Login">Login </Link>
          <Route path="/Login" exact component={Login} />
        </p>
      </Form>
    </div>
  );
}

export default SignUp;

