import { combineReducers } from "redux";
import task from "./tasks";


const rootReducer = combineReducers({
  task: task,
});

export default rootReducer;