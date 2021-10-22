import React from 'react';

import LoginNavBar from "../navbar/loginnavbar";

export default function HowItWorks(props) {
  return (
    <>
      <LoginNavBar></LoginNavBar>
      <div className="container px-4 py-5">
        <h2 className="display-5 fw-bold lh-1 mb-3 mb-lg-5">
          How it works?
        </h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/mskj1JxlzoU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>  
      </div>
    </>
  );
}
