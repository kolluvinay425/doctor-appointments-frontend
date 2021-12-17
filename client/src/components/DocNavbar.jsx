import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isDocLoggedIn } from "../store/actions";
import { setDoctorInfo } from "../store/actions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MdMedicalServices } from "react-icons/md";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../helpers/DocNavbar";
function DocNavbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const b = false;
  //   const data = [];
  const logout = () => {
    localStorage.clear();
    dispatch(isDocLoggedIn(false));
    dispatch(setDoctorInfo([]));
    history.push("/");
  };

  const isDocLoddedIn = useSelector((s) => s.doctor);
  console.log("doctor info", isDocLoddedIn.DoctorInfo);
  const loginAlert = useSelector((s) => s.doctor.isPosted);
  //const bookingAlert = useSelector((s) => s.appointment.isAppointmentBooked);
  return (
    <div>
      <Nav>
        <Link to="/">
          <h1 style={{ color: "white", curser: "pointer", fontSize: "40px" }}>
            <MdMedicalServices />
          </h1>
        </Link>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            <b>About</b>
          </NavLink>
          <NavLink to="/services" activeStyle>
            <b>Services</b>
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            <b>Contact Us</b>
          </NavLink>
          {isDocLoddedIn.isDocLoggedIn ? (
            <NavLink
              style={{ color: "white" }}
              to=""
              onClick={logout}
              activeStyle
            >
              <b>Log Out</b>
            </NavLink>
          ) : (
            ""
          )}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {isDocLoddedIn.isDocLoggedIn ? (
          <>
            <NavBtn>
              <Link to="user-profile">
                <img
                  className="rounded"
                  style={{
                    maxWidth: "35px",
                    cursor: "pointer",
                  }}
                  src={isDocLoddedIn.DoctorInfo.image}
                  alt=""
                />
              </Link>
            </NavBtn>
          </>
        ) : (
          <NavBtn>
            <NavBtnLink to="/doctor-login">
              <b>SignUp / Login</b>{" "}
            </NavBtnLink>
          </NavBtn>
        )}
      </Nav>
      {/* {loginAlert && (
        <Alert variant="info">
          Please login to book appointment with doctor
        </Alert>
      )}
      {bookingAlert && (
        <Alert variant="success">
          appointment booked successfully check your email for conformation
        </Alert>
      )} */}
    </div>
  );
}

export default DocNavbar;
