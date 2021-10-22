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
        <div className="row align-items-md-center">
          <div className="col-md-8">
            <div className="h-100">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Everything for everyone by everyone
              </h1>
              <p className="lead mb-4">
                Include everyone, Involve in community &amp; Inspire every one
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Feeling low?</h2>
              <p>Activate Happiness Together with us now!</p>
              <Link to="/Happiness" className="btn btn-outline-primary btn-lg rounded-pill px-4">
                Get happiness now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isRequested &&
        <div className="container px-4 py-5">
          <div className="d-grid gap-4 d-sm-flex justify-content-sm-center align-items-center border-bottom border-5">
            <h2 className="display-5 fw-bold lh-1 mb-3 me-auto">
              Status
            </h2>

          </div>
          <h5> Help is on your way</h5>
          <p className="lead mb-4">
            Esther will reach out to you!
            <br />
            Contact Details yet to be added
          </p>
        </div>
      }
      <div className="container px-4 py-5">
        <div className="d-grid gap-4 d-sm-flex justify-content-sm-center align-items-center border-bottom border-5">
          <h2 className="display-5 fw-bold lh-1 mb-3 me-auto">
            My Events
          </h2>

          {isVolunteer == 'true' &&
            <Link to="/NeedHelp" className="btn btn-primary btn-lg rounded-pill px-4">
              Look for Oppurtunities
              add new page
            </Link>
          }

          <Link to="/NeedHelp" className="btn btn-primary btn-lg rounded-pill px-4">
            Create Help Event
          </Link>

        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
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

      {/* <!-- Vertically centered scrollable modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style={{ right: '20px', top: '20px' }}></button>
              <svg className="bd-placeholder-img mb-3" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#999"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-lg rounded-pill px-4">Accept</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
