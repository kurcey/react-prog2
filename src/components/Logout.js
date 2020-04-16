import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import { logOutCurrentUser } from "../redux/actions";

import NavBar from "./NavBar";

class Logout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="starter-template">
            <h1>Login Out</h1>
            <p className="lead">
              You are now being logged out of Would you rather App.
            </p>
          </div>
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.handleLogoutUser();
  }

  handleLogoutUser = () => {
    this.props.logOutCurrentUser();

    if (Object.keys(this.props.currentUser).length === 0) {
      this.props.history.push("/");
    }
  };
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {
  logOutCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Logout));
