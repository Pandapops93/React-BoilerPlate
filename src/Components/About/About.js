import React, { Component } from "react";
import Card from "../Card/Card";
import Api from "../Api";

class About extends Component {
  style = {
    marginTop: "16px",
    marginBottom: "16px"
  };

  state = {
    users: []
  };

  componentDidMount() {
    Api.get("/Users").then(res => {
      this.setState({ users: res.data });
      console.log(this.state.users);
    });
  }

  render() {
    var people = this.state.users.map((user, index) => {
      return (
        <div class="column is-one-quarter-desktop is-half-tablet" key={user.id}>
          <Card title={user.name} subtitle={user.email}>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <section class="hero is-info is-med">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">About</h1>
              <h2 class="subtitle">Some smaller text</h2>
            </div>
          </div>
        </section>
        <div className="container" style={this.style}>
        <p className="subtitle is-5">
          This loads some data from AJAX and then displays a component for each
        </p>
          <div class="columns is-multiline is-variable">{people}</div>
        </div>
      </div>
    );
  }
}

export default About;
