import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";

const RootReducer = combineReducers({
  //state
  CourseCategories: CourseReducer
});

export default RootReducer;
