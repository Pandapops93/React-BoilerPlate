import React from "react";
import Wave from 'react-wavify'

const Footer = () => {
  var style = {
    margin: "auto",
    padding: "16px"
  };

  return (
    <>
    <footer class="footer has-text-centered ">Made by Andrew Calderwood
          <Wave fill='#209cee'
          paused={false}
          options={{
            height: 10,
            amplitude: 40,
            speed: 0.25,
            points: 4
          }}></Wave>
    </footer>
    </>
  );
};

export default Footer;
