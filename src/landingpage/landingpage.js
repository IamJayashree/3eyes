import React from 'react';
import { Link } from "react-router-dom";

import Church from '../assets/images/church.jpg';
import Hospital from '../assets/images/hospital.jpg';
import LogoutNavBar from '../navbar/logoutnavbar';

export default function LandingPage(props) {

  const isRequested = localStorage.getItem("isRequested");
  const isVolunteer = localStorage.getItem("isVolunteer");

  return (
    <>
      <LogoutNavBar></LogoutNavBar>
      <div className="container px-4 py-5">
        <div className="row g-5">
          <div className="col-md-8">
            <div className="">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Everything for everyone by everyone
              </h1>
              <p className="lead mb-4">
                Include everyone, Involve in community &amp; Inspire every one
              </p>
            </div>
            {
              isVolunteer === 'true' &&
              <>
                <h2 className="fw-bold lh-1 mb-3 me-auto">
                  Help requests near you
                </h2>
                <table class="table tbl">
                  <thead>
                    <tr>
                      <th>Help Type</th>
                      <th>Name</th>
                      <th>Disability</th>
                      <th width="100" className="text-center">Status</th>
                      <th width="100">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Church</b>
                        <p>few lines about the description</p>
                      </td>
                      <td>Charlie</td>
                      <td>Blind</td>
                      <td>
                        <span className="badge bg-success d-block">open</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-sm btn-primary rounded-pill w-100">Accept</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Hospital</b>
                        <p>few lines about the description</p></td>
                      <td>John</td>
                      <td>Physical</td>
                      <td>
                        <span className="badge bg-success d-block">open</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-sm btn-primary rounded-pill w-100">Accept</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            }
            <h2 className="fw-bold lh-1 mb-3 me-auto">
              Upcoming Events
            </h2>
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Church})` }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex flex-column h-100 p-4 px-md-5 text-white">
                    <div className="d-flex justify-content-end">
                      <span className="badge bg-warning w-badge">Pending</span>
                    </div>
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Church Prayer</h2>
                    <div className="row gx-0 gy-1 mt-auto">
                      <div className="col-auto">
                        <svg className="bi me-2" width="1em" height="1em">
                          <use xlinkHref="#pick"></use>
                        </svg>
                      </div>
                      <small className="col">#3759 Boring Lane, San Francisco, CA 94107</small>
                      <div className="col-12"></div>
                      <div className="col-auto">
                        <svg className="bi me-2" width="1em" height="1em">
                          <use xlinkHref="#drop"></use>
                        </svg>
                      </div>
                      <small className="col">St. Philomena's Cathedral, #3834 Larry Street, San Francisco, CA 94108</small>
                      <div className="col-12"></div>
                      <div className="col-auto">
                        <svg className="bi me-2" width="16" height="16">
                          <use xlinkHref="#calendar"></use>
                        </svg>
                      </div>
                      <small className="col">Nov 11, 2021</small>
                      <div className="col-12"></div>
                      <div className="col-auto">
                        <svg className="bi me-2" width="16" height="16">
                          <use xlinkHref="#time"></use>
                        </svg>
                      </div>
                      <small className="col">10:00 am - 12:00 pm</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Hospital})` }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div className="d-flex flex-column h-100 p-4 px-md-5 text-white">
                    <div className="d-flex justify-content-end">
                      <span className="badge bg-success w-badge">Scheduled</span>
                    </div>
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Routine Hospital Visit</h2>
                    <div className="row gx-0 gy-1 mt-auto">
                      <div className="col-auto">
                        <svg className="bi me-2" width="1em" height="1em">
                          <use xlinkHref="#pick"></use>
                        </svg>
                      </div>
                      <small className="col">#3834 Larry Street, San Francisco, CA 94108</small>
                      <div className="col-12"></div>
                      <div className="col-auto">
                        <svg className="bi me-2" width="1em" height="1em">
                          <use xlinkHref="#drop"></use>
                        </svg>
                      </div>
                      <small className="col">Apollo Hospital, #3759 Boring Lane, San Francisco, CA 94107</small>
                      <div className="col-12"></div>
                      <div className="col-auto">
                        <svg className="bi me-2" width="16" height="16">
                          <use xlinkHref="#calendar"></use>
                        </svg>
                      </div>
                      <small className="col">Nov 12, 2021</small>
                      <div className="col-12"></div>
                      <div className="col-auto">
                        <svg className="bi me-2" width="16" height="16">
                          <use xlinkHref="#time"></use>
                        </svg>
                      </div>
                      <small className="col">4:30 pm - 6:00 pm</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{top: '100px'}}>
              <div className="p-4 mb-5 bg-light rounded shadow border">
                <h5>Feeling low?</h5>
                <p>Activate Happiness Together with us now!</p>
                <Link to="/Happiness" className="btn btn-outline-primary rounded-pill px-4">
                  Get happiness now!
                </Link>
              </div>
              {
                isRequested &&
                <div className="p-4 mb-5 bg-light rounded shadow border">
                  <h5>Help is on your way</h5>
                  <p className="mb-0">
                    Esther will reach out to you!<br/>
                    Contact Details yet to be added
                  </p>
                </div>
              }
              <div className="p-4 mb-5 bg-light rounded shadow border">
                <h5>Assistive services</h5>
                <p>Activate Happiness Together with us now!</p>
                <Link to="/Happiness" className="btn btn-outline-primary rounded-pill px-4">
                  Get happiness now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
