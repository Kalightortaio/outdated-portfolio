import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceDropdown.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceDropdown extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-dropdown">
        <Accordion >
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="dropdown-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceDropdown;