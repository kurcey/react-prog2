import React, { Component } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LeaderBoard from "./components/LeaderBoard";
import NewQuestion from "./components/NewQuestion";
import Logout from "./components/Logout";
import Login from "./components/Login";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BrowserRouter>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/leaderBoard" render={() => <LeaderBoard />} />
          <Route path="/newQuestion" render={() => <NewQuestion />} />
          <Route path="/logout" render={() => <Logout />} />
          <Route path="/login" render={() => <Login />} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
