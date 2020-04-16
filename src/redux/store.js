import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import { _getQuestions, _getUsers } from "./_DATA";
import { addAllQuestion, addAllUsers } from "./actions";

function loadInitalQuestions() {
  return function (dispatch) {
    return _getQuestions().then(
      (ques) => {
        store.dispatch(addAllQuestion(ques));
      },
      (error) => console.log(error)
    );
  };
}

function loadInitalUsers() {
  return function (dispatch) {
    return _getUsers().then(
      (user) => {
        store.dispatch(addAllUsers(user));
      },
      (error) => console.log(error)
    );
  };
}

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(loadInitalQuestions());
store.dispatch(loadInitalUsers());

export default store;
