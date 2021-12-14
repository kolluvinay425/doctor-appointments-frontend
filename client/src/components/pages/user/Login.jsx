import { React, useState } from "react";
import { create } from "axios";
import { useHistory } from "react-router";
import { setUserInfo, isLoggedIn, isAlert } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { loginAlert } from "../../../store/actions";
import API from "../../../helpers/apiFetches";
import "../../../styles/login.css";
export const URL = create({ baseURL: "http://localhost:3001" });

function Login() {
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
      const { data } = await URL.post(
        "/user/login",
        { email, password },
        { method: "POST" }
      );
      console.log("Tokens", data);
      if (data) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      } else {
      }
    } catch (error) {
      console.log("error", error);
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
      <div class="container register">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  onClick={toggleAuth}
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a
                  onClick={toggleAuth}
                  class="nav-link active"
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
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active text-align form-new"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {isActive ? (
                  <>
                    <h3 class="register-heading">Register Here</h3>
                    <div class="row register-form">
                      <div class="col-md-12">
                        <form method="post">
                          <div class="form-group">
                            <input
                              type="text"
                              name="LGform1_user"
                              class="form-control"
                              placeholder="Your First Name *"
                              value=""
                              required=""
                            />
                          </div>
                          <br />
                          <div class="form-group">
                            <input
                              type="text"
                              name="LGform1_user"
                              class="form-control"
                              placeholder="Your Last Name *"
                              value=""
                              required=""
                            />
                          </div>
                          <br />
                          <div class="form-group">
                            <input
                              type="email"
                              name="LGform1_user"
                              class="form-control"
                              placeholder="Your Email *"
                              value=""
                              required=""
                            />
                          </div>
                          <br />
                          <div class="form-group">
                            <input
                              type="password"
                              name="LGform1_pwd"
                              class="form-control"
                              placeholder="Your Password *"
                              value=""
                              required=""
                            />
                          </div>
                          <br />
                          <div class="form-group">
                            <input
                              type="submit"
                              name="LGform1"
                              class="btnContactSubmit"
                              value="Submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 class="register-heading">Log in</h3>
                    <div class="row register-form">
                      <div class="col-md-12">
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
                            />
                          </div>
                          <br />
                          <div class="form-group">
                            <input
                              onClick={(e) => login(e)}
                              type="button"
                              value="Login"
                            />
                            <a
                              href="ForgetPassword.php"
                              class="btnForgetPwd"
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
                class="tab-pane fade show text-align form-new"
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
    </>
  );
}

export default Login;
