import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

import Tiles from "../Tiles/Tiles";
import LoremIpsum from "../LoremIpsum/LoremIpsum";
import NoMatch from "../NoMatch";
const MainContent = ({ match }) => {
  console.log(match);
  var style = {
    padding: "25px",
    marginTop: "60px"
  };

  var test = "hello";

  var activeStyle = {
    color: "#209cee"
  };

  return (
    <div>
      <section class="hero is-info is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">This is just a large Hero</h1>
            <h2 class="subtitle">Some smaller text</h2>
          </div>
        </div>
      </section>

      <div className="container" style={style}>
        <div class="tabs">
          <ul>
            <li>
              <NavLink to={`${match.url}/Tiles`} activeClassName="active-link">
                Tiles
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${match.url}/LoremIpsum`}
                activeClassName="active-link"
              >
                LoremIpsum
              </NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/Users`} activeClassName="active-link">
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${match.url}/Tiles`} component={Tiles} />
          <Route path={`${match.url}/LoremIpsum`} component={LoremIpsum} />
          <Route
            exact={true}
            path={`${match.url}/`}
            render={() => <h1>Home</h1>}
          />
          <Route
            path={`${match.url}/Users`}
            render={({ match }) => {
              return <p>Users</p>;
            }}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  );
};

export default MainContent;
