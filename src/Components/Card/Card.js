import React from "react";

const Card = props => {
  var style = {
    height: "100%"
  };

  return (
    <div class="card" style={style}>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{props.title}</p>
            <p class="subtitle is-6">{props.subtitle}</p>
          </div>
        </div>

        <div class="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
