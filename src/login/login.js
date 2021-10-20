import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import signin from "../assets/images/signin.svg";
export default function Login(props) {

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        props.history.push({
            pathname: '/LandingPage', state: {
                name: data.get('email'),
                password: data.get('password')
            }
        });
    }

    return (

        <div className="container px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 d-none d-md-block">
                    <img src={signin} className="d-block mx-lg-auto img-fluid" alt="3I image" width="700" height="500"
                        loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <Form onSubmit={handleSubmit} className="p-md-4 p-md-5">
                        <h1 className="display-5 fw-bold lh-1 mb-5 text-center">Sign in</h1>
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
                        <Button block size="lg" type="submit" className="btn btn-lg btn-primary rounded-pill py-3 w-100">
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

