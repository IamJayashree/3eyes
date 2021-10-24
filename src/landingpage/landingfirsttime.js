import React, { useState } from 'react';
import { Link } from "react-router-dom";

import LogoutNavBar from '../navbar/logoutnavbar';
// import Explorations from './explorations';
import Avatar from '../assets/images/avatar/14.jpg';

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
            {/* Assistive services */}
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h5 className="border-bottom pb-2 mb-0">Requested for help</h5>
              {/* repeat item */}
              <div className="d-flex pt-3">
                <div className="calendar">
                  <span className="calendar-month">Oct</span>
                  <span className="calendar-day">25</span>
                </div>
                <div className="ms-3 pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between flex-column">
                    <h5 className="mb-0">
                      <span className="d-flex flex-column flex-md-row">
                        <small className="d-inline-block me-2">Visit to Citi Park</small>
                        <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-primary">Open</span></span>
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="text-md-center border-bottom">
                  <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
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
                  <div className="d-flex justify-content-between flex-column">
                    <h5 className="mb-0">
                      <span className="d-flex flex-column flex-md-row">
                        <small className="d-inline-block me-2">Visit to Citi Park</small>
                        <span className="mt-1 mb-2 m-md-0"><span className="rounded badge bg-soft-warning">Open</span></span>
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="text-md-center border-bottom">
                  <button className="btn btn-sm px-3 btn-pill btn-primary">Accept</button>
                </div>
              </div>
              {/* repeat item ends */}
              <small className="d-block text-end mt-3">
                <a href="#">View all</a>
              </small>
            </div>
            <br />
            <div className="">
              <label className="form-label mb-0">Need Help?</label><br/>
              <div className="my-3">
                <div className="form-check-inline">
                  <input id="a" name="disability" type="radio" className="form-check-input me-2"/>
                  <label className="form-check-label" for="a">Professional</label>
                </div>
                <div className="form-check-inline">
                  <input id="b" name="disability" type="radio" className="form-check-input me-2"/>
                  <label className="form-check-label" for="b">Assistive</label>
                </div>
              </div>
            </div>
            <br />
            <button className="btn fz-3 btn-pill w-100 p-3 btn-lg btn-primary">
              Assistive Services in 3 Eyes
            </button>
          </div>
        </div>
      </div>
      {/* <Explorations/> */}
    </>
  );
}
