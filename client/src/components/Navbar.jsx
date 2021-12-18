import React from "react";
import { MdMedicalServices } from "react-icons/md";
import { NavLink as Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn, setUserInfo } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Alert } from "react-bootstrap";

import "../styles/carousel.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../helpers/NavbarElements";
function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const b = false;
  const data = [];
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    //localStorage.clear();
    dispatch(isLoggedIn(b));
    dispatch(setUserInfo(data));
    history.push("/");
  };

  const isUserLoddedIn = useSelector((s) => s.user);
  const loginAlert = useSelector((s) => s.appointment.isBooked);
  const bookingAlert = useSelector((s) => s.appointment.isAppointmentBooked);

  return (
    <>
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
          {isUserLoddedIn.isLoggedIn ? (
            <NavLink to="" onClick={logout} activeStyle>
              <b style={{ color: "white" }}>Log Out</b>
            </NavLink>
          ) : (
            ""
          )}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {isUserLoddedIn.isLoggedIn ? (
          <>
            <NavBtn>
              <Link to="user-profile">
                <img
                  className="rounded"
                  style={{
                    maxWidth: "35px",
                    cursor: "pointer",
                  }}
                  src={isUserLoddedIn.data.image}
                  alt=""
                />
              </Link>
            </NavBtn>
          </>
        ) : (
          <NavBtn>
            <NavBtnLink to="/authenticate">
              <b>Register / Login</b>{" "}
            </NavBtnLink>
          </NavBtn>
        )}
      </Nav>
      {loginAlert && (
        <Alert style={{ height: "150px" }} variant="info">
          <b>Please login to book appointment with doctor</b>
        </Alert>
      )}
      {bookingAlert && (
        <Alert variant="success">
          <b>
            appointment booked successfully check your email for conformation
          </b>
        </Alert>
      )}
    </>
  );
}

export default NavBar;
