import React from "react";
import { Link } from "react-router-dom";

import HomeImage from './assets/images/home.png';
import HomeCoverImage from './assets/images/homecoverimagedark.jpg';
import HomeCoverImagelight from './assets/images/homecoverimage.jpg';
import AppSvg from './assets/images/app.svg';
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

      <div class="bg-dark cover-container text-primary text-center d-flex px-4 py-5 mx-auto flex-column"
      style={{ backgroundImage: `url(${HomeCoverImage})` }}>
        <div class="py-5 my-5">
          <svg class="d-block mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="72" viewBox="0 0 40 32" role="img">
            <use xlinkHref="#logo"></use>
          </svg>
          <h1 class="display-5 fw-bold text-white">Everything for everyone by everyone</h1>
          <div class="col-lg-6 mx-auto text-white">
            <p class="fs-5 mb-4">Include everyone, Involve in community &amp; Inspire every one</p>
          </div>
        </div>
      </div>

      <div class="bg-dark cover-container d-flex px-4 py-5 mx-auto flex-column"
      style={{ backgroundImage: `url(${HomeCoverImagelight})` }}>
        <div class="container py-5 my-5">
          <div className="col-6">
            <h1 class="display-5 fw-bold">Everything for everyone by everyone</h1>
            <div class="col-lg-6 text-secondary">
              <p class="fs-5 mb-4">Include everyone, Involve in community &amp; Inspire every one</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={HomeImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-5 lh-1 mb-3">
              Everything for everyone by everyone
            </h1>
            <p className="lead mb-4">
              Include everyone, Involve in community &amp; Inspire every one
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 m-auto">
            <img src={AppSvg} className="d-block mx-lg-auto img-fluid" alt="3I" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-5 lh-1 mb-3">
              Everything for everyone by everyone
            </h1>
            <p className="lead mb-4">
              Include everyone, Involve in community &amp; Inspire every one
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5">
        <h2 className="display-5 lh-1 mb-3">Upcoming Events</h2>
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
                    <small>3d</small>
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
                    <small>4d</small>
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
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4">
        <div className="d-grid gap-4 d-sm-flex justify-content-sm-center align-items-center bg-dark my-5 g-4 p-5 rounded-3 text-light">
          <p className="display-6">Just volunteer to do something good for the one who needs it badly</p>
          <Link to="SignUp" className="btn btn-lg btn-light rounded-pill py-3 px-5">Register</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
