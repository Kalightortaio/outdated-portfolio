import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CertifiedSites from "../../components/certifiedSites/CertifiedSites";
import EducationSVG from "./EducationSVG";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    const certifiedSites = [
        {
        siteName: "HackerRank",
        iconifyClassname: "simple-icons:hackerrank",
        style: {
            color: "#2EC866",
        },
        profileLink: "https://www.hackerrank.com/kalightortaio",
        },
    ]
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationSVG theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                //<CertifiedSites logos={certifiedSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          <Certifications theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
