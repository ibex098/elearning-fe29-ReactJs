// import { FETCH_COURSE_CATEGORIES } from "../Action/Type";
import {
  FETCH_CATEGORIES,
  FETCH_COURSE_CATEGORIES,
  SET_CATEGORIES
} from "../Action/Type";

const initialState = {
  categoriesList: [],
  courseCategories: [],
  choosenCategories: "BackEnd"
};

const CourseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      state.categoriesList = payload;
      return { ...state };

    case FETCH_COURSE_CATEGORIES:
      state.courseCategories = payload;
      return { ...state };

    case SET_CATEGORIES:
      state.choosenCategories = payload;
      return { ...state };

    default:
      return state;
  }
};

export default CourseReducer;
