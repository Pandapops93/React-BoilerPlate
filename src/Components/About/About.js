import React from "react";
import Card from "../Card/Card";

const About = () => {
  var style = {
    marginTop: "16px",
    marginBottom: "16px"
  };
  return (
    <div >
      <section class="hero is-info is-med">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">About</h1>
            <h2 class="subtitle">Some smaller text</h2>
          </div>
        </div>
      </section>
      <div className="container" style={style} >
        <div class="columns is-multiline is-variable">
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="boo" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="boo" subtitle="sub">
              <p>some text</p>
              <p>some text</p>
              <p>some text</p>
              <p>some text</p>
            </Card>
          </div>
          <div class="column is-one-quarter">
            <Card title="test" subtitle="sub">
              <p>some text</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
