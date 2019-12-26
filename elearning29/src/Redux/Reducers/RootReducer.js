import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  //state
  CourseCategories: CourseReducer,
  User: UserReducer
});

export default RootReducer;
