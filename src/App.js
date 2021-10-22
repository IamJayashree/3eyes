import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './home';
import SignUp from './signup/signup';
import SignIn from './signin/signin';
import LandingPage from './landingpage/landingpage';
import NeedHelp from './help/needhelp';
import Happiness from './happiness/happiness';
import Registration from './signup/resgistration';


function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Registration" exact component={Registration} />
        <Route path="/LandingPage" exact component={LandingPage} />
        <Route path="/NeedHelp" exact component={NeedHelp} />
        <Route path="/Happiness" exact component={Happiness} />
      </Router>
    </>
  );
}

export default App;
