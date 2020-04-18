import React, { Component } from "react";

import { connect } from "react-redux";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { loadInitalQuestions, loadInitalUsers } from "./redux/actions";

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
              exact
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
              exact
              path="/logout"
              history={this.props.history}
              component={Logout}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              exact
              path="/leaderBoard"
              history={this.props.history}
              component={LeaderBoard}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              exact
              path="/add"
              history={this.props.history}
              component={Add}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              exact
              path="/aboutUser"
              history={this.props.history}
              component={AboutUser}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              exact
              path="/question/:question_id"
              history={this.props.history}
              component={Question}
              isAuthenticated={this.loggedIn()}
            />

            <PrivateRoute
              exact
              path="/viewPoll/:question_id"
              history={this.props.history}
              component={ViewPoll}
              isAuthenticated={this.loggedIn()}
            />

            <Route exact path="/error/:msg" component={Error404} />

            <Route path="*" component={Error404} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const {
      questions,
      users,
      loadInitalQuestions,
      loadInitalUsers,
    } = this.props;

    if (Object.keys(users).length === 0 && users.constructor === Object) {
      loadInitalUsers();
      console.log(
        "loading users from mock db becasue not persisted in local storage"
      );
    }

    if (
      Object.keys(questions).length === 0 &&
      questions.constructor === Object
    ) {
      loadInitalQuestions();
      console.log(
        "loading questions from mock db becasue not persisted in local storage"
      );
    }
  }

  componentDidUpdate() {
    this.loggedIn();
  }
}

const mapStateToProps = ({ questions, currentUser, users }) => {
  return {
    questions: questions,
    currentUser: currentUser,
    users: users,
  };
};
const mapDispatchToProps = { loadInitalQuestions, loadInitalUsers };

export default connect(mapStateToProps, mapDispatchToProps)(App);
