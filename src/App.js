import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma";
import Navbar from "./Components/Navbar/Navbar";
import MainContent from "./Components/MainContent/MainContent";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Jobs from "./Components/Jobs/Jobs";
import Login from "./Components/Login/Login";
import NoMatch from "./Components/NoMatch";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  IndexRoute,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Route
          path="/"
          exact={true}
          render={() => {
            return <Redirect exact={true} from="/" to="/home" />;
          }}
        />
        <Switch>
        <Route path="/Home" component={MainContent} />
        <Route path="/About" component={About} />
        <Route path="/Jobs" component={Jobs} />
        <Route path="/Login" component={Login} />
        <Route component={NoMatch} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
