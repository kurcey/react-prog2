import { ADD_ALL_USERS } from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_ALL_USERS: {
      return {
        ...state,
        ...action.payload.result,
      };
    }
    default:
      return state;
  }
}
