import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Avatar from '../assets/images/avatar.jpg';
import Avatar1 from '../assets/images/nick.jpg';

export default function InNetwork() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="floating-button">
                <span class="spinner-grow spinner-grow-sm me-3" role="status" aria-hidden="true"></span>
                Need assistance?
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Need Professional Help?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Advisory assistance</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar1} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            Nick Vujicic
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Australian evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            Preethi Srinivasan
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Cricketer, Evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Mental Helath assistance</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar1} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            Nick Vujicic
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Australian evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            Preethi Srinivasan
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Cricketer, Evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Personal Care</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar1} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            Nick Vujicic
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Australian evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            Preethi Srinivasan
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Cricketer, Evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Educational assistance</Accordion.Header>
                            <Accordion.Body>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar1} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col mb-3 pb-3 border-bottom">
                                        <h6 class="mb-0">
                                            Nick Vujicic
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Australian evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-auto">
                                        <img class="img-thumbnail me-3 img-fluid rounded-circle shadow-sm" src={Avatar} width="64" height="64" alt="" />
                                    </div>
                                    <div className="col">
                                        <h6 class="mb-0">
                                            Preethi Srinivasan
                                        </h6>
                                        <div className="small mb-1 pb-1">
                                            <small>Cricketer, Evangelist</small>
                                        </div>
                                        <a href="/NeedHelp" className="btn btn-sm px-3 btn-outline-primary">Request Assistance</a>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}