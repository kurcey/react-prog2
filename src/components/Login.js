import React, { Component } from "react";

import { withRouter } from "react-router";

import { connect } from "react-redux";
import { setCurrentUser } from "../redux/actions";

import NavBar from "./NavBar";

class Login extends Component {
  state = {};

  setSelectUserOptions = () => {
    let select = document.getElementById("sel1");
    select.innerHTML = "<option></option>";
    const { users } = this.props;
    Object.keys(users).map(function (key, index) {
      var opt = document.createElement("option");
      opt.value = users[key].id;
      opt.innerHTML = users[key].name;
      select.appendChild(opt);
      return null;
    });
  };

  getUserInformation = (userId) => {
    const { users } = this.props;
    const result = Object.keys(users)
      .map(function (key, index) {
        if (users[key].id === userId) return users[key];
        else return null;
      })
      .filter((items) => items != null)[0];
    return result;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main role="main" className="container">
          <div className="text-center">
            <form className="form-signin">
              <img
                className="mb-4"
                id="avatar"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
                width="300"
                height="300"
              />
              <h1 className="h3 mb-3 font-weight-normal">Please Select User</h1>

              <select
                className="form-control"
                id="sel1"
                value={this.state.input}
                onChange={(e) => this.handleChangeAvatar(e.target.value)}
              >
                <option></option>
              </select>

              <br />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="button"
                onClick={this.handleChangeUser}
              >
                Sign in
              </button>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }

  handleChangeAvatar = (userId) => {
    const currentSelected = this.getUserInformation(userId);
    let avatar = document.getElementById("avatar");
    avatar.src = currentSelected.avatarURL;
    this.setState({ input: userId });
  };

  handleChangeUser = () => {
    const currentUser = this.getUserInformation(this.state.input);
    this.props.setCurrentUser(currentUser);

    if (currentUser) {
      this.props.history.push("/aboutUser");
    }
  };

  componentDidUpdate() {
    this.setSelectUserOptions();
  }

  componentDidMount() {
    this.setSelectUserOptions();
  }
}

const mapStateToProps = ({ users, currentUser }) => {
  return {
    users: users,
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
