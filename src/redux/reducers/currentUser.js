import { SET_CURRENT_USER } from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...action.payload.currentUser,
      };
    }
    default:
      return state;
  }
}
