import React from 'react';
import { Link } from "react-router-dom";

import LogoutNavBar from '../navbar/logoutnavbar';

import Avatar from '../assets/images/avatar/14.jpg';
import Avatar01 from '../assets/images/avatar/01.jpg';
import Avatar02 from '../assets/images/avatar/02.jpg';
import Avatar03 from '../assets/images/avatar/03.jpg';
import Avatar04 from '../assets/images/avatar/04.jpg';
import Avatar05 from '../assets/images/avatar/05.jpg';
import Avatar06 from '../assets/images/avatar/06.jpg';
import Avatar07 from '../assets/images/avatar/07.jpg';
import Avatar08 from '../assets/images/avatar/08.jpg';
import Avatar09 from '../assets/images/avatar/09.jpg';
import Avatar10 from '../assets/images/avatar/10.jpg';
import Avatar11 from '../assets/images/avatar/11.jpg';
import Avatar12 from '../assets/images/avatar/12.jpg';
import Avatar13 from '../assets/images/avatar/13.jpg';

export default function myMetwork(props) {
  const a01 = [Avatar01, "Lee Ridley", "Comedian"];
  const a02 = [Avatar02, "Sarah Gordy", "Actress"];
  const a03 = [Avatar03, "Temple Grandin", "Scientist"];
  const a04 = [Avatar04, "Rick Hansen", "Athlete"];
  const a05 = [Avatar05, "Freyja Haraldsdóttir", "Politician"];
  const a06 = [Avatar06, "Tom Shakespeare", "Sociologist & Bioethicist"];
  const a07 = [Avatar07, "Christy Brown", "Writer"];
  const a08 = [Avatar08, "Kim Peek", "Megasavant"];
  const a09 = [Avatar09, "John Hockenberry", "Journalist"];
  const a10 = [Avatar10, "Esther Vergeer", "Tennis player"];
  const a11 = [Avatar11, "Malathi Krishnamurthy", "Athlete"];
  const a12 = [Avatar12, "Ralph Braun", "Founder & CEO"];
  const a13 = [Avatar13, "Preethi Srinivasan", "Cricketer"];

  return (
    <>
      <LogoutNavBar></LogoutNavBar>
      <div className="container px-4 py-2 mb-4">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="mt-3 p-3 bg-body rounded shadow-sm">
              <div className="align-items-center row border-bottom pb-2 mb-4 g-0">
                <div className="col">
                  <h6 className="mb-0">My Connections (10)</h6>
                </div>
                <div className="col-auto">
                  <input style={{width:'150px'}} placeholder="Search..." type="text" className="form-control form-control-sm" />
                </div>
              </div>
              <div className="text-center g-4 row row row-cols-2 row-cols-lg-3 align-items-stretch">
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a01[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a01[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a01[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a02[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a02[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a02[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a03[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a03[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a03[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a04[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a04[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a04[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a05[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a05[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a05[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a06[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a06[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a06[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a07[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a07[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a07[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a11[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a11[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a11[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a12[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a12[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a12[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
                {/* repeat items */}
                <div className="col">
                  <img class="img-thumbnail mb-3 img-fluid rounded-circle shadow-sm" src={a13[0]} width="100" height="100" alt="" />
                  <h6 className="mb-0">
                    {a13[1]}
                  </h6>
                  <span className="text-muted d-block mb-2">
                    {a13[2]}
                  </span>
                  <a className="btn btn-sm btn-outline-primary" href="/NeedHelp">Request help</a>
                </div>
                {/* repeat items ends */}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/* Profile Info Card */}
            <div class="mt-3 p-3 bg-body rounded shadow-sm">
              <div className="row g-0">
                <div className="col-auto">
                  <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                </div>
                <div className="col">
                  <h6 class="mb-0">
                    Nick Vujicic
                  </h6>
                  <div className="small mb-1 border-bottom pb-1">
                    <span>Evangelist</span>
                  </div>
                  <div className="small lh-sm">
                    <span className="d-inline-block me-4">Followers: 10</span>
                    <span className="d-inline-block">Following: 24</span>
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
            {/* Invitations */}
            <div class="mt-3 p-3 bg-body rounded shadow-sm">
              <h6 class="border-bottom pb-2 mb-3">
                Invitation to connect
              </h6>
              <div className="row g-0 mb-3">
                <div className="col-auto">
                  <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a08[0]} width="64" height="64" alt="" />
                </div>
                <div className="col border-bottom pb-2">
                  <h6 class="mb-0">
                    {a08[1]}
                  </h6>
                  <div className="small text-muted">
                    <span>{a08[2]}</span>
                  </div>
                  <div className="small">
                    <span>2 mutual connections</span>
                  </div>
                </div>
                <div className="col-auto border-bottom">
                  <button className="btn btn-sm btn-outline-primary">Accept</button><br />
                  <button className="btn btn-sm btn-link">Ignore</button>
                </div>
              </div>
              <div className="row g-0 mb-3">
                <div className="col-auto">
                  <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a09[0]} width="64" height="64" alt="" />
                </div>
                <div className="col border-bottom pb-2">
                  <h6 class="mb-0">
                    {a09[1]}
                  </h6>
                  <div className="small text-muted">
                    <span>{a09[2]}</span>
                  </div>
                  <div className="small">
                    <span>5 mutual connections</span>
                  </div>
                </div>
                <div className="col-auto border-bottom">
                  <button className="btn btn-sm btn-outline-primary">Accept</button><br />
                  <button className="btn btn-sm btn-link">Ignore</button>
                </div>
              </div>
              <div className="row g-0">
                <div className="col-auto">
                  <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a10[0]} width="64" height="64" alt="" />
                </div>
                <div className="col">
                  <h6 class="mb-0">
                    {a10[1]}
                  </h6>
                  <div className="small text-muted">
                    <span>{a10[2]}</span>
                  </div>
                  <div className="small">
                    <span>2 mutual connections</span>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-sm btn-outline-primary">Accept</button><br />
                  <button className="btn btn-sm btn-link">Ignore</button>
                </div>
              </div>
            </div>
            {/* Invitations Ends */}
          </div>
        </div>
        <div><br /><br /><br /></div>
      </div>
    </>
  );
}
