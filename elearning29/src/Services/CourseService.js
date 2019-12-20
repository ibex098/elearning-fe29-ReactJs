import { resConnector } from "./Index";

class CourseServices {
  fetchCourse() {
    return resConnector({
      url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET"
    });
  }
}

export default CourseServices;
