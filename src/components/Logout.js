import React, { Component } from "react";
import NavBar from "./NavBar";

class Logout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Logout template</h1>
            <p className="lead">
              Use this document as a way to quickly start any new project.
              <br /> All you get is this text and a mostly barebones HTML
              document.
            </p>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Logout;
