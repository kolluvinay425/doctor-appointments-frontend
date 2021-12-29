import { React, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/carousel.css";
import { useDispatch } from "react-redux";
import { isUserRegistered } from "../store/actions";
function CarouselSlide() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(isUserRegistered(false));
    }, 5000);
  }, []);
  return (
    <>
      <div class="hero-image" style={{ height: "100vh" }}>
        <Navbar />

        <div class="hero-text">
          <h1
            style={{
              fontSize: "35px",
              fontFamily: "inherit",
              textShadow: "2px 2px black",
            }}
          >
            <b>Booking Doctor Appointment</b> <br /> <b>Becomes Easier!</b>
          </h1>
          <h3
            style={{
              fontSize: "25px",
              fontFamily: "inherit",
              textShadow: "2px 2px black",
            }}
          >
            <b>Book your Doctor Now</b>{" "}
          </h3>
          <Link
            to="hospitals"
            class="btn btn-outline-light btn-lg m-2"
            role="button"
            rel="nofollow"
            id="home-btns"
          >
            <b>Find Hospitals</b>
          </Link>
          <Link
            to="doctors"
            class="btn btn-outline-light btn-lg m-2"
            role="button"
            id="home-btns"
          >
            <b> Find Doctor</b>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CarouselSlide;
