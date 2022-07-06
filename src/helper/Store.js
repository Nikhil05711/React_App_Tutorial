import { createStore, applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "react-bootstrap";
import rootReducer from "";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware, loggerMiddleware)
);
