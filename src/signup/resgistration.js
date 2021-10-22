import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

// import {
    // Route,
    // Link
// } from "react-router-dom";
// import Login from '../signin/signin';
// import LoginNavBar from '../navbar/loginnavbar';
import LogoutNavBar from '../navbar/logoutnavbar';

export default function Registration(props) {

    const [status, setStatus] = useState(0) // 0: no show, 1: show yes, 2: show no.

    const radioHandler = (status) => {
        setStatus(status);
    };


    const [validated, setValidated] = useState(false);
    const name = localStorage.getItem("userName");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        let value = status === 1 ? true : false;
        localStorage.setItem("isVolunteer", value);

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            props.history.push({
                pathname: '/LandingPage', state: {
                    firstName: data.get('firstName'),
                    lastName: data.get('lastName')
                }
            });
        }
        setValidated(true);
    };

    return (
        <div>
            <LogoutNavBar></LogoutNavBar>
            <div className="container px-4 py-5">
                <h1 className="display-5 fw-bold lh-1 mb-3">Welcome {name}</h1>
                <p className="lead mb-5">Please provide some more information about yourself to quickly get started.</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
                    <div className="card shadow">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card-body p-4 p-md-5">
                                    <h4 className="mb-3 border-bottom border-1">Basic Info</h4>
                                    <div className="row g-3">
                                        {/* <div className="col-sm-6">
                                            <label htmlFor="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="you@example.com" required="" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <label className="form-label mr-auto" htmlFor="address">Address</label>
                                            <textarea className="form-control" id="address" cols="30" rows="2" required=""></textarea>
                                            <div className="invalid-feedback">
                                                Please enter your address.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                            <textarea id="address2" className="form-control" cols="30" rows="2" required=""></textarea>
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <select className="form-select" id="country" required="">
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="state" className="form-label">State</label>
                                            <select className="form-select" id="state" required="">
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="pt-4 mt-4"></div>
                                            <h4 className="mb-3 border-bottom border-1">Personal Info</h4>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control" id="dob" placeholder="MM/DD/YYY" required="" />
                                            <div className="invalid-feedback">
                                                Please input a valid Date of Birth.
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label mb-0">Gender</label><br />
                                            <div className="my-3">
                                                <div className="form-check-inline">
                                                    <input id="genderMale" name="disability1" type="radio" className="form-check-input me-2" />
                                                    <label className="form-check-label" htmlFor="genderMale">Male</label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <input id="genderFemale" name="disability1" type="radio" className="form-check-input me-2" />
                                                    <label className="form-check-label" htmlFor="genderFemale">Female</label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <input id="genderOther" name="disability1" type="radio" className="form-check-input me-2" />
                                                    <label className="form-check-label" htmlFor="genderOther">Other</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="dob" className="form-label col-12">Do you have any specific accessibility
                                                requirements?</label>
                                            <div className="form-check mb-2">
                                                <input id="blind" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="blind">Visually impaired</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="deaf" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="deaf">Hearing-impaired</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="mobility-aid" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="mobility-aid">Mobility/Walking</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="assisted-aid" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="assisted-aid">Assisted living</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="prosthetic-implant" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="prosthetic-implant">Prosthetic Implant</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="paralysis-orthoses" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="paralysis-orthoses">Paralysis Orthoses</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="mental-helth" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="mental-helth">Mental health</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="other" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="other">Other</label>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input id="none" type="checkbox" className="form-check-input" />
                                                <label className="form-check-label" htmlFor="none">None</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">Are you willing for volunteering?</label><br />
                                            <div className="form-check-inline">
                                                <input type="radio" name="release" id="Yes" className="form-check-input me-2" checked={status === 1} onClick={(e) => radioHandler(1)} />
                                                <label className="form-check-label" htmlFor="Yes">Yes</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input type="radio" name="release" id="No" className="form-check-input me-2" checked={status === 2} onClick={(e) => radioHandler(2)} />
                                                <label className="form-check-label" htmlFor="No">No</label>
                                            </div>
                                        </div>

                                        {status === 1 &&

                                            <div className="col-md-12">
                                                <label className="form-label">What is the area of your interest?</label><br />

                                                <div className="form-check mb-2">
                                                    <input id="blind1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="blind1">Educational</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="deaf1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="deaf1">Advocacy and Human Rights</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="mobility-aid1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="mobility-aid1">Animals</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="assisted-aid1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="assisted-aid1">Childern and Youth</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="other-aid" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="other-aid">Other</label>
                                                </div>
                                            </div>
                                        }
                                        <label className="form-label mt-4 mb-0 col-12 fw-bold">Family/Additional Contact Information</label>
                                        <div className="col-md-5">
                                            <label htmlFor="a-name" className="form-label">Full Name <span className="text-muted">(Optional)</span></label>
                                            <input type="text" className="form-control" id="a-name" placeholder="" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="a-email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                            <input type="text" className="form-control" id="a-email" placeholder="" />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="a-phone" className="form-label">Phone <span className="text-muted">(Optional)</span></label>
                                            <input type="text" className="form-control" id="a-phone" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col border-left d-none d-md-block ">
                                &nbsp;
                            </div>
                        </div>


                        <div className="card-footer p-4 px-md-5">
                            <Button block size="lg" type="submit" className="px-5 btn btn-primary btn-lg d-block d-md-inline-block">
                                Update
                            </Button>
                        </div>
                    </div>
                </Form>
            </div >
        </div >

    );
}

