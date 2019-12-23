import React, { Component } from "react";
import "../../sass/Page/_login.scss";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { signUp, fetchUserList } from "../../Redux/Action/Action";

const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Username is required!"),
  matKhau: yup.string().required("Password is required!"),
  hoTen: yup.string().required("Name is required!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Email is invalid!"),
  soDT: yup
    .string()
    .required("Phone number is required!")
    .matches(/^[0-9]+$/, "Phone number must be numberic"),
  maNhom: yup.string().required("IdGroup is required!")
});

class SignUp extends Component {
  _handleSubmit = values => {
    this.props.dispatch(signUp(values));
  };
  render() {
    return (
      <section className="login signUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card shadow_2">
                <div className="card-header border-bottom">
                  <h4 className="mt-4">Log In to Your Account!</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col my-2">
                      <button className="btn_facebook">
                        <i className="fab fa-facebook-f" />
                        <span>Facebook Sign in</span>
                      </button>
                    </div>
                    <div className="col my-2">
                      <button className="btn_red btn_google">
                        <i className="fab fa-google-plus-g" />
                        <span>Google Sign in</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-center my-4">OR</p>
                  <Formik
                    initialValues={{
                      taiKhoan: "",
                      matKhau: "",
                      hoTen: "",
                      email: "",
                      soDT: "",
                      maNhom: "GP01"
                    }}
                    validationSchema={signUpUserSchema}
                    onSubmit={this._handleSubmit}
                  >
                    {formikProps => (
                      <Form className="px-lg-4 login_form">
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg_white text_green">
                              person_add
                            </i>
                          </div>
                          <Field
                            type="text"
                            className="form-control border-left-0 pl-2"
                            placeholder="username"
                            name="taiKhoan"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="taiKhoan">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg_white text_green">
                              lock_outline
                            </i>
                          </div>
                          <Field
                            type="password"
                            className="form-control border-left-0 pl-2"
                            placeholder="Password"
                            name="matKhau"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="matKhau">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg_white text_green">
                              perm_identity
                            </i>
                          </div>
                          <Field
                            type="text"
                            className="form-control border-left-0 pl-2"
                            placeholder="Full Name"
                            name="hoTen"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="hoTen">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg_white text_green">
                              mail_outline
                            </i>
                          </div>
                          <Field
                            type="text"
                            className="form-control border-left-0 pl-2"
                            placeholder="Email"
                            name="email"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="email">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg_white text_green">
                              phone
                            </i>
                          </div>
                          <Field
                            type="text"
                            className="form-control border-left-0 pl-2"
                            placeholder="Phone Number"
                            name="soDT"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="soDT">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <label
                              className="input-group-text bg_white text_green"
                              htmlFor="inputGroupSelect01"
                            >
                              Group
                            </label>
                          </div>
                          <select
                            className="custom-select form-control"
                            id="inputGroupSelect01"
                            name="maNhom"
                            onChange={formikProps.handleChange}
                            component="select"
                          >
                            <option defaultValue>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                            <option>GP04</option>
                            <option>GP05</option>
                            <option>GP06</option>
                            <option>GP07</option>
                            <option>GP08</option>
                            <option>GP09</option>
                            <option>GP10</option>
                          </select>
                        </div>

                        <div className="d-md-flex justify-content-between my-4">
                          <div className="custom-control custom-checkbox check-sm my-2 clearfix">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              By signing up, you agree to our
                            </label>
                            <a
                              href="page-terms-and-privacy-policy.html"
                              className="text_green"
                            >
                              Terms of Use
                            </a>
                            and
                            <a
                              href="page-terms-and-privacy-policy.html"
                              className="text_green"
                            >
                              Privacy Policy.
                            </a>
                          </div>
                        </div>
                        <button className="btn_green w-100" type="submit">
                          Log In
                        </button>
                        <p className="my-5 text-center">
                          Already have an account?
                          <a href="/" className="text_green">
                            Login
                          </a>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
//   componentDidMount() {
//     this.props.dispatch(fetchUserList());
//   }
}

const mapStateToProps = state => {
  return {
    userList: state.UserList.userList
  };
};

export default connect(mapStateToProps, null)(SignUp);
