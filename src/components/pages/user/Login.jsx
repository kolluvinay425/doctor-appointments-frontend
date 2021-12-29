import { React, useState } from "react";
import { create } from "axios";
import { useHistory } from "react-router";
import { Spinner } from "react-bootstrap";
import { setUserInfo, isLoggedIn } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { loginAlert } from "../../../store/actions";
import API from "../../../helpers/apiFetches";
import "../../../styles/login.css";
import { BE_URL } from "../../../helpers/apiFetches";
import UserSignUp from "./UserSignUp";
export const URL = create({ baseURL: BE_URL });

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  // const path = history.location.pathname;
  // console.log("path!!", path);
  const data = useSelector((s) => s.user);
  console.log("current redux data", data);
  const b = true;
  const login = async () => {
    const email = userCreds.email;
    const password = userCreds.password;
    try {
      setIsLoading(true);
      const { data } = await URL.post(
        "/user/login",
        { email, password },
        { method: "POST" }
      );
      console.log("Tokens", data);
      if (data) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
      setIsError(true);
    }

    getUserInfo();
  };

  const getUserInfo = async () => {
    try {
      const { data } = await API.get("/user/me");
      console.log("me", data);
      if (data) {
        dispatch(loginAlert(false));
        dispatch(setUserInfo(data));
        dispatch(isLoggedIn(b));
        history.push("/");
      } else {
        console.log("enter password or email corretly");
      }
    } catch (error) {
      console.log("enter password or email corretly");
    }
  };

  // setTimeout(() => {
  //   dispatch(loginAlert(true));
  // }, 5000);
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
      <br />
      <br />
      <br />

      <div style={{ height: "100vh" }}>
        <div class="container register" style={{ minWidth: "150px" }}>
          <div class="row">
            <div class="col-md-12">
              <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li class="nav-item">
                  <input
                    onClick={toggleAuth}
                    class="nav-link active"
                    id="home-tab"
                    type="button"
                    value="Login"
                  />
                </li>
                <li class="nav-item">
                  <input
                    onClick={toggleAuth}
                    class="nav-link active"
                    id="profile-tab"
                    type="button"
                    value="SignUp"
                  />
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active text-align form-new"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {isActive ? (
                    <>
                      <UserSignUp />
                    </>
                  ) : (
                    <>
                      <h3 class="register-heading">Log in</h3>
                      <div class="row register-form">
                        <div class="col-md-12">
                          {isLoading && (
                            <Spinner animation="grow" varient="dark" />
                          )}
                          {isError && (
                            <p className="text-red">
                              Check Credentionals correctly and try again
                            </p>
                          )}
                          <form method="post">
                            <div class="form-group">
                              <input
                                onChange={(e) =>
                                  setUserCreds({
                                    ...userCreds,
                                    email: e.target.value,
                                  })
                                }
                                value={userCreds.email}
                                type="text"
                                class="form-control"
                                placeholder="Your Email *"
                                style={{ minWidth: "120px" }}
                              />
                            </div>
                            <br />
                            <div class="form-group">
                              <input
                                onChange={(e) =>
                                  setUserCreds({
                                    ...userCreds,
                                    password: e.target.value,
                                  })
                                }
                                value={userCreds.password}
                                type="password"
                                class="form-control"
                                placeholder="Your Password *"
                                style={{ minWidth: "120px" }}
                              />
                            </div>
                            <br />
                            <div class="form-group">
                              <input
                                onClick={(e) => login(e)}
                                type="button"
                                value="Login"
                              />
                              <br />
                              <br />
                              <input
                                href="ForgetPassword.php"
                                className="btnForgetPwd text-dark"
                                value="Forget Password?"
                                type="button"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  class="tab-pane fade show text-align form-new"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
