import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import LogoutNavBar from '../navbar/logoutnavbar';
import PlacesAutocomplete from '../locationpicker/auto';

export default function Registration(props) {
    const [status, setStatus] = useState(false);
    const [otherStatus, setOtherStatus] = useState(false);
    const [otherDisableStatus, setOtherDisableStatus] = useState(false);
    const [validated, setValidated] = useState(false);
    const [emergencyContact, setEmergencyContact] = useState(false);
    const [otherProfession, setOtherProfession] = useState(false);
    const name = localStorage.getItem("userName");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        localStorage.setItem("isVolunteer", status);
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
            <div className="card-body">
                <h3 className="fw-bold lh-1 mb-3">Welcome {name},</h3>
            </div>
            <div className="container">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
                    <div className="card shadow">
                        <div className="row g-0">
                            <div className="col-lg-8">
                                <div className="card-body p-4 p-md-5">
                                    {/* <h3 className="fw-bold lh-1 mb-3">Welcome {name},</h3> */}
                                    {/* <p className="mb-2">Please provide some more information about yourself.</p> */}
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label mr-auto" htmlFor="address">Address</label>
                                            <div className="placesAutoComplete">
                                                <PlacesAutocomplete></PlacesAutocomplete>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control px-4" id="dob" placeholder="MM/DD/YYY" required="" />
                                            <div className="invalid-feedback">
                                                Please input a valid Date of Birth.
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <label htmlFor="state" className="form-label">Pronouns</label>
                                            <select className="form-select px-4 " id="state" required="">
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
                                                <input id="others" type="checkbox" className="form-check-input me-2" onChange={() => { setOtherDisableStatus(!otherDisableStatus); }} />
                                                <label className="form-check-label" htmlFor="others">Others</label>
                                            </div>
                                        </div>

                                        {otherDisableStatus &&
                                            <div className="col-md-12 mb-4">
                                                <input type="text" className="form-control" required="" />
                                                <div className="invalid-feedback">
                                                    Other required
                                                </div>
                                            </div>
                                        }
                                        <label className="form-label mt-4 mb-0 col-12">Emergency Contact <span className="text-muted">(Optional) <Button name="emervency" onClick={() => { setEmergencyContact(!emergencyContact) }}>Add</Button></span></label>
                                        {emergencyContact && <div>
                                            <Form.Group size="lg" controlId="firstName" className="form-floating mb-3">
                                                <Form.Control className="form-control px-4 "
                                                    type="text"
                                                    name="firstName"
                                                />
                                                <Form.Label className="px-4">Full Name</Form.Label>
                                            </Form.Group>
                                            <Form.Group size="lg" controlId="phone" className="form-floating mb-3">
                                                <Form.Control className="form-control px-4 "
                                                    type="text"
                                                    name="phone"
                                                />
                                                <Form.Label className="px-4">Phone number</Form.Label>
                                            </Form.Group>
                                            <Form.Group size="lg" controlId="email" className="form-floating mb-3">
                                                <Form.Control className="form-control px-4 "
                                                    type="email"
                                                    name="email"
                                                />
                                                <Form.Label className="px-4">Email address</Form.Label>
                                            </Form.Group>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col bg-light border">
                                <div className="card-body p-2 px-md-2 py-md-2">
                                    {
                                        // professionalHelp &&
                                        <>
                                            <div className="mt-3">
                                                <label className="form-label">What's your Profession?</label><br />
                                                <div className="form-check mb-2">
                                                    <input id="educationalCare" type="checkbox" className="form-check-input me-2" />
                                                    <label className="form-check-label" htmlFor="educationalCare">Doctor</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="healthCare" type="checkbox" className="form-check-input me-2" />
                                                    <label className="form-check-label" htmlFor="healthCare">Lawyer</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="personalCare" type="checkbox" className="form-check-input me-2" />
                                                    <label className="form-check-label" htmlFor="personalCare">Physical Trainer</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input id="otherCare" type="checkbox" className="form-check-input me-2" onChange={() => { setOtherProfession(!otherProfession); }} />
                                                    <label className="form-check-label" htmlFor="otherCare">Others</label>
                                                </div>
                                                {otherProfession &&
                                                    <div className="mb-2">
                                                        <input type="text" className="form-control" required="" />
                                                    </div>
                                                }
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="card-footer p-4 px-md-5">
                            <Button block size="lg" type="submit" className="px-5 btn btn-primary btn-lg d-block d-md-inline-block">
                                Next
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

