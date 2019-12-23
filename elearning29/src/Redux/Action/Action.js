import CourseService from "../../Services/CourseService";
import swal from 'sweetalert';
import {
  FETCH_COURSE_CATEGORIES,
  FETCH_CATEGORIES,
  ADD_USER,
  FETCH_USER_LIST
} from "./Type";
import UserServices from "../../Services/UserServices";

const courseService = new CourseService();
const userService = new UserServices();

//tạo Action dùng chung để gọi ở những nơi khác và chỉ cần truyên 2 tham số là type và payload
const reduxAction = (type, payload) => {
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

// Đăng ký tài khoản học viên
export const signUp = (data) => {
  return dispatch => {
    userService
      .signUp(data)
      .then(res => {
        console.log(res.data);
        dispatch(reduxAction(ADD_USER, res.data));
        swal("Good job!", "You clicked the button!", "success");
      })
      .catch(err => {
        console.log(err);
        swal("ERROR!", "You clicked the button!", "warning");
      });
  };
};

//lấy danh sách người dùng
// export const fetchUserList = () => {
//   return dispatch => {
//     userService
//       .fetchUserList()
//       .then(res => {
//         console.log(res.data);
//         dispatch(reduxAction(FETCH_USER_LIST, res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
