import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import LogoutNavBar from '../navbar/logoutnavbar';
// import Explorations from './explorations';
import Avatar from '../assets/images/avatar/14.jpg';
import Avatar1 from '../assets/images/avatar/02.jpg';

import '../index.css';
import './explorations.css';
import Assistant from '../assistant/assistant';
import NeedHelp from '../help/needhelp';

export default function LandingPage(props) {
  // const name = localStorage.getItem("userName");
  // const isRequested = localStorage.getItem("isRequested");
  const isVolunteer = localStorage.getItem("isVolunteer");
  const help = JSON.parse(localStorage.getItem("assistantObj"));
  let date = (help != null && help.date) ? new Date(help.date) : new Date();
  const [professionalHelp, setProfessionalHelp] = useState(false);
  const [volunteerHelp, setVolunteerHelp] = useState(false);

  let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  return (
    <>
      <LogoutNavBar />
      <div className="container px-4 py-2">
        <div className="row g-3">
          <div className="col-md-8">
            {/* Your Recent help requests */}
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Open Service Requests</h6>
              {/* repeat item */}
              <div className="row g-0 mt-3">
                <div className="col-auto">
                  <div className="calendar me-3">
                    <span className="calendar-month">Oct</span>
                    <span className="calendar-day">25</span>
                  </div>
                </div>
                <div className="col border-bottom">
                  <span className="d-block mb-1">Ride to Church</span>
                  <span className="rounded badge bg-soft-primary">Open</span>
                </div>
                <div className="col-auto border-bottom text-center" style={{ width: '100px' }}>
                  <button type="button" className="btn btn-sm btn-outline-primary mb-1 w-100">Accept</button>
                  <button type="button" className="btn btn-sm btn-link mb-2">More Info</button>
                </div>
              </div>
              {/* repeat item */}
              {/* repeat item */}
              <div className="row g-0 mt-3">
                <div className="col-auto">
                  <div className="calendar me-3">
                    <span className="calendar-month">Oct</span>
                    <span className="calendar-day">26</span>
                  </div>
                </div>
                <div className="col border-bottom">
                  <span className="d-block mb-1">Food Collection</span>
                  <span className="rounded badge bg-soft-primary">Open</span>
                </div>
                <div className="col-auto border-bottom text-center" style={{ width: '100px' }}>
                  <button type="button" className="btn btn-sm btn-outline-primary mb-1 w-100">Accept</button>
                  <button type="button" className="btn btn-sm btn-link mb-2">More Info</button>
                </div>
              </div>
              {/* repeat item */}
              <small className="d-block text-end mt-3">
                <button type="button" className="btn btn-sm btn-link">View all</button>
              </small>
            </div>
            {
              isVolunteer &&
              <>
              </>
            }

            {(help && help.helpTitle) ?
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">
                  Help requested by you
                </h6>
                <div className="d-flex pt-3">
                  <div className="col-auto">
                    <div className="calendar me-3">
                      <span className="calendar-month">{date.toLocaleString("en", { month: "long" }).substring(0, 3)}</span>
                      <span className="calendar-day">{parseInt(date.toLocaleString("en", { day: "numeric" })) + 1}</span>
                    </div>
                  </div>
                  <div className="col">
                    <span className="d-block mb-1">{help.helpTitle}</span>
                  </div>
                  <div className="col-auto">
                    {
                      isUserLoggedIn ?
                      <>
                        <div className="d-flex">
                          <img src={Avatar1} alt="" width="32" height="32"
                          className="me-2 rounded-circle shadow-sm" />
                          <small className="lh-1">
                            <small className="small text-muted d-block text-center">Accepted by</small>
                            <button type="button" className="small btn btn-link">Sarah Gordy</button>
                          </small>
                        </div>
                      </>
                    :
                      <button type="button" className="btn btn-sm btn-outline-primary mb-1 w-100">Requested</button>
                    }
                    {/* <button type="button" className="btn btn-sm btn-link mb-2">More Info</button> */}
                  </div>

                </div>
              </div>
              :
              <>
              </>
            }

            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <Form.Group className="form-check-inline m-0">
                <Form.Label className="form-check-label d-block m-0 me-2">
                  Need {(help && help.helpTitle) ? "more" : ""} help?
                </Form.Label>
                <input id="professional" name="help" type="radio" className="form-check-input me-2" onChange={() => { setProfessionalHelp(!professionalHelp); setVolunteerHelp(false) }} />
                <label className="form-check-label me-3" htmlFor="professional">Professional</label>
                <input id="volunteer" name="help" type="radio" className="form-check-input me-2" onChange={() => { setVolunteerHelp(!volunteerHelp); setProfessionalHelp(false) }} />
                <label className="form-check-label" htmlFor="volunteer">Volunteer</label>
              </Form.Group>
            </div>

            {
              professionalHelp &&
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <Assistant />
              </div>
            }
            {
              volunteerHelp &&
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <NeedHelp />
              </div>
            }
            <Link to="/AssistivePage" className="btn btn-lg btn-primary rounded-pill py-3 w-100">
              Assistive Services in 3Eyes
            </Link>
          </div>


          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '80px' }}>
              {/* Profile Info Card */}
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <div className="row g-0">
                  <div className="col-auto">
                    <img className="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                  </div>
                  <div className="col">
                    <h6 className="mb-0">
                      Varun
                    </h6>
                    <div className="small text-muted mb-1 border-bottom pb-1">
                      Evangelist
                    </div>
                    <div className="small lh-sm">
                      <span className="d-inline-block me-4">Followers: {isUserLoggedIn ? 10 : 0}</span>
                      <span className="d-inline-block">Following: {isUserLoggedIn ? 24 : 0}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Info Ends */}
              {/* Events Cards */}

              {/* Events Cards Ends */}
            </div>
          </div>
        </div>
        <div><br /><br /><br /></div>
      </div>
      {/* <Explorations/> */}
    </>
  );
}
