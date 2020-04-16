import { ADD_QUESTION, ADD_ALL_QUESTION } from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      const { author, optionOne, optionTwo } = action.payload;
      return {
        ...state,
        payload: {
          author: author,
          optionOne: optionOne,
          optionTwo: optionTwo,
        },
      };
    }
    case ADD_ALL_QUESTION: {
      return {
        ...state,
        ...action.payload.questions,
      };
    }
    default:
      return state;
  }
}
