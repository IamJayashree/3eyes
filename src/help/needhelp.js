import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

export default function NeedHelp(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = new FormData(event.target);
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
    <div className="container px-4 py-5">
      <h1 className="display-5 fw-bold lh-1 mb-3">Create Help</h1>
      <p className="lead mb-5">Please provide some more information about yourself and the kind of help you need.</p>
      <Form onSubmit={handleSubmit} className="needs-validation" noValidate validated={validated}>
        <div className="card shadow">
          <div className="row">
            <div className="col-lg-8">
              <div className="card-body p-4 p-md-5">
                <div className="row g-3">
                  <div className="col-md-12">
                    <Form.Group size="lg" controlId="helpTitle">
                      <Form.Label className="form-label">Help Title</Form.Label>
                      <Form.Control className="form-control"
                        autoFocus
                        type="text"
                        name="helpTitle"
                        required />
                      <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Valid help type is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group size="lg" controlId="date">
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
                  </div>
                  <div className="col-md-6">
                    <Form.Group size="lg" controlId="time">
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

                  </div>
                  <div className="col-sm-12">
                    <Form.Group size="lg" controlId="pickupLocation">
                      <Form.Label className="form-label">Pickup Location</Form.Label>
                      <Form.Control className="form-control"
                        type="text"
                        name="label"
                        required />
                      <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Valid pickup location is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-sm-12">
                    <Form.Group size="lg" controlId="destination">
                      <Form.Label className="form-label">Destination</Form.Label>
                      <Form.Control className="form-control"
                        type="text"
                        name="destination"
                        required />
                      <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Valid destination location is required
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                  <Form.Label className="form-label">Volunteer gender</Form.Label>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Male"
                          name="gender"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Other"
                          name="gender"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="col-12">
                    <Form.Group size="lg" controlId="info">
                      <Form.Label className="form-label">Information about help</Form.Label>
                      <Form.Control className="form-control"
                        as="textarea"
                        name="info"
                        cols="30" rows="5"
                        required />
                      <Form.Control.Feedback type="invalid" className="invalid-feedback">
                        Please enter a valid info
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              &nbsp;
            </div>
          </div>
          <div className="card-footer py-4 px-5">
            <Button block size="lg" type="submit" className="px-5 btn btn-primary btn-lg">
              Create Help
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
