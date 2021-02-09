import React, { Component } from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/ExperienceComponent";

export default class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
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
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );     
  }
}
