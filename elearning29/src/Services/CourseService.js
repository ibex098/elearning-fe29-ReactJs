import { resConnector } from "./Index";

class CourseServices {
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
  fetchCourseCategories(categoriesId) {
    return resConnector({
      url:
        `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoriesId}&MaNhom=GP01`,
      method: "GET"
    });
  }
}

export default CourseServices;
