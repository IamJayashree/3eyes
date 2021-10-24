import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import LogoutNavBar from '../navbar/logoutnavbar';
// import Explorations from './explorations';
import Avatar from '../assets/images/avatar/14.jpg';

import '../index.css';
import './explorations.css';
import Assistant from '../assistant/assistant';
import NeedHelp from '../help/needhelp';

export default function LandingPage(props) {
  const name = localStorage.getItem("userName");
  const isRequested = localStorage.getItem("isRequested");
  const isVolunteer = localStorage.getItem("isVolunteer");
  const help = JSON.parse(localStorage.getItem("helpObj"));
  let date = (help != null && help.date) ? new Date(help.date) : new Date();
  const [professionalHelp, setProfessionalHelp] = useState(false);
  const [volunteerHelp, setVolunteerHelp] = useState(false);


  return (
    <>
      <LogoutNavBar />
      <div className="container px-4 py-2">
        <div className="row g-3">
          <div className="col-md-8">
            {/* Your Recent help requests */}
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Open Service Request</h6>
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
                  <a href="#" className="btn btn-sm btn-outline-primary mb-1 w-100">Accept</a>
                  <a href="#" className="btn btn-sm btn-link mb-2">More Info</a>
                </div>
              </div>
              {/* repeat item */}
              {/* repeat item */}
              <div className="row g-0 mt-3">
                <div className="col-auto">
                  <div className="calendar me-3">
                    <span className="calendar-month">Oct</span>
                    <span className="calendar-day">25</span>
                  </div>
                </div>
                <div className="col border-bottom">
                  <span className="d-block mb-1">Food Collection</span>
                  <span className="rounded badge bg-soft-primary">Open</span>
                </div>
                <div className="col-auto border-bottom text-center" style={{ width: '100px' }}>
                  <a href="#" className="btn btn-sm btn-outline-primary mb-1 w-100">Accept</a>
                  <a href="#" className="btn btn-sm btn-link mb-2">More Info</a>
                </div>
              </div>
              {/* repeat item */}
              <small className="d-block text-end mt-3">
                <a href="#">View all</a>
              </small>
            </div>
            {
              isVolunteer &&
              <>
              </>
            }
            <div class="my-3 p-3 bg-body rounded shadow-sm">
              <Form.Group className="form-check-inline m-0">
                <Form.Label className="form-check-label d-block m-0 me-2">
                  Need help?
                </Form.Label>
                <input id="professional" name="help" type="radio" class="form-check-input me-1" onChange={() => { setProfessionalHelp(!professionalHelp); setVolunteerHelp(false) }} />
                <label class="form-check-label me-3" for="professional">Professional</label>
                <input id="volunteer" name="help" type="radio" class="form-check-input me-1" onChange={() => { setVolunteerHelp(!volunteerHelp); setProfessionalHelp(false) }} />
                <label class="form-check-label" for="volunteer">Volunteer</label>
              </Form.Group>
            </div>

            {
              professionalHelp &&
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <Assistant />
              </div>
            }
            {
              volunteerHelp &&
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <NeedHelp />
              </div>
            }
            <Link to="/AssistivePage" className="btn btn-lg btn-primary rounded-pill py-3 w-100">
              Assistive Services in 3eyes
            </Link>
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '80px' }}>
              {/* Feeling Low Card */}
              <div class="mb-3 p-3 bg-body rounded shadow-sm bg-holder">
                <h6 class="border-bottom pb-2 mb-0">
                  Feeling low?
                </h6>
                <div className="d-flex pt-3 mb-3">
                  Activate Happiness Together with us now!
                </div>
                <Link to="/Happiness" className="btn btn-outline-primary rounded-pill px-4">
                  Get happiness now!
                </Link>
              </div>
              {/* Feeling Low Card Ends */}

              {/* Profile Info Card */}
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <div className="row g-0">
                  <div className="col-auto">
                    <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                  </div>
                  <div className="col">
                    <h6 class="mb-0">
                      Varun
                    </h6>
                    <div className="small text-muted mb-1 border-bottom pb-1">
                      Evangelist
                    </div>
                    <div className="small lh-sm">
                      <span className="d-inline-block me-4">Followers: 10</span>
                      <span className="d-inline-block">Following: 24</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Info Ends */}
              {/* Events Cards */}
              {(help && help.helpTitle && isRequested && !isVolunteer) &&
                <div class="my-3 p-3 bg-body rounded shadow-sm">
                  <h6 class="border-bottom pb-2 mb-0">
                    Open Requests
                  </h6>
                  <div className="d-flex pt-3">
                    <div className="calendar">
                      <span className="calendar-month">{date.toLocaleString("en", { month: "long" }).substring(0, 3)}</span>
                      <span className="calendar-day">{date.toLocaleString("en", { day: "numeric" })}</span>
                    </div>
                    <div className="ms-3 pb-3 small lh-sm border-bottom">
                      <h6 class="mb-0">
                        <span className="d-flex justify-content-between flex-column flex-md-row">
                          <small className="d-inline-block me-2">{help.helpTitle}</small>
                          <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                        </span>
                      </h6>
                      <small className="d-block mb-2">
                        {help.category}
                      </small>
                      <small className="d-block text-muted mb-1">{help.time}</small>
                      <small className="d-block text-muted mb-2">{help.pickUp}</small>
                      <span className="d-block mb-2">{help.notes}</span>
                    </div>
                  </div>
                </div>
              }
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
