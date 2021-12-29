import { React, useState } from "react";
import { create } from "axios";
import { useHistory } from "react-router";
import { setDoctorInfo, isDocLoggedIn } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import API from "../../../helpers/doctorAuth";

import DoctorSignup from "./SignUp";

import "../../../styles/login.css";
import Button from "@restart/ui/esm/Button";
function DoctorLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });

  const URL = create({
    baseURL: "https://doctor-finder-vny.herokuapp.com",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  // const path = history.location.pathname;
  // console.log("path!!", path);
  //const data = useSelector((s) => s.doctor);
  // console.log("current redux data", data);
  const b = true;
  const login = async () => {
    const email = userCreds.email;
    const password = userCreds.password;

    try {
      setIsLoading(true);
      const { data } = await URL.post(
        "/doctor/login",
        { email, password },
        { method: "POST" }
      );
      console.log("Tokens", data);
      if (data) {
        localStorage.setItem("DocaccessToken", data.accessToken);
        localStorage.setItem("DocrefreshToken", data.refreshToken);
        setIsLoading(false);
      } else {
        console.log("bad request");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
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
                <input
                  onClick={toggleAuth}
                  className="nav-link active"
                  id="home-tab"
                  type="button"
                  value="Login"
                />
              </li>
              <li className="nav-item">
                <input
                  onClick={toggleAuth}
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  value="SignUp"
                  type="button"
                />
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
                        {isLoading && (
                          <Spinner animation="grow" varient="dark" />
                        )}
                        {isError && (
                          <p className="text-red">
                            Check Credentionals correctly and try again
                          </p>
                        )}
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
                              style={{ maxWidth: "70px", maxHeight: "50px" }}
                            />
                            <br />
                            <br />
                          </div>
                          <input
                            href="ForgetPassword.php"
                            className="btnForgetPwd text-dark"
                            value="Forget Password?"
                            type="button"
                          />
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
