import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { auth, search, hero, filter } from "./reducers";

const rootReducer = combineReducers({
  auth,
  hero,
  search,
  filter,
});

const middlewares = [thunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
