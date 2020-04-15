import React, { Component } from "react";

import { connect } from "react-redux";
import { addQuestion } from "./redux/actions";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import Logout from "./components/Logout";
import Login from "./components/Login";

class App extends Component {
  state = {
    fakeAuth: {
      isAuthenticated: false,
      authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
      },
    },
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/login" render={() => <Login />} />

            <PrivateRoute
              exact
              path="/"
              component={Home}
              isAuthenticated={this.state.fakeAuth.isAuthenticated}
            />

            <PrivateRoute
              path="/logout"
              component={Logout}
              isAuthenticated={this.state.fakeAuth.isAuthenticated}
            />

            <PrivateRoute
              path="/leaderBoard"
              component={LeaderBoard}
              isAuthenticated={this.state.fakeAuth.isAuthenticated}
            />

            <PrivateRoute
              path="/newQuestion"
              component={NewQuestion}
              isAuthenticated={this.state.fakeAuth.isAuthenticated}
            />
          </Switch>

          <input
            onChange={(e) => this.updateInput(e.target.value)}
            // value={this.state.input}
          />
          <button className="add-todo" onClick={this.handleAddTodo}>
            Add Todo
          </button>
        </React.Fragment>
      </BrowserRouter>
    );
  }

  updateInput = (value) => {
    this.setState({ input: value });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addQuestion(this.state.input);

    //console.log(this.props);

    // sets state back to empty string
    //this.setState({ input: "" });
  };
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
  };
};

const mapDispatchToProps = {
  addQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
