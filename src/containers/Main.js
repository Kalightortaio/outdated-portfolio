import React, { Component } from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/ExperienceComponent";
import Projects from "../pages/projects/ProjectsComponent";
import Contact from "../pages/contact/ContactComponent";
import Portal from "../pages/portal/PortalComponent";
import Lost from "../pages/lost/LostComponent";

export default class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/education"
              render={(props) => <Education {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              render={(props) => <Experience {...props} theme={this.props.theme} />}
            />
            <Route
              path="/projects"
              render={(props) => <Projects {...props} theme={this.props.theme} />}
            />
            <Route
              path="/contact"
              render={(props) => <Contact {...props} theme={this.props.theme} />}
            />
            <Route
              path="/portal"
              render={(props) => <Portal {...props} theme={this.props.theme} />}
            />
            <Route
              render={(props) => <Lost {...props} theme={this.props.theme} />}
            />
          </Switch>
        </HashRouter>
      </div>
    );     
  }
}
