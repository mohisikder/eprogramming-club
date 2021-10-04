import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './components/Error/Error';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Trainer from './components/Trainer/Trainer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/services">
            <ServiceDetails/>
          </Route>
          <Route exact path="/trainer">
            <Trainer/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
