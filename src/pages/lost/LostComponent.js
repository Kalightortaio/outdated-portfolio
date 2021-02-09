import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Lost.css";

class Lost extends Component {
  render() {
    return (
      <div>
        <Fade bottom duration={2000} distance="30px">
          <Header theme={this.props.theme} />
          <div className="lost-main">
          <p className="placeholder">
              
          </p>
          </div>
          <Footer theme={this.props.theme} />
        </Fade>
      </div>
    );
  }
}

export default Lost;