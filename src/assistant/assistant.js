import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import LogoutNavBar from '../navbar/logoutnavbar';
import LoginNavBar from '../navbar/loginnavbar';
// import PlacesAutocomplete from '../locationpicker/auto';

export default function Assistant(props) {

    const [validated, setValidated] = useState(false);
    const [category, setCategory] = useState(null);
    let userName = localStorage.getItem("userName");

    const handleSelect = (e) => {
        setCategory(e.currentTarget.value)
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            localStorage.setItem("isRequested", true);
            const data = new FormData(event.target);
            let help = {
                "helpTitle": data.get('helpTitle'),
                "category": category,
                "date": data.get('date'),
                "time": data.get('time'),
                "notes": data.get('info'),
                "name": userName,
                "pickUp": data.get('pickUp'),
                "destination": data.get('destination'),
            }

            localStorage.setItem("assistantObj", JSON.stringify(help));

            if (userName) {
                props.history.push({
                    pathname: '/LandingPage', state: {
                        name: data.get('email'),
                        password: data.get('password')
                    }
                });
            } else {
                props.history.push({
                    pathname: '/', state: {
                        name: data.get('email'),
                        password: data.get('password')
                    }
                });
            }
        }
        setValidated(true);
    };

    return (
        <>
            {userName ? <LogoutNavBar /> : <LoginNavBar />}
            <Form onSubmit={handleSubmit} className="needs-validation" noValidate validated={validated}>

                {/* <h5 className="border-bottom pb-2 mb-2">Request Assistant</h5> */}
                {/* <p className="mb-3">Please provide some more information about yourself and the kind of assistant you need.</p> */}

                <Form.Group size="lg" controlId="helpTitle" className="mb-3">
                    <Form.Label className="form-label">What help do you want?</Form.Label>
                    <Form.Control className="form-control"
                        autoFocus
                        type="text"
                        name="helpTitle"
                        placeholder="Example: Need a ride, Lost way"
                        required />
                    <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Valid help type is required.
                    </Form.Control.Feedback>
                </Form.Group>

                <label className="form-label">Assistant Category</label>
                <br />
                <select onChange={handleSelect} className="form-select mb-3">
                    <option value="">Please select </option>
                    <option value="Emergency">Advisory Assistance</option>
                    <option value="Recreational">Mental Health</option>
                    <option value="Community">Personal Care</option>
                    <option value="Community">Educational</option>
                    <option value="Community">Acting</option>
                </select>

                <Form.Group size="lg" controlId="date" className="mb-3">
                    <Form.Label className="form-label">Date</Form.Label>
                    <Form.Control className="form-control"
                        type="date"
                        name="date"
                        placeholder="MM/DD/YYY"
                        required />
                    <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Please input a valid Date.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* <Form.Group size="lg" controlId="time" className="mb-3">
                    <Form.Label className="form-label">Time</Form.Label>
                    <Form.Control className="form-control"
                        type="time"
                        placeholder="00:00 am - 00:00 am"
                        name="time"
                        required />
                    <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Please input a valid Time.
                    </Form.Control.Feedback>
                </Form.Group> */}

                <Form.Group size="lg" controlId="info" className="mb-3">
                    <Form.Label className="form-label">More information to assist you better</Form.Label>
                    <Form.Control className="form-control"
                        as="textarea"
                        name="info"
                        cols="30" rows="5"
                    />
                    <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Please enter a valid info
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="mb-3 w-100">
                    Confirm
                </Button>
                {
                    userName ?
                        <>
                            <a href="/LandingPage" className="btn btn-outline-primary w-100">
                                Cancel
                            </a>
                        </>
                        :
                        <>
                            <a href="/" className="btn btn-outline-primary w-100">
                                Cancel
                            </a>
                        </>
                }
            </Form>
        </>
    );
}
