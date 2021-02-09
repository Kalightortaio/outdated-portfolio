import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./Projects.css";
import ProjectsSVG from "./ProjectsSVG";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const ProjectsData = [
        {"id":"VhYzYSLCXg5zm3HG","name":"Portfolio","createdAt":"February 7th 2021","url":"https://github.com/Kalightortaio/kalightortaio.github.io","description":"My own personal domain to host projects, provide example code of my capabilities, and gain experience with multiple backends operating on one domain.","languages":[{"name":"React","iconifyClass":"cib-react"},{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"CSS","iconifyClass":"logos-css-3"}]},
        {"id":"jvANhgq8HLcxZXZx","name":"Community Care and Hospice","createdAt":"February 12th 2019","url":"https://github.com/Kalightortaio/Community-Care-and-Hospice","description":"A commercial website designed to advertise my client’s medical business and to connect patients to hospice services and community resources.","languages":[{"name":"Python","iconifyClass":"logos-python"},{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"CSS","iconifyClass":"logos-css-3"}]},
        {"id":"NYLq3zYqFEUWZ38L","name":"Drain Sensei","createdAt":"June 5th 2019","url":"https://github.com/Kalightortaio/Drain-Sensei","description":"A mobile app created to service both consumers and rooting professionals with the usage of Drain Sensei devices.","languages":[{"name":"React Native","iconifyClass":"cib-react"}]},
        {"id":"5ucbFsPvxqrKwD66","name":"Shortcut","createdAt":"August 2nd 2018","url":"https://github.com/Kalightortaio/Shortcut","description":"A powershell module aimed at making navigating the Windows OS a little bit easier.","languages":[{"name":"Powershell","iconifyClass":"vscode-icons:file-type-powershell"}]},
        {"id":"6fC5U2MhbgwtK2LH","name":"Expert Mode","createdAt":"April 9th 2019","url":"https://github.com/Kalightortaio/Expert-Mode","description":"A client side mod for Minecraft, written in the game’s data pack format.","languages":[{"name":"mcfunction","iconifyClass":"pixelarticons-script-text"}]},
        {"id":"V2nX26EbwVCtmkMk","name":"Isaac Reforged","createdAt":"December 28th 2020","url":"https://github.com/Kalightortaio/Isaac-Reforged","description":"A client side mod for the Binding of Isaac, aimed to rework various aspects of the game.","languages":[{"name":"Lua","iconifyClass":"logos-lua"}]},
        {"id":"6fC5U2MhbgwtK2LH","name":"Items Reforged","createdAt":"December 3rd 2020","url":"https://github.com/Kalightortaio/Items-Reforged","description":"A client side mod for the Binding of Isaac, aimed to rework various aspects of the game.","languages":[{"name":"Lua","iconifyClass":"logos-lua"}]},
        {"id":"6fC5U2MhbgwtK2LH","name":"Aux Cord (WIP)","createdAt":"February 1st 2021","url":"https://github.com/Kalightortaio/Aux-Cord","description":"A basic music library app with a geopositional social twist.","languages":[{"name":"Java","iconifyClass":"logos-java"}]},
        {"id":"6fC5U2MhbgwtK2LH","name":"Oryx's Paracosm (WIP)","createdAt":"February 5th 1st 2021","url":"https://github.com/Kalightortaio/Oryxs-Paracosm","description":"My current delve into lower level programming and game development.","languages":[{"name":"C++","iconifyClass":"logos-c-plusplus"},{"name":"OpenGL","iconifyClass":"logos-opengl"}]},
    ]
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsSVG theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Projects
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  My projects make use of a vast array of different languages and modules. Each serves as a unique challenge to either strengthen my knowledge, or expand past my horizons.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/kalightortaio"
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </div>
    );
  }
}

export default Projects;