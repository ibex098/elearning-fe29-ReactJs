import { resConnector } from "./Index";

class UserServices {
  // đăng ký người dùng là học viên
  signUp(data) {
    return resConnector({
      url: "/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data
    });
  }
  //lấy danh sách người dùng
  fetchUserList() {
    return resConnector({
      url: "/api/QuanLyNguoiDung/LayDanhSachNguoiDung",
      method: "GET"
    });
  }
  // đăng nhập
  login(userLogin) {
    return resConnector({
      url: "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userLogin
    });
  }
}
export default UserServices;
