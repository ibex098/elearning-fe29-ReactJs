import CourseService from "../../Services/CourseService";
import {
  FETCH_COURSE_CATEGORIES,
  FETCH_CATEGORIES,
} from "./Type";

const courseService = new CourseService();

//tạo Action dùng chung để gọi ở những nơi khác và chỉ cần truyên 2 tham số là type và payload
export const reduxAction = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

// lấy danh mục khóa học
export const fetchCategories = () => {
  return dispatch => {
    courseService
      .fetchCategories()
      .then(res => {
        dispatch(reduxAction(FETCH_CATEGORIES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// lấy khóa học theo danh mục
export const setCourseCategories = categoriesId => {
  return dispatch => {
    courseService
      .setCourseCategories(categoriesId)
      .then(res => {
        console.log(res.data);
        dispatch(reduxAction(FETCH_COURSE_CATEGORIES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

