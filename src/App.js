import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js"
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './home';
import SignUp from './singup/singup';
import Login from './login/login';
// import WaveLeftSvg from './assets/images/wave-left.svg';
import LandingPage from './landingpage/landingpage';
import NeedHelp from './help/needhelp';


function App() {
  return (
    <div>
      <Router>
        {/* <img className="wave wave-l" src={WaveLeftSvg} /> */}
        <nav className="navbar navbar-expand-lg navbar-light px-lg-4 py-lg-3 shadow mb-5" aria-label="">
          <div className="container-fluid">
            <Link to="/Home" className="navbar-brand p-0 me-2" aria-label="iii">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-inline-block my-1 me-2" viewBox="0 0 40 32" role="img">
                <path d="M40 16C40 16 31 28 20 28C9 28 0 16 0 16C0 16 9 4 20 4C31 4 40 16 40 16Z" fill="black" />
                <circle cx="20" cy="10" r="2" fill="white" />
                <circle cx="13" cy="14" r="2" fill="white" />
                <circle cx="27" cy="14" r="2" fill="white" />
                <rect x="11" y="18" width="4" height="12" rx="2" fill="white" />
                <rect x="18" y="14" width="4" height="17" rx="2" fill="white" />
                <rect x="25" y="18" width="4" height="12" rx="2" fill="white" />
              </svg>
              <span>i</span>nclude <span>i</span>nvolve <span>i</span>nspire
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarsExample09">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={NavLink} to="/SingUp">Register</Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/SingUp" exact component={SignUp} />
        <Route path="/LandingPage" exact component={LandingPage} />
        <Route path="/NeedHelp" exact component={NeedHelp} />

      </Router>
    </div>
  );
}

export default App;
