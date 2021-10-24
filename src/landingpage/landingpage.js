import React, { useState } from 'react';
import { Link } from "react-router-dom";

import LogoutNavBar from '../navbar/logoutnavbar';
// import Explorations from './explorations';
import Avatar from '../assets/images/avatar.jpg';

import '../index.css';
import './explorations.css';

export default function LandingPage(props) {
  const name = localStorage.getItem("userName");
  const isRequested = localStorage.getItem("isRequested");
  const isVolunteer = localStorage.getItem("isVolunteer");
  const help = JSON.parse(localStorage.getItem("helpObj"));
  let date = (help != null && help.date) ? new Date(help.date) : new Date();

  return (
    <>
      <LogoutNavBar />
      <div className="container px-4 py-2">
        <div className="row g-3">
          <div className="col-md-8">
            {/* Your Recent help requests */}
            {
              isVolunteer &&
              <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                  <h6 className="border-bottom pb-2 mb-0">Volunteer Requestes</h6>
                  {/* repeat item */}
                  <div className="d-flex pt-3">
                    <div className="calendar">
                      <span className="calendar-month">Oct</span>
                      <span className="calendar-day">24</span>
                    </div>
                    <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                      <div className="d-flex justify-content-between flex-column flex-md-row">
                        <div className="mb-3 mb-md-0">
                          <h6 class="mb-0">
                            <span className="d-flex flex-column flex-md-row">
                              <small className="d-inline-block me-2">Ride to Church</small>
                              <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-primary">Scheduled</span></span>
                            </span>
                          </h6>
                          <small className="d-block mb-2">
                            <a href="#">Peter parker</a>
                            (Recreational)
                          </small>
                          <small className="d-block text-muted mb-1">5:00pm - 7:00pm</small>
                          <small className="d-block text-muted mb-2">City Park, 1399 Post St, San Francisco, CA 94109</small>
                          <span className="d-block">Need a ride to Church for Sunday fellowship</span>
                        </div>
                        <div className="text-md-center">
                          <button className="btn btn-sm px-3 btn-pill btn-outline-primary" disabled>Accepted</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* repeat item ends */}
                  {/* repeat item */}
                  <div className="d-flex pt-3">
                    <div className="calendar">
                      <span className="calendar-month">Oct</span>
                      <span className="calendar-day">25</span>
                    </div>
                    <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                      <div className="d-flex justify-content-between flex-column flex-md-row">
                        <div className="mb-3 mb-md-0">
                          <h6 class="mb-0">
                            <span className="d-flex flex-column flex-md-row">
                              <small className="d-inline-block me-2">Food Collection</small>
                              <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                            </span>
                          </h6>
                          <small className="d-block mb-2">
                            <a href="#">Windsor Community</a>
                            (Community Help)
                          </small>
                          <small className="d-block text-muted mb-1">6:00PM - 7:00PM</small>
                          <small className="d-block text-muted mb-2">Hartford, Connecticut</small>
                          <span className="d-block mb-2">
                            Collect food from your local Food Bank
                          </span>
                        </div>
                        <div className="text-md-center">
                          <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {help &&
                    <div className="d-flex pt-3">
                      <div className="calendar">
                        <span className="calendar-month">{date.toLocaleString("en", { month: "long" }).substring(0, 3)}</span>
                        <span className="calendar-day">{date.toLocaleString("en", { day: "numeric" })}</span>
                      </div>
                      <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                        <div className="d-flex justify-content-between flex-column flex-md-row">
                          <div className="mb-3 mb-md-0">
                            <h6 class="mb-0">
                              <span className="d-flex flex-column flex-md-row">
                                <small className="d-inline-block me-2">{help.helpTitle}</small>
                                <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                              </span>
                            </h6>
                            <small className="d-block mb-2">
                              <a href="#">{help.name}</a> ({help.category})
                            </small>
                            <small className="d-block text-muted mb-1">{help.time}</small>
                            <small className="d-block text-muted mb-2">{help.pickUp}</small>
                            <span className="d-block mb-2">
                              {help.notes}
                            </span>
                          </div>
                          <div className="text-md-center">
                            <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  {/* repeat item ends */}
                  <small className="d-block text-end mt-3">
                    <a href="#">View all</a>
                  </small>
                </div>

              </>
            }
            {/* Your Recent help requests End */}
            {/* Assistive services */}
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Requested for help</h6>
              {/* repeat item */}
              <div className="d-flex pt-3">
                <div className="calendar paid">
                  <span className="calendar-month">Oct</span>
                  <span className="calendar-day">24</span>
                </div>
                <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between flex-column flex-md-row">
                    <div className="mb-3 mb-md-0">
                      <h6 class="mb-0">
                        <span className="d-flex flex-column flex-md-row">
                          <small className="d-inline-block me-2">Visit to Citi Park</small>
                          <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-primary">Scheduled</span></span>
                        </span>
                      </h6>
                      <small className="d-block mb-2">
                        <a href="#">Peter parker</a>
                        (physical)
                      </small>
                      <small className="d-block text-muted mb-1">5:00pm - 7:00pm</small>
                      <small className="d-block text-muted mb-2">City Park, 1399 Post St, San Francisco, CA 94109</small>
                      <span className="d-block">I need some one to assistance me to visit citi park due to some...</span>
                    </div>
                    <div className="text-md-center">
                      <button className="btn btn-sm px-3 btn-pill btn-outline-primary">Track</button>
                      <small class="d-block mt-2">Accepted by<br /><a href="#">John doe</a></small>
                    </div>
                  </div>
                </div>
              </div>
              {/* repeat item ends */}
              {/* repeat item */}
              <div className="d-flex pt-3">
                <div className="calendar paid">
                  <span className="calendar-month">Oct</span>
                  <span className="calendar-day">25</span>
                </div>
                <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between flex-column flex-md-row">
                    <div className="mb-3 mb-md-0">
                      <h6 class="mb-0">
                        <span className="d-flex flex-column flex-md-row">
                          <small className="d-inline-block me-2">Visit to Citibank</small>
                          <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                        </span>
                      </h6>
                      <small className="d-block mb-2">
                        <a href="#">John doe</a>
                        (Visual)
                      </small>
                      <small className="d-block text-muted mb-1">6:00PM - 7:00PM</small>
                      <small className="d-block text-muted mb-2">Citibank, 1399 Post St, San Francisco, CA 94109</small>
                      <span className="d-block mb-2">
                        I need some one to assistance me to visit citibank due to...
                      </span>
                    </div>
                    <div className="text-md-center">
                      <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* repeat item ends */}
              <small className="d-block text-end mt-3">
                <a href="#">View all</a>
              </small>
            </div>
            {/* Assistive services End */}
            {/* My Network services */}
            {/* <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Public help requests / My network help requests</h6>
              <div className="d-flex pt-3">
                <div className="calendar">
                  <span className="calendar-month">Oct</span>
                  <span className="calendar-day">24</span>
                </div>
                <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between flex-column flex-md-row">
                    <div className="mb-3 mb-md-0">
                      <h6 class="mb-0">
                        <span className="d-flex flex-column flex-md-row">
                          <small className="d-inline-block me-2">Visit to Citi Park</small>
                          <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                        </span>
                      </h6>
                      <small className="d-block mb-2">
                        <a href="#">Peter parker</a>
                        (physical)
                      </small>
                      <small className="d-block text-muted mb-1">5:00pm - 7:00pm</small>
                      <small className="d-block text-muted mb-2">City Park, 1399 Post St, San Francisco, CA 94109</small>
                      <span className="d-block">I need some one to assistance me to visit citi park due to some...</span>
                    </div>
                    <div className="text-md-center">
                      <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex pt-3">
                <div className="calendar paid">
                  <span className="calendar-month">Oct</span>
                  <span className="calendar-day">25</span>
                </div>
                <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between flex-column flex-md-row">
                    <div className="mb-3 mb-md-0">
                      <h6 class="mb-0">
                        <span className="d-flex flex-column flex-md-row">
                          <small className="d-inline-block me-2">Visit to Citibank</small>
                          <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                        </span>
                      </h6>
                      <small className="d-block mb-2">
                        <a href="#">John doe</a>
                        (Visual)
                      </small>
                      <small className="d-block text-muted mb-1">6:00PM - 7:00PM</small>
                      <small className="d-block text-muted mb-2">Citibank, 1399 Post St, San Francisco, CA 94109</small>
                      <span className="d-block mb-2">
                        I need some one to assistance me to visit citibank due to...
                      </span>
                    </div>
                    <div className="text-md-center">
                      <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
                    </div>
                  </div>
                </div>
              </div>
              <small className="d-block text-end mt-3">
                <a href="#">View all</a>
              </small>
            </div> */}
            {/* My Network services End */}
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '80px' }}>
              {/* Profile Info Card */}
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                <div className="row g-0">
                  <div className="col-auto">
                    <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                  </div>
                  <div className="col">
                    <h6 class="mb-0">
                      Preethi Srinivasan
                      {/* {name} */}
                    </h6>
                    <div className="small mb-1 border-bottom pb-1">
                      <small>Cricketer, Evangelist</small>
                    </div>
                    <div className="small lh-sm">
                      <small className="d-inline-block me-5">Followers: 7</small>
                      <small className="d-inline-block">Following: 1</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profile Info Ends */}
              {/* Feeling Low Card */}
              <div class="my-3 p-3 bg-body rounded shadow-sm bg-holder">
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
      </div>
      {/* <Explorations/> */}
    </>
  );
}
