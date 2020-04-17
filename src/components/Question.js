import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import { saveQuestionAnswer } from "../redux/actions";

import NavBar from "./NavBar";

class Question extends Component {
  state = { optionChecked: "optionOne" };

  generateResults = () => {
    const { question_id: sentID } = this.props.match.params;
    const { questions: questionPool, users } = this.props;

    // filter to current question
    let currentQuestion = Object.keys(questionPool)
      .map(function (questionKey, index) {
        return questionPool[questionKey];
      })
      .filter((resultAnswer) => resultAnswer.id === sentID)[0];

    // get user info for current question
    let questionAuthor = Object.keys(users)
      .map(function (userKey, index) {
        return users[userKey];
      })
      .filter((resultAnswer) => resultAnswer.id === currentQuestion.author)[0];

    return (
      <div className="container">
        <div className="aboutUserBoard">
          <div className="card-deck mb-12 text-center">
            <div className="card mb-12 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">
                  {" "}
                  {questionAuthor.name} asks:
                </h4>
              </div>

              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                      <img
                        className="card-img-top img-fluid"
                        src={questionAuthor.avatarURL}
                        alt="Card  cap"
                      ></img>
                    </div>

                    <div className="col-md-8">
                      <h4 className="card-title pricing-card-title">
                        <small className="text-muted">
                          Would You Rather ...
                        </small>
                      </h4>

                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          value="optionOne"
                          checked={this.state.optionChecked === "optionOne"}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="optionOne">
                          {currentQuestion.optionOne.text}
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          value="optionTwo"
                          checked={this.state.optionChecked === "optionTwo"}
                          onChange={this.handleChange}
                        />
                        <label htmlFor="optionTwo">
                          {currentQuestion.optionTwo.text}
                        </label>
                      </div>
                      <br />
                      <button
                        type="button"
                        className="btn btn-lg btn-block btn-outline-primary"
                        onClick={(e) => {
                          this.handleInputQuestion(e);
                        }}
                      >
                        Submit
                      </button>

                      <ul className="list-unstyled mt-3 mb-4"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.generateResults()}
      </React.Fragment>
    );
  }

  handleChange = (event) => {
    this.setState({
      optionChecked: event.target.value,
    });
  };

  handleInputQuestion = () => {
    const { currentUser } = this.props;
    const authedUser = currentUser.id;
    const { optionChecked } = this.state;
    const { question_id: qid } = this.props.match.params;

    const answerPayload = {
      authedUser: authedUser,
      qid: qid,
      answer: optionChecked,
    };

    this.props.saveQuestionAnswer(answerPayload);
    this.props.history.push("/viewPoll/" + qid);
  };
}

const mapStateToProps = ({ users, currentUser, questions }) => {
  return {
    users: users,
    currentUser: currentUser,
    questions: questions,
  };
};

const mapDispatchToProps = {
  saveQuestionAnswer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Question));
