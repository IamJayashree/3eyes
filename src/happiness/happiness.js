import React from 'react';
import { Link } from "react-router-dom";

import Grabber from '../assets/images/grabber.jpg';
import Physical from '../assets/images/physical.jpg';
import Innovation from '../assets/images/innovation.jpg';

export default function LandingPage(props) {
  const { firstName, lastName } =
    (props.location && props.location.state) || {};

  return (
    <>
      <div className="container px-4 py-5">
        <h2 className="display-5 fw-bold lh-1 mb-3">
          Turn the table for happiness - Today's session
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Grabber})` }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">
                  Makeathon to build tech for people with disabilities
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    {' '}
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#pick"></use>
                    </svg>
                    <small>Berkeley</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar"></use>
                    </svg>
                    <small>6:00 pm</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Innovation})` }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Students with disability to benefit from innovative programs</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    {' '}
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#pick"></use>
                    </svg>
                    <small>New South Wales</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar"></use>
                    </svg>
                    <small>7:00 pm</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Physical})` }}>
              <div className="d-flex flex-column h-100 p-5 pb-3">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Strengthening the collection of data on disability</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    {' '}
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#pick"></use>
                    </svg>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar"></use>
                    </svg>
                    <small>8:00 pm</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Vertically centered scrollable modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style={{right: '20px', top: '20px'}}></button>
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
