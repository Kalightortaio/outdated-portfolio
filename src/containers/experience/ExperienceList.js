import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceList.css";
import { Card } from "baseui/card";

class ExperienceList extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-list-container">
        <div className="experience-list">
          {this.props.sections.map((section) => {
            return (
              <Card
                className="experience-card"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} key={index}/>
                  );
                })}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceList;