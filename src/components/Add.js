import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import { saveQuestion } from "../redux/actions";

import NavBar from "./NavBar";

class Add extends Component {
  state = { optionOneText: "", optionTwoText: "" };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="aboutUserBoard">
            <div className="card-deck mb-12 text-center">
              <div className="card mb-12 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Create New Question
                  </h4>
                </div>

                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="card-title pricing-card-title">
                          Would you rather...
                        </h4>
                        <div className="form-group">
                          <label htmlFor="optionOneText">Option One</label>
                          <input
                            type="text"
                            className="form-control"
                            name="optionOneText"
                            value={this.state.optionOneText}
                            onChange={this.handleChange}
                          />
                        </div>
                        <small className="form-text text-muted">Or</small>
                        <br />
                        <div className="form-group">
                          <label htmlFor="optionTwoText">Option Two</label>
                          <input
                            type="text"
                            className="form-control"
                            name="optionTwoText"
                            value={this.state.optionTwoText}
                            onChange={this.handleChange}
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-lg btn-block btn-outline-primary"
                          onClick={(e) => {
                            this.handleInputQuestion();
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleInputQuestion = () => {
    const { currentUser } = this.props;
    const author = currentUser.id;
    const { optionOneText, optionTwoText } = this.state;

    const questionPayload = {
      author: author,
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
    };

    this.props.saveQuestion(questionPayload);
    this.props.history.push("/");
  };
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {
  saveQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
