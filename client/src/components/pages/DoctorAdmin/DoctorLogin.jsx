import { React, useState, useEffect } from "react";
import { create } from "axios";
import { useHistory } from "react-router";
import { setDoctorInfo, isDocLoggedIn } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import API from "../../../helpers/doctorAuth";

import DoctorSignup from "./SignUp";

import "../../../styles/login.css";
function DoctorLogin() {
  const [isActive, setIsActive] = useState(false);
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });

  const URL = create({ baseURL: "http://localhost:3001" });
  const history = useHistory();
  const dispatch = useDispatch();
  // const path = history.location.pathname;
  // console.log("path!!", path);
  const data = useSelector((s) => s.doctor);
  // console.log("current redux data", data);
  const b = true;
  const login = async () => {
    const email = userCreds.email;
    const password = userCreds.password;

    try {
      const { data } = await URL.post(
        "/doctor/login",
        { email, password },
        { method: "POST" }
      );
      console.log("Tokens", data);
      if (data) {
        localStorage.setItem("DocaccessToken", data.accessToken);
        localStorage.setItem("DocrefreshToken", data.refreshToken);
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }

    getUserInfo();
  };

  const getUserInfo = async () => {
    try {
      const { data } = await API.get("/doctor/profile/d");
      console.log("doctor", data);
      if (data) {
        dispatch(setDoctorInfo(data));
        dispatch(isDocLoggedIn(b));
        history.push("/doctor/admin");
      } else {
        console.log("enter password or email corretly");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //..........userToggle.......
  const toggleAuth = () => {
    console.log("clicked");
    setIsActive(!isActive);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container register">
        <div className="row">
          <div className="col-md-12">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  onClick={toggleAuth}
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={toggleAuth}
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  SignUp
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active text-align form-new"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {isActive ? (
                  <DoctorSignup />
                ) : (
                  <>
                    <h3 className="register-heading">Log in</h3>
                    <div className="row register-form">
                      <div className="col-md-12">
                        <form method="post">
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setUserCreds({
                                  ...userCreds,
                                  email: e.target.value,
                                })
                              }
                              value={userCreds.email}
                              type="text"
                              className="form-control"
                              placeholder="Your Email *"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setUserCreds({
                                  ...userCreds,
                                  password: e.target.value,
                                })
                              }
                              value={userCreds.password}
                              type="password"
                              className="form-control"
                              placeholder="Your Password *"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onClick={(e) => login(e)}
                              type="button"
                              value="Login"
                            />
                            <a
                              href="ForgetPassword.php"
                              className="btnForgetPwd"
                              value="Login"
                            >
                              Forget Password?
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                className="tab-pane fade show text-align form-new"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default DoctorLogin;
