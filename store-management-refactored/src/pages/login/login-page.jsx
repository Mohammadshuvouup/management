import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login-page.css";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Formik } from "formik";
import UserList from "../../components/userlist";

const LoginPage = (props) => {
  const { history } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isloggediin ", isLoggedIn);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = React.useState(initialState);
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const [user, setUser] = useState([{ email: " ", password: " " }]);
  // const [user, setUser] = useState(null);

  return (
    <Formik
      {...props}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitting");
        console.log("values", values);

        if (values.email === "admin@gmail.com" && values.password === "1234") {
          setIsLoggedIn(true);
          setUser({ ...user, email: values.email, password: values.password });
          history.push("/home");
        }

        // const newUsers = { email: values.email, password: values.password };

        console.log("User state ", user);
      }}
      src
      validationSchema={Yup.object().shape({
        email: Yup.string() //should be a string
          .email() //shoulb be an email
          .required("Email required"),
        website: Yup.string().url(),
        createdOn: Yup.date()
          .default(function () {
            return new Date();
          })
          .test("email-match", "email must match admin", function () {
            console.log("this.parent.email ", this.parent.email);
            return this.parent.email === "admin@gmail.com";
          }),

        password: Yup.string()
          .required("Password required")
          .min(4, "Password should contain 4 characters")
          .max(4, "Password should contain 4 characters")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(prop) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = prop;

        return (
          <div className="container">
            <h2>{props.hello}</h2>
            <div className="row">
              <div className="col-md-6 session_list">
                <ul data-role="listview" data-inset="true">
                  {isLoggedIn && <UserList userArray={user} />}
                  {/* <li>
                    <a href="#">
                      <img src="login_bg.jpg"></img>
                      <h2>Person1</h2>
                      <p>Seller1</p>
                    </a>
                  </li> */}
                  <li>
                    <a href="#">
                      <img src="login_bg.jpg"></img>
                      <h2>Person2</h2>

                      <p>Seller2</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 validationForm">
                <form onSubmit={handleSubmit}>
                  <div className="row d-flex justify-content-end pt-5 pb-4">
                    <div className="col-md-6 ">
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // validate={validateEmail}
                        className={errors.email && touched.email && "error"}
                      />
                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end pb-4">
                    <div className="col-md-6">
                      <label htmlFor="email">Password</label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password && "error"
                        }
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <div className="row text-center d-flex justify-content-end">
                    <div className="col-md-6">
                      <button
                        className="LoginBtn"
                        type="submit"
                        disabled={isSubmitting}
                        // onClick={onSubmit}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
