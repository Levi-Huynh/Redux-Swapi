import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import combineReducer from "./reducers";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";


// needed dependancies
// applyMiddleware from redux X
// thunk from redux-thunk X
// logger from redux-logger X
// rootReducer from ./reducers X

//rootReducer needs to be renamed?

const store = createStore(
combineReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
