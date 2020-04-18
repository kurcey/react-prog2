import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavBar from "./NavBar";

class Error404 extends Component {
  state = {};

  render() {
    const { msg } = this.props.match.params;
    let displayMsg = "Were Sorry this page does not exist";
    if (msg) displayMsg = msg;
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="starter-template">
            <h1>{displayMsg}</h1>
            <p className="lead">Error code 404.</p>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Error404));
