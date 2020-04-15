import React, { Component } from "react";

import { connect } from "react-redux";
//import { addQuestion } from "../redux/actions";

import NavBar from "./NavBar";
import { $CombinedState } from "redux";

class Login extends Component {
  state = {};

  getUsers = () => {
    let select = document.getElementById("sel1");

    const { users } = this.props;
    return Object.keys(users).map(function (key, index) {
      var opt = document.createElement("option");
      opt.value = users[key].name;
      opt.innerHTML = users[key].name;
      select.appendChild(opt);
    });
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
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
                width="300"
                height="300"
              />
              <h1 className="h3 mb-3 font-weight-normal">Please Select User</h1>

              <select className="form-control" id="sel1">
                <option></option>
              </select>

              <br />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </main>
      </React.Fragment>
    );
  }

  updateInput = (value) => {
    this.setState({ input: value });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    //this.props.addQuestion(this.state.input);
    // console.log(this.props);
    // sets state back to empty string
    //this.setState({ input: "" });
  };

  componentDidUpdate() {
    this.getUsers();
  }

  componentDidMount() {
    this.getUsers();
  }
}

const mapStateToProps = ({ users }) => {
  //console.log(users);
  return {
    users: users,
  };
};

const mapDispatchToProps = {
  //addQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
