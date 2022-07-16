import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

// combines state with reducers
const reducers = combineReducers({
  tasks: tasksReducer,
});

export default reducers;
