import React, { Component } from "react";
import Card from "../Card/Card";
import Api from "../Api";

class About extends Component {
  style = {
    marginTop: "16px",
    marginBottom: "16px"
  };

  centerStyle = {

    justifyContent : "center"
  }

  state = {
    photos: [],
    albumId: 1
  };

  componentDidMount() {
    this.getPhotos(null, this.state.albumId);
  }

  onInputChange = event => {
    this.setState({ albumId: event.target.value });
  };

  getPhotos = (event, albumId) => {
    if (event != null) event.preventDefault();

    if (albumId > 0) {
      console.log("albumId", albumId);
      Api.get("/Photos", {
        params: {
          albumId: albumId
        }
      }).then(res => {
        this.setState({ photos: res.data });
        console.log(this.state.photos);
      });
    }
  };

  render() {
    var photos = this.state.photos.map((photo, index) => {
      return (
        <div
          class="column is-one-quarter-desktop is-half-tablet"
          key={photo.id}
        >
          <Card title={photo.title} imgUrl={photo.thumbnailUrl} />
        </div>
      );
    });

    return (
      <div>
        <section class="hero is-info is-med">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">About</h1>
              <h2 class="subtitle">Some smaller text lalalala</h2>
              <form
                onSubmit={event => this.getPhotos(event, this.state.albumId)}
              >
                <div className="field is-horizontal">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    value={this.state.albumId}
                    onChange={this.onInputChange}
                  />
                  <button className="button is-primary">Search</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="container" style={this.style}>
          <p className="subtitle is-5">
            This loads some data from AJAX and then displays a component for
            each
          </p>
          <div class="columns is-multiline is-variable">{photos}</div>
          <nav class="pagination" role="navigation" aria-label="pagination" >
  
  <ul class="pagination-list" style={this.centerStyle} >
    <li>
      <a class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
  
</nav>
        </div>
      </div>
    );
  }
}

export default About;
