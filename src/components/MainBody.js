import React, { Component } from "react";

class MainBody extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Bootstrap starter template</h1>
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

export default MainBody;
