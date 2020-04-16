import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavBar from "./NavBar";

class LeaderBoard extends Component {
  state = {};

  generateResults = () => {
    const { users } = this.props;

    // Create User Total Array
    let userArray = Object.keys(users).map(function (userKey, index) {
      const { id, name, answers, questions, avatarURL } = users[userKey];
      const numAnswers = Object.keys(answers).length;
      const total = numAnswers + questions.length;

      return {
        id: id,
        name: name,
        answeredQuestions: numAnswers,
        createdQuestions: questions.length,
        total: total,
        avatarURL: avatarURL,
      };
    });

    userArray.sort((a, b) => a.total <= b.total);

    // Create currentQuestion
    let result = userArray.map((item) => {
      const {
        id,
        name,
        answeredQuestions,
        createdQuestions,
        total,
        avatarURL,
      } = item;
      return (
        <React.Fragment key={id}>
          <br />
          <div className="card-deck mb-12 text-center">
            <div className="card mb-12 shadow-sm">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <img
                        className="card-img-top img-fluid"
                        src={avatarURL}
                        alt="Author avatar"
                      ></img>
                    </div>

                    <div className="col-md-5">
                      <h4>{name}</h4>
                      <p className="card-title pricing-card-title">
                        Answered Questions {"  "} {answeredQuestions}
                      </p>
                      <p className="card-title pricing-card-title">
                        Created Questions {"  "} {createdQuestions}
                      </p>
                    </div>

                    <div className="col-md-4">
                      <div className="card mb-12 shadow-sm">
                        <div className="card-header">
                          <h4 className="my-0 font-weight-small">Score</h4>
                        </div>
                        {total}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });

    return result;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="aboutUserBoard">{this.generateResults()}</div>
        </main>
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
)(withRouter(LeaderBoard));
