import React from "react";
import AppSvg from './assets/images/app.svg';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from "react-router-dom";

export default function Home(props) {
    return (
        <>
            <div className="contain">
                <div className="landing-content">
                    <div>
                        <h2 className="display-5">
                            Include Involve Inspire
                        </h2>
                        <p className="lead mb-5">
                            our mission is to provide local help for  via tech for free. Seek help or volunteer to give for a good cause
                        </p>
                        <Link to="/SingUp" className="btn btn-lg btn-primary rounded-pill py-3 px-5">Register</Link>
                    </div>
                </div>
                <div className="img">
                    <img src={AppSvg} />
                </div>
            </div>
            <div className="container">
                <div className="vh-30"></div>
                <div className="row align-items-center bg-dark my-5 p-5 rounded-3 text-light">
                    <div className="col">
                        <p className="display-6">Just volunteer to do something good for the one who needs it badly</p>
                    </div>
                    <div className="col-auto">
                        <Link to="/Login" className="btn btn-lg btn-light rounded-pill py-3 px-5 me-3">Login</Link>
                    </div>
                </div>
                <div className="vh-30"></div>
                <div className="text-center">
                    <h2 className="display-5">
                        Include Involve Inspire
                    </h2>
                    <p className="lead mb-5">
                        This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
                    </p>
                </div>
                <div className="vh-30"></div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Category</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <Link to='/' className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#0d6efd"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Category</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <Link to='/' className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#0d6efd"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Category</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <Link to='/' className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#0d6efd"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">Category</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <Link to='/' className="stretched-link">Continue reading</Link>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#0d6efd"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="vh-30"></div>
            </div>
        </>
    );
}