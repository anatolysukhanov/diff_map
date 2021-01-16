import { createStore, applyMiddleware, compose, combineReducers } from "redux";
//import thunk from "redux-thunk";
// import { taskMiddleware } from "react-palm/tasks";

import appReducer from "./reducers/app";

const initialState = {
  app: {
    search: ""
  }
};

const reducers = combineReducers({
  app: appReducer
});

const store = createStore(
  reducers,
  initialState
  //compose(applyMiddleware(taskMiddleware, thunk))
);

export default store;
