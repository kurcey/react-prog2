import { ADD_ALL_USERS, ADD_ANSWER_TO_USER } from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_ALL_USERS: {
      return {
        ...state,
        ...action.payload.result,
      };
    }
    case ADD_ANSWER_TO_USER: {
      const { authedUser, qid, answer } = action.payload;

      let newState = Object.keys(state).map(function (userKey, index) {
        if (state[userKey].id === authedUser) {
          const answerObject = { [qid]: answer };
          const newAnswers = { ...state[userKey].answers, ...answerObject };
          state[userKey].answers = newAnswers;
        }
        return state[userKey];
      });

      return {
        ...newState,
      };
    }
    default:
      return state;
  }
}
