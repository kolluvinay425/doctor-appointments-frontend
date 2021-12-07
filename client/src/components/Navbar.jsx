import React from "react";
import { MdMedicalServices } from "react-icons/md";
import { NavLink as Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn, setUserInfo } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

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
    dispatch(isLoggedIn(b));
    dispatch(setUserInfo(data));
    history.push("/");
  };
  const isUserLoddedIn = useSelector((s) => s.user);
  console.log("cfrom nav component", isUserLoddedIn);
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
          {isUserLoddedIn.isLoggedIn ? (
            <NavLink to="" onClick={logout} activeStyle>
              <b>Log Out</b>
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
    </>
  );
}

export default NavBar;
