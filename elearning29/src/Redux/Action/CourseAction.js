import CourseService from "../../Services/CourseService";
import {
  FETCH_COURSE_CATEGORIES,
  FETCH_CATEGORIES,
  FETCH_ALL_COURSES,
  FETCH_COURSE_DETAIL,
  FETCH_COURSE_PAGE
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
        // console.log(res.data);
        dispatch(reduxAction(FETCH_COURSE_CATEGORIES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// lấy tất cả khóa học theo mã nhóm GP01
export const fetchAllCourses = () => {
  return dispatch => {
    courseService
      .fetchAllCourses()
      .then(res => {
        console.log(res.data);
        dispatch(reduxAction(FETCH_ALL_COURSES, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// lấy thông tin khóa học với mã khóa học là tham số truyền vào
export const fetchCourseDetail = courseId => {
  return dispatch => {
    courseService
      .fetchCourseDetail(courseId)
      .then(res => {
        console.log(res.data);
        dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// lấy danh sách khóa học phân trang
export const fetchCoursePage = () => {
  return dispatch => {
    courseService
      .fetchCoursePage()
      .then(res => {
        // console.log(res.data.items);
        dispatch(reduxAction(FETCH_COURSE_PAGE,res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
