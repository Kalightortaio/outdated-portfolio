import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { Fade } from "react-reveal";
import SkillSVG1 from "./SkillSVG1";
import SkillSVG2 from "./SkillSVG2";
import SkillSVG3 from "./SkillSVG3";

function GetSkillSvg(props) {
    if (props.fileName === "SkillSVG1")
        return <SkillSVG1 theme={props.theme} />;
    else if (props.fileName === "SkillSVG2")
        return <SkillSVG2 theme={props.theme} />;
    else if (props.fileName === "SkillSVG3")
        return <SkillSVG3 theme={props.theme} />;
    return;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    const data = [
        {
            title: "Full Stack Development",
            fileName: "SkillSVG2",
            skills: [
                "Building responsive websites both dyanically and statically, in various languages.",
                "Developing mobile applications using React Native, Ionic, and solo android apps using Java",
                "Creating application backends in MEAN, Django & Sprint Boot",
            ],
            softwareSkills: [
                {
                skillName: "HTML5",
                fontAwesomeClassname: "simple-icons:html5",
                style: {
                    color: "#E34F26",
                },
                },
                {
                skillName: "CSS3",
                fontAwesomeClassname: "fa-css3",
                style: {
                    color: "#1572B6",
                },
                },
                {
                skillName: "Sass",
                fontAwesomeClassname: "simple-icons:sass",
                style: {
                    color: "#CC6699",
                },
                },
                {
                skillName: "JavaScript",
                fontAwesomeClassname: "simple-icons:javascript",
                style: {
                    backgroundColor: "#000000",
                    color: "#F7DF1E",
                },
                },
                {
                skillName: "ReactJS",
                fontAwesomeClassname: "simple-icons:react",
                style: {
                    color: "#61DAFB",
                },
                },
                {
                skillName: "NodeJS",
                fontAwesomeClassname: "simple-icons:node-dot-js",
                style: {
                    color: "#339933",
                },
                },
                {
                skillName: "NPM",
                fontAwesomeClassname: "simple-icons:npm",
                style: {
                    color: "#CB3837",
                },
                },
                {
                skillName: "Java",
                fontAwesomeClassname: "logos-java",
                 style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "Python",
                fontAwesomeClassname: "logos-python",
                style: {
                    backgroundColor: "transparent",
                },
                },
            ],
        },
        {
            title: "Team Oriented Practices",
            fileName: "SkillSVG3",
            skills: [
                "Experience with working on multiple cloud platforms and collaborative efforts",
                "Hosting and maintaining websites on virtual machine instances along with integration of databases",
                "Due diligence when making comments in code, handling version control, or debugging",
            ],
            softwareSkills: [
                {
                skillName: "AWS",
                fontAwesomeClassname: "simple-icons:amazonaws",
                style: {
                    color: "#FF9900",
                },
                },
                {
                skillName: "PostgreSQL",
                fontAwesomeClassname: "simple-icons:postgresql",
                style: {
                    color: "#336791",
                },
                },
                {
                skillName: "MongoDB",
                fontAwesomeClassname: "simple-icons:mongodb",
                style: {
                    color: "#47A248",
                },
                },
                {
                skillName: "MySQL",
                fontAwesomeClassname: "logos-mysql",
                style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "Git",
                fontAwesomeClassname: "logos-git",
                style: {
                    color: "#DE4C36",
                },
                },
                {
                skillName: "Slack",
                fontAwesomeClassname: "logos-slack-icon",
                style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "Trello",
                fontAwesomeClassname: "logos-trello",
                style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "Asana",
                fontAwesomeClassname: "logos-asana",
                style: {
                    backgroundColor: "transparent",
                },
                },
            ]
        },
        {
            title: "Data & Projects",
            fileName: "SkillSVG1",
            skills: [
                "Holds a functionality over form design philosophy, that shapes the basis of many of my projects",
                "Ability to pick up a new language, api, or skill quickly.",
                "Currently on the path of obtaining a Bachelor degree in Computer Science",
                "Actively learning C++, OpenGL, and Tensorflow",
            ],
            softwareSkills: [
                {
                skillName: "Lua",
                fontAwesomeClassname: "logos-lua",
                style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "C++",
                fontAwesomeClassname: "logos-c-plusplus",
                style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "OpenGL",
                fontAwesomeClassname: "logos-opengl",
                style: {
                    backgroundColor: "transparent",
                },
                },
                {
                skillName: "Tensorflow",
                fontAwesomeClassname: "logos-tensorflow",
                style: {
                    backgroundColor: "transparent",
                },
                },
            ],
        }
    ]
    return (
      <div>
        {data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;