import { resConnector } from "./Index";

class CourseServices {
  // lấy toàn bộ khóa học theo mã nhõm GP01
  fetchCourse() {
    return resConnector({
      url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET"
    });
  }

  //lấy danh mục khóa học
  fetchCategories() {
    return resConnector({
      url: "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      method: "GET"
    });
  }

  //lấy khóa học theo danh mục
  setCourseCategories(categoriesId) {
    return resConnector({
      url:
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoriesId}&MaNhom=GP01`,
      method: "GET"
    });
  }
}

export default CourseServices;
