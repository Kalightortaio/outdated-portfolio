import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    const degrees = [
          {
        title: "Moorpark College",
        subtitle: "AST in Computer Science and Physics",
        logo_path: "/images/moorpark.png",
        alt_name: "Moorpark College",
        duration: "2019 - Present",
        descriptions: [
          "I am studying basic software engineering and physics.",
          "I have taken extraccuricular courses on Software and Full Stack Development.",
        ],
        website_link: "https://www.moorparkcollege.edu/",
      },
    ]
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;