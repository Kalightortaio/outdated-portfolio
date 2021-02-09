import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    const certifications = [
        {
        title: "Web/Python",
        subtitle: "- Coding Dojo",
        logo_path: "/images/codingdojo.png",
        certificate_link:
            "https://certificate.dojo.news/a4bcfa2f-54ce-4db7-8c5e-238dc0e44b46",
        alt_name: "Coding Dojo",
        color_code: "#ffffff",
        },
        {
        title: "Web/Java",
        subtitle: "- Coding Dojo",
        logo_path: "/images/codingdojo.png",
        certificate_link:
            "https://certificate.dojo.news/a4bcfa2f-54ce-4db7-8c5e-238dc0e44b46",
        alt_name: "Coding Dojo",
        color_code: "#ffffff",
        },
        {
        title: "Web/MEAN",
        subtitle: "- Coding Dojo",
        logo_path: "/images/codingdojo.png",
        certificate_link:
            "https://certificate.dojo.news/a4bcfa2f-54ce-4db7-8c5e-238dc0e44b46",
        alt_name: "Coding Dojo",
        color_code: "#ffffff",
        },
    ]
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;