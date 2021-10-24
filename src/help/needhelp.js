import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import LogoutNavBar from '../navbar/logoutnavbar';
import PlacesAutocomplete from '../locationpicker/auto';

export default function NeedHelp(props) {

  const [validated, setValidated] = useState(false);
  const [category, setCategory] = useState(null);

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
        "name": localStorage.getItem("userName"),
        "pickUp": data.get('pickUp'),
        "destination": data.get('destination'),
      }

      localStorage.setItem("helpObj", JSON.stringify(help));

      props.history.push({
        pathname: '/LandingPage', state: {
          name: data.get('email'),
          password: data.get('password')
        }
      });
    }
    setValidated(true);
  };

  return (
    <>
      <LogoutNavBar></LogoutNavBar>
      <Form onSubmit={handleSubmit} className="needs-validation" noValidate validated={validated}>

        <h5 className="border-bottom pb-2 mb-2">Request Help</h5>
        <p className="mb-3">Please provide some more information about yourself and the kind of help you need.</p>

        <Form.Group size="lg" controlId="helpTitle" className="mb-3">
          <Form.Label className="form-label">What can we help you with?</Form.Label>
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

        <label className="form-label">Help Category</label>
        <br />
        <select className="form-select mb-3" onChange={handleSelect}>
          <option value="">Please select </option>
          <option value="Emergency">Emergency</option>
          <option value="Recreational">Recreational</option>
          <option value="Community">Community Help</option>
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

        <Form.Group size="lg" controlId="time" className="mb-3">
          <Form.Label className="form-label">Time</Form.Label>
          <Form.Control className="form-control"
            type="time"
            placeholder="00:00 am - 00:00 am"
            name="time"
            required />
          <Form.Control.Feedback type="invalid" className="invalid-feedback">
            Please input a valid Time.
          </Form.Control.Feedback>
        </Form.Group>

        <label className="form-label mr-auto" htmlFor="address">Pickup Location</label>
        <div className="placesAutoComplete mb-3">
          <PlacesAutocomplete fieldName="pickUp"></PlacesAutocomplete>
        </div>

        <label className="form-label mr-auto" htmlFor="address">Destination</label>
        <div className="placesAutoComplete mb-3">
          <PlacesAutocomplete fieldName="destination"></PlacesAutocomplete>
        </div>
        
        <Form.Group className="mb-3">
          <Form.Label className="form-label">
            Preferred Volunteer Gender
          </Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            name="radio"
            id="male"
          />
          <Form.Check
            type="radio"
            label="Female"
            name="radio"
            id="female"
          />
          <Form.Check
            type="radio"
            label="Other"
            name="radio"
            id="other"
          />
        </Form.Group>

        <Form.Group size="lg" controlId="info" className="mb-3">
          <Form.Label className="form-label">More information to help you better</Form.Label>
          <Form.Control className="form-control"
            as="textarea"
            name="info"
            cols="30" rows="5"
            required />
          <Form.Control.Feedback type="invalid" className="invalid-feedback">
            Please enter a valid info
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="w-100 mb-3">
          Request Help
        </Button>
        <a href="/LandingPage" className="btn btn-outline-primary w-100">
          Cancel
        </a>
      </Form>
    </>
  );
}
