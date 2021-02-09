import React, { Component } from "react";
import Header from "../../components/header/Header";
import Splash from "../../containers/splash/Splash";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Splash theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
