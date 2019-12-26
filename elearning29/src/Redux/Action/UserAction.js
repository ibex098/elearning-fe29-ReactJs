import UserServices from "../../Services/UserServices";
import { ADD_USER, LOGIN, LOGOUT } from "./Type";
import { reduxAction } from "./CourseAction";
import swal from "sweetalert";
import { settings } from "../../Config/Setting";
import { resConnector } from "../../Services/Index";

const userService = new UserServices();

// Đăng ký tài khoản học viên
export const signUp = (data, history) => {
  return dispatch => {
    userService
      .signUp(data)
      .then(res => {
        console.log(res.data);
        dispatch(reduxAction(ADD_USER, res.data));
        // swal("Good job!", "You clicked the button!", "success");
        history.push("/");
      })
      .catch(err => {
        console.log(err);
        swal("ERROR!", "You clicked the button!", "warning");
      });
  };
};

//đăng nhập User
export const login = (userLogin, history) => {
  return dispatch => {
    userService
      .login(userLogin)
      .then(res => {
        console.log(res.data);
        //lưu thông tin người dùng lên localstogare
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));

        //lưu token để tự động đăng nhập vào lần truy cập kế tiếp
        localStorage.setItem(settings.token, res.data.accessToken);

        //gửi action lên store để kiểm tra trạng thái đăng nhập
        dispatch(reduxAction(LOGIN, res.data));

        //bỏ token lên header của tất cả requet
        resConnector.defaults.headers["Athorization"] =
          "Bearer" + res.data.accessToken;

        // chuyển tới trang chủ
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//đăng suất tài khoản
export const logout = () => {
  return dispatch => {
    localStorage.removeItem(settings.userLogin);
    localStorage.removeItem(settings.token);
    dispatch(reduxAction((LOGOUT, {})));
    resConnector.defaults.headers["Athorization"] = null;
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
