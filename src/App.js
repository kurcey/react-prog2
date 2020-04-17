import React, { Component } from "react";

import { connect } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./components/Home";
import AboutUser from "./components/AboutUser";
import LeaderBoard from "./components/LeaderBoard";
import Add from "./components/Add";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Question from "./components/Question";
import ViewPoll from "./components/ViewPoll";
import Error404 from "./components/Error404";

class App extends Component {
  state = {};

  loggedIn = () => {
    if (Object.keys(this.props.currentUser).length > 0) return true;
    else return false;
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route
              path="/login"
              history={this.props.history}
              render={() => <Login />}
            />

            <PrivateRoute
              exact
              path="/"
              history={this.props.history}
              component={Home}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              path="/logout"
              history={this.props.history}
              component={Logout}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              path="/leaderBoard"
              history={this.props.history}
              component={LeaderBoard}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              path="/add"
              history={this.props.history}
              component={Add}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              path="/aboutUser"
              history={this.props.history}
              component={AboutUser}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              path="/question/:question_id"
              history={this.props.history}
              component={Question}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              path="/viewPoll/:question_id"
              history={this.props.history}
              component={ViewPoll}
              isAuthenticated={this.loggedIn()}
            />

            <Route path="*" component={Error404} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }

  componentDidUpdate() {
    this.loggedIn();
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
