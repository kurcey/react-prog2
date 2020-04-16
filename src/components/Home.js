import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavBar from "./NavBar";
import PollGroup from "./PollGroup";
import PollCard from "./PollCard";

class Home extends Component {
  state = {
    answeredQuestions: false,
  };

  checkQuestions = (answered) => {
    this.setState({
      answeredQuestions: answered,
    });
  };

  genertateQuestionGrouping = () => {
    const { answeredQuestions } = this.state;
    const { questions, currentUser, users } = this.props;
    let unAnswerbuttonFormat = "",
      answerbuttonFormat = "";

    if (answeredQuestions) {
      unAnswerbuttonFormat = "btn btn-secondary";
      answerbuttonFormat = "btn btn-light";
    } else {
      unAnswerbuttonFormat = "btn btn-light";
      answerbuttonFormat = "btn btn-secondary";
    }

    // Pull out all question IDs
    let questionsID = Object.keys(questions).map(function (questionKey, index) {
      return questionKey;
    });

    // Calculate if question is answered by user
    let alreadyVotedQuestions = questionsID.map((id) => {
      const allVotes = [
        ...questions[id].optionOne.votes,
        ...questions[id].optionTwo.votes,
      ];

      if (allVotes.find((voters) => voters === currentUser.id))
        return { id: id, answered: true };
      else return { id: id, answered: false };
    });

    alreadyVotedQuestions = alreadyVotedQuestions.filter(
      (items) => items.answered === answeredQuestions
    );

    let cards = alreadyVotedQuestions.map((item) => {
      const questionInfo = questions[item.id];

      const allAuthors = Object.keys(users).map(function (user, index) {
        return {
          id: users[user].id,
          name: users[user].name,
          avatarURL: users[user].avatarURL,
        };
      });

      const autorInfo = allAuthors.filter(
        (user) => user.id === questionInfo.author
      )[0];

      return (
        <PollCard
          key={questionInfo.id}
          id={questionInfo.id}
          name={autorInfo.name}
          avatarURL={autorInfo.avatarURL}
          question={questionInfo.optionOne.text}
          answeredQuestions={answeredQuestions}
        ></PollCard>
      );
    });

    return (
      <div className="card-body">
        <PollGroup
          checkQuestions={this.checkQuestions}
          answerbuttonFormat={answerbuttonFormat}
          unAnswerbuttonFormat={unAnswerbuttonFormat}
        ></PollGroup>
        {cards}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className="container">
          <div className="homeBoard">
            <div className="card-deck mb-12 text-center">
              <div className="card mb-12 shadow-sm">
                {this.genertateQuestionGrouping()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.genertateQuestionGrouping();
  }

  handleLogoutUser = () => {
    //this.props.logOutCurrentUser();

    if (Object.keys(this.props.currentUser).length === 0) {
      this.props.history.push("/");
    }
  };
}

const mapStateToProps = ({ questions, currentUser, users }) => {
  //console.log(questions);
  return {
    questions: questions,
    currentUser: currentUser,
    users: users,
  };
};

const mapDispatchToProps = {
  //logOutCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
