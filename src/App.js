import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainBody />
      </React.Fragment>
    );
  }
}

export default App;
