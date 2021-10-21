import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './home';
import SignUp from './signup/signup';
import SignIn from './signin/signin';
import LandingPage from './landingpage/landingpage';
import NeedHelp from './help/needhelp';


function App() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="logo" viewBox="0 0 40 32">
          <path d="M35.5312 16C37.8147 13.0043 39 10.2857 39 10.2857C39 10.2857 30.7011 0 20.4639 0C10.2266 0 2 10.2857 2 10.2857C2 10.2857 10.0844 3.42857 19.3438 3.42857C28.6032 3.42857 34.375 11.4286 34.375 11.4286C34.375 11.4286 33.8622 12.1394 32.8969 13.1373C30.096 10.4555 25.3301 6.85714 19.9219 6.85714C11.3011 6.85714 4.3125 16 4.3125 16C4.3125 16 11.3011 25.1429 19.9219 25.1429C25.3301 25.1429 30.096 21.5445 32.8969 18.8627C33.8622 19.8606 34.375 20.5714 34.375 20.5714C34.375 20.5714 28.6032 28.5714 19.3438 28.5714C10.0844 28.5714 2 21.7143 2 21.7143C2 21.7143 10.2266 32 20.4639 32C30.7011 32 39 21.7143 39 21.7143C39 21.7143 37.8147 18.9958 35.5312 16Z" fill="black" />
          <path d="M29 22.0194V21C29 19.8954 28.1046 19 27 19C25.8954 19 25 19.8954 25 21V24.1368C26.4402 23.5784 27.7851 22.833 29 22.0194Z" fill="white" />
          <path d="M22 24.9696V17C22 15.8954 21.1046 15 20 15C18.8954 15 18 15.8954 18 17V24.9945C18.6298 25.0908 19.2712 25.1429 19.9219 25.1429C20.6265 25.1429 21.3201 25.0818 22 24.9696Z" fill="white" />
          <path d="M15 24.1965V21C15 19.8954 14.1046 19 13 19C11.8954 19 11 19.8954 11 21V22.1232C12.2178 22.9254 13.5625 23.6553 15 24.1965Z" fill="white" />
          <circle cx="20" cy="11" r="2" fill="#0D6EFD" />
          <circle cx="13" cy="15" r="2" fill="#0D6EFD" />
          <circle cx="27" cy="15" r="2" fill="#0D6EFD" />
        </symbol>
        <symbol id="calendar" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </symbol>
        <symbol id="pick" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
        </symbol>
        <symbol id="drop" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
          <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
        </symbol>
        <symbol id="time" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
        </symbol>
      </svg>
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
                  <Nav.Link as={NavLink} to="/SignIn">Login</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={NavLink} to="/SignUp">Register</Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/LandingPage" exact component={LandingPage} />
        <Route path="/NeedHelp" exact component={NeedHelp} />
      </Router>
    </>
  );
}

export default App;
