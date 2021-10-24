import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import LogoutNavBar from '../navbar/logoutnavbar';
import PlacesAutocomplete from '../locationpicker/auto';

export default function Registration(props) {
  const [status] = useState(false);
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
    <>
      <LogoutNavBar></LogoutNavBar>
      <div className="container px-4 py-4 mb-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
          <div className="card shadow">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="card-body p-4 p-md-5">
                  <h3 className="fw-bold lh-1 fw-bold lh-1 mb-3">Welcome {name},</h3>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label mr-auto" htmlFor="address">Address</label>
                      <div className="placesAutoComplete">
                        <PlacesAutocomplete></PlacesAutocomplete>
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
                    <div className="mt-3">
                      <label className="form-label">What's your Profession?</label><br />
                      <div className="form-check-inline mb-2">
                        <input id="educationalCare" type="checkbox" className="form-check-input me-2" />
                        <label className="form-check-label" htmlFor="educationalCare">Doctor</label>
                      </div>
                      <div className="form-check-inline mb-2">
                        <input id="healthCare" type="checkbox" className="form-check-input me-2" />
                        <label className="form-check-label" htmlFor="healthCare">Lawyer</label>
                      </div>
                      <div className="form-check-inline mb-2">
                        <input id="personalCare" type="checkbox" className="form-check-input me-2" />
                        <label className="form-check-label" htmlFor="personalCare">Physical Trainer</label>
                      </div>
                      <div className="form-check-inline mb-2">
                        <input id="otherCare" type="checkbox" className="form-check-input me-2" onChange={() => { setOtherProfession(!otherProfession); }} />
                        <label className="form-check-label" htmlFor="otherCare">Others</label>
                      </div>
                      {otherProfession &&
                        <div className="mb-2">
                          <input type="text" className="form-control" required="" />
                        </div>
                      }
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <label className="form-labelmb-0">
                        Emergency Contact
                        <span className="text-muted">(Optional)</span>
                      </label>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0d6efd" viewBox="0 0 16 16" onClick={() => { setEmergencyContact(!emergencyContact) }}>
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>
                    </div>
                    {emergencyContact && <div>
                      <Form.Group size="lg" controlId="firstName" className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control className="form-control"
                          type="text"
                          name="firstName"
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="phone" className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control className="form-control"
                          type="text"
                          name="phone"
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="email" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="form-control"
                          type="email"
                          name="email"
                        />
                      </Form.Group>
                    </div>
                    }
                  </div>
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
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

