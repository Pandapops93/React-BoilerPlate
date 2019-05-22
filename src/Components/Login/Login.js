import React, { Component } from "react";
import TestApi from "../../TestApi";
import Qs from "query-string";

class Login extends Component {
  state = {
    username: "",
    password: "",
    rememberMe: true
  };

  rememberMeChecked = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  onEmailChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("Logging in");
    TestApi.post("User/Login", this.state).then(res => {
      console.log(res);
      var search = Qs.stringify({
        userid: 1,
        test: "boo"
      });
      if (res.status === 200) window.location = "/Home?" + search;
    });
  };

  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
              <div class="box">
                <form onSubmit={this.onSubmit}>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-large"
                        type="text"
                        placeholder="Your Email"
                        autofocus=""
                        onChange={this.onEmailChange}
                        value={this.state.username}
                      />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="password" placeholder="Your Password" onChange={this.onPasswordChange} value={this.state.password} />
                    </div>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" checked={this.state.rememberMe} onChange={this.rememberMeChecked} />
                      Remember me
                    </label>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth">Login</button>
                </form>
              </div>
              <p class="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
