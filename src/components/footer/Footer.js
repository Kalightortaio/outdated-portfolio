import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">
          Developed by Krishna Kokatay
        </p>
      </Fade>
    </div>
  );
}
