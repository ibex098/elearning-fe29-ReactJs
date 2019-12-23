import { combineReducers } from "redux";
import CourseReducer from "./CourseReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  //state
  CourseCategories: CourseReducer,
  UserList: UserReducer
});

export default RootReducer;
