import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NoMatch = match => {
  console.log(match);

  return (
    <section class="hero is-danger is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Uh oh... We cant find that one</h1>
        <h2 class="subtitle">Go Back!!!</h2>
        <Link to="/Home"><button className="button is-primary">Go Home</button></Link>
      </div>
    </div>
  </section>
  );
};

export default NoMatch;
