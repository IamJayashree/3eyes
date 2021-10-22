import {
  BrowserRouter as Router,
  // Route,
  // Link,
  // NavLink,
  useHistory
} from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';


export default function LogoutNavBar() {
  let history = useHistory();
  function handleLogout() {
    localStorage.clear();
    history.push("/Home");
  }

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light px-lg-4 py-3 shadow sticky-top bg-light" aria-label="">
          <div className="container px-4">
            <a href="/LandingPage" className="navbar-brand p-0 me-2 fw-bold lh-lg" aria-label="iii">
              <svg className="d-inline-block my-1 me-2" xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" role="img">
                <use xlinkHref="#logo"></use>
              </svg>
              <span>i</span>nclude{' '}
              <span>i</span>nvolve{' '}
              <span>i</span>nspire
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-3E" aria-controls="navbar-3E" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar-3E">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-5 ms-lg-auto mt-3 mt-lg-0">
                <li className="nav-item me-3">
                  <a className="nav-link" href="/HowItWork">How it works?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
    </div>
  );
}