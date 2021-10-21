import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

export default function LandingPage(props) {
    const { firstName, lastName } =
        (props.location && props.location.state) || {};

    return (

        <body>

            <h1>Welcome {firstName} {lastName} </h1>

            {/* <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="calendar" viewBox="0 0 16 16">
                    <path
                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z">
                    </path>
                    <path
                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                    </path>
                </symbol>
                <symbol id="pick" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z">
                    </path>
                </symbol>
                <symbol id="drop" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                </symbol>
                <symbol id="time" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </symbol>
            </svg> */}

            <div className="container px-4 py-5">
                <div className="d-grid gap-4 d-sm-flex justify-content-sm-center align-items-center">
                    <h2 className="display-5 fw-bold lh-1 mb-3 me-auto">My Events</h2>
                    <Nav.Link as={NavLink} to="/NeedHelp">Need Help</Nav.Link>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            // style="background-image: url('assets/images/church.jpg')" 
                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="d-flex flex-column h-100 p-4 px-md-5 text-white">
                                <div className="d-flex justify-content-end">
                                    <span className="badge bg-warning w-badge">Pending</span>
                                </div>
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Church Prayer</h2>
                                <div className="row gx-0 gy-1 mt-auto">
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            {/* <use xlinkHref="#pick"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">#3759 Boring Lane, San Francisco, CA 94107</small>
                                    <div className="col-12"></div>
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            {/* <use xlinkHref="#drop"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">St. Philomena's Cathedral, #3834 Larry Street, San Francisco, CA 94108</small>
                                    <div className="col-12"></div>
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="16" height="16">
                                            {/* <use xlinkHref="#calendar"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">Nov 11, 2021</small>
                                    <div className="col-12"></div>
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="16" height="16">
                                            {/* <use xlinkHref="#time"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">10:00 am - 12:00 pm</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            // style="background-image: url('assets/images/hospital.jpg')" 
                            data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="d-flex flex-column h-100 p-4 px-md-5 text-white">
                                <div className="d-flex justify-content-end">
                                    <span className="badge bg-success w-badge">Scheduled</span>
                                </div>
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Routine Hospital Visit</h2>
                                <div className="row gx-0 gy-1 mt-auto">
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            {/* <use xlinkHref="#pick"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">#3834 Larry Street, San Francisco, CA 94108</small>
                                    <div className="col-12"></div>
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="1em" height="1em">
                                            {/* <use xlinkHref="#drop"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">Apollo Hospital, #3759 Boring Lane, San Francisco, CA 94107</small>
                                    <div className="col-12"></div>
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="16" height="16">
                                            {/* <use xlinkHref="#calendar"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">Nov 12, 2021</small>
                                    <div className="col-12"></div>
                                    <div className="col-auto">
                                        <svg className="bi me-2" width="16" height="16">
                                            {/* <use xlinkHref="#time"></use> */}
                                        </svg>
                                    </div>
                                    <small className="col">4:30 pm - 6:00 pm</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container px-4 py-5">
                <h2 className="display-5 fw-bold lh-1 mb-3">Upcoming Events</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('assets/images/grabber.jpg')">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Makeathon to build tech for people with disabilities</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        &nbsp;
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
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('assets/images/innovation.jpg')">
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Students with disability to benefit from innovative programs</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        &nbsp;
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
                        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('assets/images/physical.jpg');">
                            <div className="d-flex flex-column h-100 p-5 pb-3">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Strengthening the collection of data on disability</h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        &nbsp;
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
            </div> */}

            {/* <!-- Vertically centered scrollable modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"
                            // style="right: 20px;top: 20px;"
                            ></button>
                            <svg className="bd-placeholder-img mb-3" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#999"></rect><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-lg rounded-pill px-4">Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
