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
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
                    <div className="card shadow">
                        <div className="row g-0">
                            <div className="col-lg-8">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="fw-bold lh-1 mb-3">Welcome {name}</h3>
                                    <p className="mb-5">Please provide some more information about yourself to quickly get started.</p>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label mr-auto" htmlFor="address">Address</label>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" id="address" placeholder="Get current location address" aria-label="Address" aria-describedby="Address"/>
                                                <span class="input-group-text">
                                                    <svg width="1em" height="1em">
                                                        <use xlinkHref="#geo"></use>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="invalid-feedback">
                                                Please enter your address.
                                            </div>
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
                                        <div className="col-md-5">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control" id="dob" placeholder="MM/DD/YYY" required="" />
                                            <div className="invalid-feedback">
                                                Please input a valid Date of Birth.
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="state" className="form-label">Pronouns</label>
                                            <select className="form-select" id="state" required="">
                                                <option value="">Choose...</option>
                                                <option>he/him/his</option>
                                                <option>she/her/hers</option>
                                                <option>they/them/theirs</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a pronoun
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="dob" className="form-label col-12">
                                                Do you have any disability?
                                            </label>
                                            <div className="form-check-inline">
                                                <input id="physical" type="checkbox" className="form-check-input me-2" />
                                                <label className="form-check-label" htmlFor="physical">Physical</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input id="visual" type="checkbox" className="form-check-input me-2" />
                                                <label className="form-check-label" htmlFor="visual">Visual</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input id="hearing" type="checkbox" className="form-check-input me-2" />
                                                <label className="form-check-label" htmlFor="hearing">Hearing</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input id="mental" type="checkbox" className="form-check-input me-2" />
                                                <label className="form-check-label" htmlFor="mental">Mental</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input id="neuroDiversity" type="checkbox" className="form-check-input me-2" />
                                                <label className="form-check-label" htmlFor="neuroDiversity">Neuro Diversity</label>
                                            </div>
                                            <div className="form-check-inline">
                                                <input id="others" type="checkbox" className="form-check-input me-2" />
                                                <label className="form-check-label" htmlFor="others">Others</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <input type="text" className="form-control" placeholder="Show this input when Others is checked" required="" />
                                            <div className="invalid-feedback">
                                                Other required
                                            </div>
                                        </div>
                                        <label className="form-label mt-4 mb-0 col-12 fw-bold">Emergency Contact</label>
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
                            <div className="col bg-light border">
                                <div className="card-body p-4 p-md-5">
                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Do you wish to Volunteer?</label>
                                    </div>
                                    <label className="form-label">Do you wish to Volunteer?</label><br />
                                    <div className="form-check-inline">
                                        <input type="radio" name="release" id="Yes" className="form-check-input me-2" checked={status === 1} onClick={(e) => radioHandler(1)} />
                                        <label className="form-check-label" htmlFor="Yes">Yes</label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input type="radio" name="release" id="No" className="form-check-input me-2" checked={status === 2} onClick={(e) => radioHandler(2)} />
                                        <label className="form-check-label" htmlFor="No">No</label>
                                    </div>
                                    {
                                        status === 1 &&
                                        <>
                                            <div className="py-4">
                                                <label className="form-label">What's your area of interest?</label><br />
                                                <div className="form-check mb-2">
                                                    <input id="mobility-aid1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="mobility-aid1">Animals</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="blind1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="blind1">Educational</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="assisted-aid1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="assisted-aid1">Childern and Youth</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="deaf1" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="deaf1">Advocacy and Human Rights</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="other-aid" type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label" htmlFor="other-aid">Other</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="text" className="form-control" placeholder="Show when Other is checked" required="" />
                                                    <div className="invalid-feedback">
                                                        Other required
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                You've committed yourself to something that you're passionate about, so put a smile on your face with a good attitude.
                                            </p>
                                            <b>Volunteer Etiquette</b>
                                            <ol className="px-3 mt-2">
                                                <li>Be on time.</li>
                                                <li>Communicate.</li>
                                                <li>Dress appropriately.</li>
                                                <li>Get along with others.</li>
                                                <li>Do the best job you can.</li>
                                            </ol>
                                        </>
                                    }
                                </div>
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

