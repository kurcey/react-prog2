import React, { Component } from "react";
import { withRouter } from "react-router";

class PollCard extends Component {
  state = {};
  jumpToLink = (answeredQuestions, questionID) => {
    let linkPath = "";
    if (answeredQuestions) linkPath = "/viewPoll/" + questionID;
    else linkPath = "/question/" + questionID;

    this.props.history.push(linkPath);
  };

  render() {
    const {
      question_id,
      name,
      avatarURL,
      question,
      answeredQuestions,
    } = this.props;
    let polButtonMsg = "";
    if (answeredQuestions) polButtonMsg = "View Poll";
    else polButtonMsg = "Answer Question";
    return (
      <React.Fragment>
        <br />
        <div key={question_id} className="card-deck mb-12 text-center">
          <div className="card mb-12 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{name} asks:</h4>
            </div>

            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 d-flex align-items-center">
                    <img
                      className="card-img-top img-fluid"
                      src={avatarURL}
                      alt="Author avatar"
                    ></img>
                  </div>

                  <div className="col-md-8">
                    <h4 className="card-title pricing-card-title">
                      Would you rather <br />
                      <small className="text-muted">.. {question} ..</small>
                    </h4>
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-outline-primary"
                      onClick={(e) => {
                        this.jumpToLink(answeredQuestions, question_id);
                      }}
                    >
                      {polButtonMsg}
                    </button>
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

export default withRouter(PollCard);
