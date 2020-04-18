import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from './user';
import video from './video';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user,
    video
  });