import {
  SET_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  ADD_ANSWER_TO_USER,
} from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...action.payload.currentUser,
      };
    }
    case ADD_ANSWER_TO_USER: {
      const { qid, answer } = action.payload;

      const newState = () => {
        const answerObject = { [qid]: answer };
        const newAnswers = {
          ...state.answers,
          ...answerObject,
        };
        state.answers = newAnswers;
        return state;
      };
      const result = newState();
      return {
        ...result,
      };
    }

    case LOGOUT_CURRENT_USER: {
      return {};
    }

    default:
      return state;
  }
}
