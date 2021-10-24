import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

import Avatar01 from '../assets/images/avatar/01.jpg';
import Avatar02 from '../assets/images/avatar/02.jpg';
import Avatar03 from '../assets/images/avatar/03.jpg';
import Avatar04 from '../assets/images/avatar/04.jpg';
import Avatar05 from '../assets/images/avatar/05.jpg';
import Avatar06 from '../assets/images/avatar/06.jpg';
import Avatar07 from '../assets/images/avatar/07.jpg';
import Avatar08 from '../assets/images/avatar/08.jpg';

export default function InNetwork() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const a01 = [Avatar01, "Lee Ridley", "Comedian"];
    const a02 = [Avatar02, "Sarah Gordy", "Actress"];
    const a03 = [Avatar03, "Temple Grandin", "Scientist"];
    const a04 = [Avatar04, "Rick Hansen", "Athlete"];
    const a05 = [Avatar05, "Freyja Haraldsdóttir", "Politician"];
    const a06 = [Avatar06, "Tom Shakespeare", "Sociologist & Bioethicist"];
    const a07 = [Avatar07, "Christy Brown", "Writer"];
    const a08 = [Avatar08, "Kim Peek", "Megasavant"];

    return (
        <>
            <a href="/Happiness" className="floating-button btn btn-primary rounded-pill py-3 px-4">
            <span class="spinner-grow spinner-grow-sm me-3" role="status" aria-hidden="true"></span>
                Get Happiness Now!
            </a>
            {/*
            <Button variant="primary" onClick={handleShow} className="floating-button">
                <span class="spinner-grow spinner-grow-sm me-3" role="status" aria-hidden="true"></span>
                Get Happiness Now!
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Need Professional Help?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link to="/Happiness" className="btn btn-outline-primary rounded-pill px-4" onClick={() => { setShow(false); }}>
                        Get happiness now!
                    </Link>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Advisory Assistance</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a01[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            {a01[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a01[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a02[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            {a02[2]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a02[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mental Helath</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a03[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            {a03[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a03[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a04[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            {a04[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a04[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Personal Care</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a05[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            {a05[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a05[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a06[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            {a06[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a06[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Educational</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a07[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            {a07[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a07[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={a08[0]} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            {a08[1]}
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>{a08[2]}</small>
                                        </div>
                                        <a href="/Assistant" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas> */}
        </>
    );
}