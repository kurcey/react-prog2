import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {
  persistStore,
  persistReducer,
  // , purgeStoredState
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export let persistor = persistStore(store);
export default store;

//persistor.purge();
