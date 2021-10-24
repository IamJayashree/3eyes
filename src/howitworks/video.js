import React from 'react';

export default function Video(props) {
  return (
    <div className="container px-4 py-5">
      <h2 className="display-5 lh-1 mb-3 mb-lg-5">
        How it works?
      </h2>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="Top 6 Assistive Technology For People With Disabilities" className="embed-responsive-item" src="https://www.youtube.com/embed/mskj1JxlzoU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>  
    </div>
  );
}
