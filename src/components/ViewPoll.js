import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavBar from "./NavBar";

class ViewPoll extends Component {
  state = {};

  generateResults = () => {
    const { question_id: sentID } = this.props.match.params;
    const { questions: questionPool, users, currentUser } = this.props;

    // filter user ordered questions
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
      .filter((resultUser) => resultUser.id === currentQuestion.author)[0];

    // Create currentQuestion
    let result = () => {
      const { votes: userVotes1 } = currentQuestion.optionOne;
      const { votes: userVotes2 } = currentQuestion.optionTwo;
      const { length: numberVotes1 } = currentQuestion.optionOne.votes;
      const { length: numberVotes2 } = currentQuestion.optionTwo.votes;
      const totalVotes = numberVotes1 + numberVotes2;
      let card1BorderColor = "",
        card2BorderColor = "",
        card1TextColor = "",
        card2TextColor = "",
        card1Badge = "",
        card2Badge = "";
      if (numberVotes1 >= numberVotes2) {
        card1BorderColor = "card border-success mb-3";
        card1TextColor = "card-body text-success";
      } else {
        card1BorderColor = "card border-danger mb-3";
        card1TextColor = "card-body text-danger";
      }
      if (numberVotes2 >= numberVotes1) {
        card2BorderColor = "card border-success mb-3";
        card2TextColor = "card-body text-success";
      } else {
        card2BorderColor = "card border-danger mb-3";
        card2TextColor = "card-body text-danger";
      }
      if (userVotes1.find((voters) => voters === currentUser.id)) {
        card1Badge = (
          <span className="badge badge-pill badge-primary">Your Vote</span>
        );
      }
      if (userVotes2.find((voters) => voters === currentUser.id)) {
        card2Badge = (
          <span className="badge badge-pill badge-primary">Your Vote</span>
        );
      }
      return (
        <div className="card-deck mb-12 text-center">
          <li key={currentQuestion.id}>
            <div className={card1BorderColor}>
              <div className={card1TextColor}>
                {card1Badge}
                <h5 className="card-title">
                  Would you rather {currentQuestion.optionOne.text}
                </h5>
                <p className="card-text">
                  {" "}
                  {numberVotes1} out of {totalVotes} votes
                </p>
              </div>
            </div>
            <div className={card2BorderColor}>
              <div className={card2TextColor}>
                {card2Badge}
                <h5 className="card-title">
                  Would you rather {currentQuestion.optionTwo.text}
                </h5>
                <p className="card-text">
                  {numberVotes2} out of {totalVotes} votes
                </p>
              </div>
            </div>
          </li>
        </div>
      );
    };

    return (
      <div className="card mb-12 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">
            Asked by {questionAuthor.name}
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
                  <small className="text-muted">Result</small>
                </h4>
                <ul className="list-unstyled mt-3 mb-4">{result()}</ul>
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

        <div className="container">
          <div className="aboutUserBoard">{this.generateResults()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ users, currentUser, questions }) => {
  return {
    users: users,
    currentUser: currentUser,
    questions: questions,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ViewPoll));
