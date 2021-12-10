import { React, useState, useEffect } from "react";
import { create } from "axios";
import { useHistory } from "react-router";
import { setUserInfo, isLoggedIn } from "../../../store/actions";
import { setDoctorInfo, isDocLoggedIn } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import API from "../../../helpers/apiFetches";
import { getHospitals, doctorRegister } from "../../../helpers/apiFetches";

import "../../../styles/login.css";
function Login() {
  const [hnames, setHnames] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });
  const [docRegister, setDocRigister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialization: "",
    clinicLocation: "",
    hospital: "",
    password: "",
  });
  const URL = create({ baseURL: "http://localhost:3001" });
  const history = useHistory();
  const dispatch = useDispatch();
  // const path = history.location.pathname;
  // console.log("path!!", path);
  const data = useSelector((s) => s.doctor);
  console.log("current redux data", data);
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
      const { data } = await API.get("/doctor/");
      console.log("doctor", data);
      if (data) {
        dispatch(setDoctorInfo(data));
        dispatch(isDocLoggedIn(b));
        history.push("/");
      } else {
        console.log("enter password or email corretly");
      }
    } catch (error) {
      console.log("enter password or email corretly");
    }
  };

  //..........userToggle.......
  const toggleAuth = () => {
    console.log("clicked");
    setIsActive(!isActive);
  };
  useEffect(() => {
    const gethospitalNames = async (event) => {
      const data = await getHospitals();
      setHnames(data);
      console.log("hospitalsss", data);
    };
    gethospitalNames();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("daaaa", docRegister);
    try {
      const resp = await fetch("http://localhost:3001/doctor/register", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(docRegister),
      });
      if (resp) {
        const data = await resp.json();
        console.log(data);
        history.push("/authenticate");
      }
    } catch (error) {}
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
                  <>
                    <h3 className="register-heading">Register Here</h3>
                    <div className="row register-form">
                      <div className="col-md-12">
                        <form method="post">
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  firstName: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control"
                              placeholder="Your First Name *"
                              value={docRegister.firstName}
                              required="true"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  lastName: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control"
                              placeholder="Your Last Name *"
                              value={docRegister.lastName}
                              required="true"
                            />
                          </div>
                          <br />

                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  email: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control"
                              placeholder="email *"
                              value={docRegister.email}
                              required="true"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  specialization: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control"
                              placeholder=" specialization *"
                              value={docRegister.specialization}
                              required="true"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  clinicLocation: e.target.value,
                                })
                              }
                              type="text"
                              className="form-control"
                              placeholder="if u have clinic, enter the name *"
                              value={docRegister.clinicLocation}
                              required="false"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <select
                              className="form-control"
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  hospital: e.target.value,
                                })
                              }
                            >
                              <option value="">Choose hospital</option>

                              {hnames &&
                                hnames.map((h, i) => (
                                  <option value={h.name}>{h.name} </option>
                                ))}
                            </select>
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onChange={(e) =>
                                setDocRigister({
                                  ...docRegister,
                                  password: e.target.value,
                                })
                              }
                              type="password"
                              className="form-control"
                              placeholder="Your Password *"
                              value={docRegister.password}
                              required="true"
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              onClick={handleSubmit}
                              type="button"
                              value="Submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
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
    </>
  );
}

export default Login;
