import React from 'react';
import { Link } from "react-router-dom";

import LogoutNavBar from '../navbar/logoutnavbar';
// import Explorations from './explorations';
import '../index.css';
import './explorations.css';

export default function LandingPage(props) {
  const name = localStorage.getItem("userName");
  const isRequested = localStorage.getItem("isRequested");
  const isVolunteer = localStorage.getItem("isVolunteer");

  const help = JSON.parse(localStorage.getItem("helpObj"));


  return (
    <>
      <LogoutNavBar />
      <div className="container px-4 py-2">
        <div className="row g-3">
          <div className="col-md-8">

            {/* Your Recent help requests */}
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Volunteer help requests</h6>
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
                          <small className="d-inline-block me-2">Visit to Citi Park</small>
                          <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-primary">Scheduled</span></span>
                        </span>
                      </h6>
                      <small className="d-block mb-2">
                        <a href="#">Peter parker</a>
                        (physical)
                      </small>
                      <small className="d-block text-muted mb-1">5:00pm - 7:00pm.</small>
                      <small className="d-block text-muted mb-2">City Park, 1399 Post St, San Francisco, CA 94109</small>
                      <span className="d-block">I need some one to assistance me to visit citi park due to some...</span>
                    </div>
                    <div className="text-md-center">
                      <button className="btn btn-sm px-3 btn-pill btn-outline-primary">Track</button>
                      <small class="d-block mt-2">Accepted by<br/><a href="#">John doe</a></small>
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
            {/* Your Recent help requests End */}

            {/* Assistive services */}
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h6 className="border-bottom pb-2 mb-0">Assistive services</h6>
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
                      <small className="d-block text-muted mb-1">5:00pm - 7:00pm.</small>
                      <small className="d-block text-muted mb-2">City Park, 1399 Post St, San Francisco, CA 94109</small>
                      <span className="d-block">I need some one to assistance me to visit citi park due to some...</span>
                    </div>
                    <div className="text-md-center">
                      <button className="btn btn-sm px-3 btn-pill btn-outline-primary">Track</button>
                      <small class="d-block mt-2">Accepted by<br/><a href="#">John doe</a></small>
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
            {/* Volunteer services End */}
          </div>
          <div className="col-md-4">
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
            <div class="my-3 p-3 bg-body rounded shadow-sm">
              <h6 class="border-bottom pb-2 mb-0">
                Upcoming Requests
              </h6>
              <div className="d-flex pt-3">
                <div className="calendar">
                  <span className="calendar-month">Oct</span>
                  <span className="calendar-day">24</span>
                </div>
                <div className="ms-3 pb-3 small lh-sm border-bottom">
                  <h6 class="mb-0">
                    <span className="d-flex justify-content-between flex-column flex-md-row">
                      <small className="d-inline-block me-2">Visit to Citibank</small>
                      <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Pending</span></span>
                    </span>
                  </h6>
                  <small className="d-block mb-2">
                    <a href="#">John doe</a>
                    (Visual)
                  </small>
                  <small className="d-block text-muted mb-1">5:00pm - 7:00pm.</small>
                  <small className="d-block text-muted mb-2">City Park, 1399 Post St, San Francisco, CA 94109</small>
                  <span className="d-block mb-2">I need some one to assistance me to visit citi park due to some...</span>
                  <button className="btn btn-sm px-3 btn-primary">Accept</button>
                </div>
              </div>
              <small class="d-block text-end mt-3">
                <a href="#">View all</a>
              </small>
            </div>
            {/* Events Cards Ends */}

            {/* Profile Info Card */}
            <div class="my-3 p-3 bg-body rounded shadow-sm position-relative">
              <h6 class="border-bottom pb-2 mb-0">
                {name}
              </h6>
              <div className="pt-3 small lh-sm">
                <small className="d-block">Profession: Doctor</small>
                <small className="d-block">Followers: 7</small>
                <small className="d-block">Following: 1</small>
              </div>
            </div>
            {/* Profile Info Ends */}
          </div>
        </div>
      </div>

      <div className="container px-4 py-5">
        {
          isVolunteer === 'true' &&
          <>
            <h1>Volunteer lists</h1>
          </>
        }
        {
          isRequested === 'true' &&
          <>
            <h1>Requested lists</h1>
            <div className="p-4 mb-5 bg-light rounded shadow border">
              <h5>Help is on your way</h5>

              <p className="mb-0">
                Status : In-Progress <br />
                Help Title: {help.helpTitle} <br />
                Category: {help.helpTitle} <br />
                Date: {help.date} <br />

                Comments: <br />
                A person will reach out to you!
              </p>
            </div>
          </>
        }
      </div>
      {/* <Explorations/> */}
    </>
  );
}
