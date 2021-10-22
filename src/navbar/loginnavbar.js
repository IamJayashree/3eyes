import {
    BrowserRouter as Router,
    Link,
    NavLink
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default function LoginNavBar() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light px-lg-4 py-3 shadow sticky-top bg-light" aria-label="">
                    <div className="container px-4">
                        <Link to="/Home" className="navbar-brand p-0 me-2 fw-bold lh-lg" aria-label="iii">
                            <svg className="d-inline-block my-1 me-2" xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" role="img">
                                <use xlinkHref="#logo"></use>
                            </svg>
                            <span>i</span>nclude{' '}
                            <span>i</span>nvolve{' '}
                            <span>i</span>nspire
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-3E" aria-controls="navbar-3E" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbar-3E">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-5 ms-lg-auto mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">How it works? add a new page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/SignIn">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/SignUp">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Router>
        </>
    );
}