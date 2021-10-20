import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import SignUpSvg from '../assets/images/signup.svg';

export default function SignUp(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
        props.history.push({
            pathname: '/LandingPage', state: {
                firstName: data.get('firstName'),
                lastName: data.get('lastName')
            }
        });
    }

    return (
        <div className="container px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 d-none d-md-block">
                    <img src={SignUpSvg} className="d-block mx-lg-auto img-fluid" alt="3I image" width="700" height="500"
                        loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <Form onSubmit={handleSubmit} className="p-md-4 p-md-5">
                        <h1 className="display-5 fw-bold lh-1 mb-5 text-center">Sign up</h1>
                        <div className="form-floating mb-3">
                            <Form.Group size="lg" controlId="firstName">
                                <Form.Label className="px-4">First Name</Form.Label>
                                <Form.Control className="form-control px-4 rounded-pill"
                                    autoFocus
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="form-floating mb-3">
                            <Form.Group size="lg" controlId="lastName">
                                <Form.Label className="px-4">Last Name</Form.Label>
                                <Form.Control className="form-control px-4 rounded-pill"
                                    autoFocus
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="form-floating mb-3">
                            <Form.Group size="lg" controlId="email">
                                <Form.Label className="px-4">Email address</Form.Label>
                                <Form.Control className="form-control px-4 rounded-pill"
                                    autoFocus
                                    type="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="form-floating mb-3">
                            <Form.Group size="lg" controlId="password">
                                <Form.Label className="px-4">Password</Form.Label>
                                <Form.Control className="form-control px-4 rounded-pill"
                                    autoFocus
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className="form-floating mb-3">
                            <Form.Group size="lg" controlId="confirmPassword">
                                <Form.Label className="px-4">Retype Password</Form.Label>
                                <Form.Control className="form-control px-4 rounded-pill"
                                    autoFocus
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <Button block size="lg" type="submit" className="btn btn-lg btn-primary rounded-pill py-3 w-100">
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

