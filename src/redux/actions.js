import {
  ADD_QUESTION,
  ADD_ALL_QUESTION,
  ADD_ALL_USERS,
  SET_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  ADD_ANSWER_TO_USER,
} from "./actionTypes";

import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export const addQuestion = ({
  id,
  author,
  timestamp,
  optionOne,
  optionTwo,
}) => ({
  type: ADD_QUESTION,
  payload: {
    id: id,
    author: author,
    timestamp: timestamp,
    optionOne: optionOne,
    optionTwo: optionTwo,
  },
});

export const saveAnswer = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_USER,
  payload: {
    authedUser: authedUser,
    qid: qid,
    answer: answer,
  },
});

export const addAllQuestion = (questions) => ({
  type: ADD_ALL_QUESTION,
  payload: {
    questions,
  },
});

export const addAllUsers = (users) => {
  let result = [];
  for (const key of Object.keys(users)) {
    result.push(users[key]);
  }
  return {
    type: ADD_ALL_USERS,
    payload: {
      result,
    },
  };
};

export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      currentUser,
    },
  };
};

export const logOutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
    payload: {},
  };
};

export const saveQuestion = (questionObject) => {
  return function (dispatch) {
    return _saveQuestion(questionObject).then(
      (ques) => {
        dispatch(addQuestion(ques));
      },
      (error) => console.log(error)
    );
  };
};

export const saveQuestionAnswer = (questionObject) => {
  return function (dispatch) {
    return _saveQuestionAnswer(questionObject).then(
      (ans) => {
        dispatch(saveAnswer(questionObject));
      },
      (error) => console.log(error)
    );
  };
};
