import React from "react";
import { MdMedicalServices } from "react-icons/md";
import { NavLink as Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../store/actions";
import { isDocLoggedIn, setDoctorInfo } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { BsFillCaretDownFill } from "react-icons/bs";

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
    localStorage.clear();
    dispatch(isDocLoggedIn(b));
    dispatch(setDoctorInfo(data));

    history.push("/");
  };
  const isDocLoggededIn = useSelector((s) => s.doctor);
  console.log("cfrom nav component", isDocLoggededIn);
  return (
    <>
      <Nav>
        <Link to="/">
          <h1 style={{ color: "white", curser: "pointer" }}>
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
          {isDocLoggededIn.isDocLoggedIn ? (
            <NavLink to="" onClick={logout} activeStyle>
              <b>Log Out</b>
              <BsFillCaretDownFill />
            </NavLink>
          ) : (
            ""
          )}

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {isDocLoggededIn.isDocLoggedIn ? (
          <>
            <NavBtn>
              <Link to="user-profile">
                <img
                  className="rounded"
                  style={{
                    maxWidth: "35px",
                    cursor: "pointer",
                  }}
                  src={isDocLoggededIn.data.image}
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
    </>
  );
}

export default NavBar;
