import React, { Component } from "react";
import "../../sass/Page/_login.scss";
import * as yup from "yup";
import { connect } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { login } from "../../Redux/Action/UserAction";

const loginUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Username is required!"),
  matKhau: yup.string().required("Password is required!")
});

class Login extends Component {
  _handleSubmit = values => {
    // console.log(values);
    console.log(this.props);
    this.props.dispatch(login(values, this.props.history));
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
                  {/* Form Login */}
                  <Formik
                    initialValues={{
                      taiKhoan: "",
                      matKhau: ""
                    }}
                    validationSchema={loginUserSchema}
                    onSubmit={this._handleSubmit}
                  >
                    {formikProps => (
                      <Form className="px-lg-4 login_form">
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg-white text_gray">
                              mail_outline
                            </i>
                          </div>
                          <Field
                            type="text"
                            className="form-control border-left-0 pl-0"
                            placeholder="Email"
                            name="taiKhoan"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="taiKhoan">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <i className="material-icons input-group-text bg-white text_gray">
                              lock_outline
                            </i>
                          </div>
                          <Field
                            type="password"
                            className="form-control border-left-0 pl-0"
                            placeholder="Password"
                            name="matKhau"
                            onChange={formikProps.handleChange}
                          />
                        </div>
                        <ErrorMessage name="matKhau">
                          {msg => <div className="text_red mt-1">{msg}</div>}
                        </ErrorMessage>
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
                              Remember Me
                            </label>
                          </div>
                          <a
                            href="page-recover-password.html"
                            className="text_green my-2 d-block"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button className="btn_green w-100" type="submit">Log In</button>
                        <p className="my-5 text-center">
                          Don’t have an account?
                          <a href="page-signup.html" className="text_green">
                            Register
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
}

export default connect(null, null)(Login);
