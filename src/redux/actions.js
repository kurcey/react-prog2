import {
  ADD_QUESTION,
  ADD_ALL_QUESTION,
  ADD_ALL_USERS,
  ADD_VOTE,
} from "./actionTypes";

export const addQuestion = (id, author, timestamp, optionOne, optionTwo) => ({
  type: ADD_QUESTION,
  payload: {
    id: id,
    author: author,
    timestamp: timestamp,
    optionOne: optionOne,
    optionTwo: optionTwo,
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
    //console.log(key, users[key]);
    result.push(users[key]);
  }
  return {
    type: ADD_ALL_USERS,
    payload: {
      result,
    },
  };
};

export const addVote = (votes, text) => ({
  type: ADD_VOTE,
  payload: {
    votes: votes,
    text: text,
  },
});
