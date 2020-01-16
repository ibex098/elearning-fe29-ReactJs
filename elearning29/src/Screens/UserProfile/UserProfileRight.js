import React, { Component } from "react";

class UserProfileRight extends Component {
  render() {
    return (
      <div className="col-lg-8 mt-4 userProfile__right">
        <div className="card shadow_1 p-5">
          <ul className="nav tab-line border-bottom mb-4" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active show"
                data-toggle="tab"
                href="#MyCourses"
                role="tab"
                aria-selected="true"
              >
                My Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#MyWishlist"
                role="tab"
                aria-selected="false"
              >
                My Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#myOrder"
                role="tab"
                aria-selected="false"
              >
                My Order
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#message"
                role="tab"
                aria-selected="false"
              >
                Message
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#settings"
                role="tab"
                aria-selected="false"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="MyCourses"
              role="tabpanel"
            >
              <div className="row course__items">
                <div className="col-lg-6 col-md-6 marginTop-30 course__item my-4">
                  <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
                    <span className="course__ribbon text-white">
                      Best selling
                    </span>
                    <img className="card-img-top" src="./img/10.jpg" alt />
                    <div className="card-body">
                      <a href="#" className="h5">
                        Node.js, Express &amp; MongoDB Dev to Deployment
                      </a>
                      <p className="my-3 text_gray course__user">
                        <span className="lnr lnr-user" />
                        Andrew Mead
                      </p>
                      <ul className="list-unstyled course__raiting">
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="text_gray">
                          <span>(4.9)</span>
                          <span>4578</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer media align-items-center justify-content-between">
                      <ul className="list-unstyled mb-0 text_gray">
                        <li className="mb-1">
                          <i className="fa fa-headphones-alt mr-2" />
                          46 lectures
                        </li>
                        <li className="mb-1">
                          <span className="lnr lnr-clock mr-2" />
                          27.5 hours
                        </li>
                      </ul>
                      <h4 className="h5">
                        <span className="text_green">$180</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 marginTop-30 course__item my-4">
                  <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
                    <span className="course__ribbon text-white">
                      Best selling
                    </span>
                    <img className="card-img-top" src="./img/10.jpg" alt />
                    <div className="card-body">
                      <a href="#" className="h5">
                        Node.js, Express &amp; MongoDB Dev to Deployment
                      </a>
                      <p className="my-3 text_gray course__user">
                        <span className="lnr lnr-user" />
                        Andrew Mead
                      </p>
                      <ul className="list-unstyled course__raiting">
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="text_gray">
                          <span>(4.9)</span>
                          <span>4578</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer media align-items-center justify-content-between">
                      <ul className="list-unstyled mb-0 text_gray">
                        <li className="mb-1">
                          <i className="fa fa-headphones-alt mr-2" />
                          46 lectures
                        </li>
                        <li className="mb-1">
                          <span className="lnr lnr-clock mr-2" />
                          27.5 hours
                        </li>
                      </ul>
                      <h4 className="h5">
                        <span className="text_green">$180</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 marginTop-30 course__item my-4">
                  <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
                    <span className="course__ribbon text-white">
                      Best selling
                    </span>
                    <img className="card-img-top" src="./img/10.jpg" alt />
                    <div className="card-body">
                      <a href="#" className="h5">
                        Node.js, Express &amp; MongoDB Dev to Deployment
                      </a>
                      <p className="my-3 text_gray course__user">
                        <span className="lnr lnr-user" />
                        Andrew Mead
                      </p>
                      <ul className="list-unstyled course__raiting">
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="text_gray">
                          <span>(4.9)</span>
                          <span>4578</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer media align-items-center justify-content-between">
                      <ul className="list-unstyled mb-0 text_gray">
                        <li className="mb-1">
                          <i className="fa fa-headphones-alt mr-2" />
                          46 lectures
                        </li>
                        <li className="mb-1">
                          <span className="lnr lnr-clock mr-2" />
                          27.5 hours
                        </li>
                      </ul>
                      <h4 className="h5">
                        <span className="text_green">$180</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <a href="#" className="btn_outline_green">
                    <i className="fa fa-sync" />
                    Load More
                  </a>
                </div>
              </div>
            </div>
            {/* END tab-pane */}
            <div className="tab-pane fade" id="MyWishlist" role="tabpanel">
              <div className="row course__items">
                <div className="col-lg-6 col-md-6 marginTop-30 course__item my-4">
                  <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
                    <span className="course__ribbon text-white">
                      Best selling
                    </span>
                    <img className="card-img-top" src="./img/10.jpg" alt />
                    <div className="card-body">
                      <a href="#" className="h5">
                        Node.js, Express &amp; MongoDB Dev to Deployment
                      </a>
                      <p className="my-3 text_gray course__user">
                        <span className="lnr lnr-user" />
                        Andrew Mead
                      </p>
                      <ul className="list-unstyled course__raiting">
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="text_gray">
                          <span>(4.9)</span>
                          <span>4578</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer media align-items-center justify-content-between">
                      <ul className="list-unstyled mb-0 text_gray">
                        <li className="mb-1">
                          <i className="fa fa-headphones-alt mr-2" />
                          46 lectures
                        </li>
                        <li className="mb-1">
                          <span className="lnr lnr-clock mr-2" />
                          27.5 hours
                        </li>
                      </ul>
                      <h4 className="h5">
                        <span className="text_green">$180</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 marginTop-30 course__item my-4">
                  <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
                    <span className="course__ribbon text-white">
                      Best selling
                    </span>
                    <img className="card-img-top" src="./img/10.jpg" alt />
                    <div className="card-body">
                      <a href="#" className="h5">
                        Node.js, Express &amp; MongoDB Dev to Deployment
                      </a>
                      <p className="my-3 text_gray course__user">
                        <span className="lnr lnr-user" />
                        Andrew Mead
                      </p>
                      <ul className="list-unstyled course__raiting">
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="text_gray">
                          <span>(4.9)</span>
                          <span>4578</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer media align-items-center justify-content-between">
                      <ul className="list-unstyled mb-0 text_gray">
                        <li className="mb-1">
                          <i className="fa fa-headphones-alt mr-2" />
                          46 lectures
                        </li>
                        <li className="mb-1">
                          <span className="lnr lnr-clock mr-2" />
                          27.5 hours
                        </li>
                      </ul>
                      <h4 className="h5">
                        <span className="text_green">$180</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 marginTop-30 course__item my-4">
                  <div className="card text-gray overflow-hidden shadow_1 h-100 course__card">
                    <span className="course__ribbon text-white">
                      Best selling
                    </span>
                    <img className="card-img-top" src="./img/10.jpg" alt />
                    <div className="card-body">
                      <a href="#" className="h5">
                        Node.js, Express &amp; MongoDB Dev to Deployment
                      </a>
                      <p className="my-3 text_gray course__user">
                        <span className="lnr lnr-user" />
                        Andrew Mead
                      </p>
                      <ul className="list-unstyled course__raiting">
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="active">
                          <i className="fas fa-star" />
                        </li>
                        <li className="text_gray">
                          <span>(4.9)</span>
                          <span>4578</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer media align-items-center justify-content-between">
                      <ul className="list-unstyled mb-0 text_gray">
                        <li className="mb-1">
                          <i className="fa fa-headphones-alt mr-2" />
                          46 lectures
                        </li>
                        <li className="mb-1">
                          <span className="lnr lnr-clock mr-2" />
                          27.5 hours
                        </li>
                      </ul>
                      <h4 className="h5">
                        <span className="text_green">$180</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center mt-5">
                  <a href="#" className="btn_outline_green">
                    <i className="fa fa-sync" />
                    Load More
                  </a>
                </div>
              </div>
              {/* END row*/}
            </div>
            {/* END tab-pane */}
            <div className="tab-pane fade" id="myOrder" role="tabpanel">
              <div className="table-responsive my-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="text-dark font-weight-semiBold"
                      >
                        #00004673
                      </th>
                      <td>01 Aug 2018</td>
                      <td>$49</td>
                      <td>
                        <a href="#" className="text_green p-2">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="text-dark font-weight-semiBold"
                      >
                        #05604673
                      </th>
                      <td>07 Aug 2018</td>
                      <td>$300</td>
                      <td>
                        <a href="#" className="text_green p-2">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="text-dark font-weight-semiBold"
                      >
                        #07O4673
                      </th>
                      <td>16 Aug 2018</td>
                      <td>$34</td>
                      <td>
                        <a href="#" className="text_green p-2">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="text-dark font-weight-semiBold"
                      >
                        #06454673
                      </th>
                      <td>24 Aug 2018</td>
                      <td>$10</td>
                      <td>
                        <a href="#" className="text_green p-2">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="text-dark font-weight-semiBold"
                      >
                        #0000435
                      </th>
                      <td>28 Aug 2018</td>
                      <td>$199</td>
                      <td>
                        <a href="#" className="text_green p-2">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* END tab-pane */}
            <div className="tab-pane fade" id="message" role="tabpanel">
              <form action="#" method="POST" className="p-4">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      rows={5}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <button className="btn_green">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
            {/* END tab-pane */}
            <div className="tab-pane fade" id="settings" role="tabpanel">
              <div className="border-bottom mb-4 pb-4 uploadAvatar">
                <h4>Upload Avatar</h4>
                <div className="media align-items-end mt-4">
                  <div className="position-relative">
                    <input
                      type="file"
                      className="opacity-0 position-absolute as-parent"
                    />
                    <img src="./img/placeholder-1.jpg" alt />
                  </div>
                  <div className="media-body ml-4 mb-4 mb-md-0">
                    <p className="text_gray">JPG or PNG 200x200 px</p>
                    <a href />
                    <button className="btn_outline_green">
                      <input
                        type="file"
                        className="opacity-0 position-absolute"
                      />
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-4 pb-4 manageAcc">
                <h4 className="mb-4">Manage your Account</h4>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Full Name
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Nhan Nguyen"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Position
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="FrontEnd Web Developer"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="nhan120298@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Phone
                  </label>
                  <div className="col-md-9">
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="+8492 4444 740"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Location
                  </label>
                  <div className="col-md-9">
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="D4 HCM Viet Nam"
                    />
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-4 pb-4">
                <h4 className="mb-4">Security Settings</h4>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Current Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      className="form-control"
                      defaultValue={123456}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    New Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      className="form-control"
                      placeholder={12345678}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Confirm Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      className="form-control"
                      placeholder={12345678}
                    />
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-4 pb-4">
                <h4 className="mb-4">Social Account</h4>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Facebook
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="https://fb.com/dier0298"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Twitter
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="https://Twitter.com/dier0298"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Linkdin
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="https://Linkdin.com/dier0298"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-3 col-form-label text-dark">
                    Google
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="https://Google.com/dier0298"
                    />
                  </div>
                </div>
              </div>
              <div className="border-bottom mb-4 pb-4">
                <h4 className="mb-4">About You</h4>
                <textarea
                  rows={6}
                  className="form-control"
                  defaultValue={
                    "        Dummy text of the printing and typesetting industry. It was popular ised in the kest with the release of Letraset sheets contain was luing lorem kepsum passages, and more recently with desktop publishing software.\n                             "
                  }
                />
              </div>
              <div className="my-5">
                <button className="btn_green m-2">Update Profile</button>
                <button className="btn_red m-2">Cancel</button>
              </div>
            </div>
            {/* END tab-pane */}
          </div>
          {/* END tab-content*/}
        </div>
        {/* END card*/}
      </div>
    );
  }
}

export default UserProfileRight;
