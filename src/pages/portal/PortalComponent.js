import React, { Component } from "react";
import Header from "../../components/header/Header";
import { Fade } from "react-reveal";
import "./Portal.css";

class Portal extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Fade bottom duration={2000} distance="30px">
            <div className="portal-main">
                <div className="container">
                    <img
                        src={process.env.PUBLIC_URL + `/images/portal.png`}
                        alt="Crossroads"
                    />
                    <div className="blog">
                        <a href="http://blog.kalightortaio.com" target="_blank" rel="noopener noreferrer">Blog</a>
                    </div>
                </div>
            </div>
        </Fade>
      </div>
    );
  }
}

export default Portal;