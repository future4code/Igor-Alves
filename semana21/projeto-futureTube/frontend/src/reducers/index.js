import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from './user'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user
  });