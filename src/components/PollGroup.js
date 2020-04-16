import React, { Component } from "react";

class PollGroup extends Component {
  state = {};

  render() {
    const {
      checkQuestions,
      unAnswerbuttonFormat,
      answerbuttonFormat,
    } = this.props;
    return (
      <div
        className="btn-group special"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className={unAnswerbuttonFormat}
          onClick={(e) => {
            checkQuestions(false);
          }}
        >
          Unanswered Questions
        </button>
        <button
          type="button"
          className={answerbuttonFormat}
          onClick={(e) => {
            checkQuestions(true);
          }}
        >
          Answered Questions
        </button>
      </div>
    );
  }
}

export default PollGroup;
