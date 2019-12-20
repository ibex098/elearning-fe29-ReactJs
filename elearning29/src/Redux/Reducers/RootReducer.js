import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";

const RootReducer = combineReducers({
  //state
  CourseList: CourseReducer
});

export default RootReducer;
