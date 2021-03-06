import React from "react";
import { Link } from "react-router-dom";

import HomeImage from './assets/images/home.png';
import Grabber from './assets/images/grabber.jpg';
import Physical from './assets/images/physical.jpg';
import Innovation from './assets/images/innovation.jpg';
import WaveLgSVG from './assets/images/wave-lg.svg';
import LoginNavBar from "./navbar/loginnavbar";
import Footer from "./footer";

export default function Home(props) {
  return (
    <>
      <LoginNavBar />

      <img className="wave wave-lg" src={WaveLgSVG} alt="3I" />

      <div className="container px-4">
        <div className="row flex-lg-row-reverse align-items-center mt-3 mb-4 g-lg-5 py-lg-5">
          <div className="col-10 col-sm-8 col-lg-6 m-auto">
            <img src={HomeImage} className="d-block mx-lg-auto img-fluid" alt="3I" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="lh-1 mb-2 mx-4 mx-lg-0">
              Everything for everyone by everyone
            </h1>
            <p className="lead mb-0">
              Include everyone, Involve in community &amp; Inspire every one
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-4 d-lg-none" />
      <div className="container px-4 pb-md-5">
        <h2 className="lh-1 mb-3 mb-md-4">Upcoming Events</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-3 g-lg-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg mb-3" style={{ backgroundImage: `url(${Grabber})` }}>
              <div className="d-flex flex-column h-100 px-4 py-lg-4 pb-lg-3 text-white">
                <h2 className="pt-3 mt-3 pt-md-5 mt-md-5 mb-4 lh-1">
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
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Innovation})` }}>
              <div className="d-flex flex-column h-100 px-4 py-lg-4 pb-lg-3 text-white">
                <h2 className="pt-3 mt-3 pt-md-5 mt-md-5 mb-4 lh-1">Students with disability to benefit from innovative programs</h2>
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
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${Physical})` }}>
              <div className="d-flex flex-column h-100 px-4 py-lg-4 pb-lg-3 text-white">
                <h2 className="pt-3 mt-3 pt-md-5 mt-md-5 mb-4 lh-1">
                  Strengthening the collection of data on disability
                </h2>
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
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 d-none d-md-block">
        <div className="d-grid gap-4 d-sm-flex justify-content-sm-center align-items-center bg-dark g-4 rounded-3 text-light p-5 my-3 my-md-5">
          <p className="display-6">Just volunteer to do something good for the one who needs it badly</p>
          <Link to="SignUp" className="btn btn-lg btn-light rounded-pill py-3 px-5">Register</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
