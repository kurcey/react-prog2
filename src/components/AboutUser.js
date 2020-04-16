import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavBar from "./NavBar";

class AboutUser extends Component {
  state = {};

  generateResults = () => {
    const { questions: authoredQuestion } = this.props.currentUser;
    const { questions } = this.props;

    // filter user ordered questions
    let userAuthoredQuestion = authoredQuestion
      .map((answerKey) => {
        let userAnswers = Object.keys(questions)
          .map(function (questionKey, index) {
            if (answerKey === questionKey) return questions[questionKey];
            return null;
          })
          .filter((userAnswer) => userAnswer != null)[0];
        return userAnswers;
      })
      .filter((resultAnswer) => resultAnswer != null);

    console.log(userAuthoredQuestion);

    // Create display

    let result = userAuthoredQuestion.map((display) => {
      console.log(display);
      const { votes: userVotes1 } = display.optionOne;
      const { votes: userVotes2 } = display.optionTwo;
      const { length: numberVotes1 } = display.optionOne.votes;
      const { length: numberVotes2 } = display.optionTwo.votes;
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
      if (userVotes1.find((voters) => voters === display.author)) {
        card1Badge = (
          <span className="badge badge-pill badge-primary">Your Vote</span>
        );
      }
      if (userVotes2.find((voters) => voters === display.author)) {
        card2Badge = (
          <span className="badge badge-pill badge-primary">Your Vote</span>
        );
      }
      return (
        <li key={display.id}>
          <div className={card1BorderColor}>
            <div className={card1TextColor}>
              {card1Badge}
              <h5 className="card-title">
                Would you rather {display.optionOne.text}
              </h5>
              <p className="card-text">
                {numberVotes1} out of {totalVotes} votes
              </p>
            </div>
          </div>
          <div className={card2BorderColor}>
            <div className={card2TextColor}>
              {card2Badge}
              <h5 className="card-title">
                Would you rather {display.optionTwo.text}
              </h5>
              <p className="card-text">
                {numberVotes2} out of {totalVotes} votes
              </p>
            </div>
          </div>
        </li>
      );
    });
    return result;
  };

  render() {
    const { name, avatarURL } = this.props.currentUser;
    return (
      <React.Fragment>
        <NavBar />

        <div className="container">
          <div className="aboutUserBoard">
            <div className="card-deck mb-12 text-center">
              <div className="card mb-12 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Asked by {name}</h4>
                </div>

                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 d-flex align-items-center">
                        <img
                          className="card-img-top img-fluid"
                          src={avatarURL}
                          alt="Card  cap"
                        ></img>
                      </div>

                      <div className="col-md-8">
                        <h4 className="card-title pricing-card-title">
                          <small className="text-muted">Result</small>
                        </h4>
                        <ul className="list-unstyled mt-3 mb-4">
                          {this.generateResults()}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

const mapDispatchToProps = {
  // setCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AboutUser));
