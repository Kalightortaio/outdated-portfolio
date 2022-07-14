/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">
          Developed by Krishna Kokatay<br/><br/>
          <a href="javascript:window.scrollTo(0, 0);">Back to Top</a>
        </p>
      </Fade>
    </div>
  );
}
