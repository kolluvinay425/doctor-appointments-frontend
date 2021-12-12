import React from "react";
import { Link } from "react-router-dom";
import "../styles/carousel.css";
function CarouselSlide() {
  return (
    <div class="hero-image">
      <div class="hero-text">
        <h1 style={{ fontSize: "35px", fontFamily: "sans-serif" }}>
          Booking Doctor Appointment <br /> Becomes Easier!
        </h1>
        <h3>Book your Doctor Now</h3>
        <Link
          to="hospitals"
          class="btn btn-outline-light btn-lg m-2"
          role="button"
          rel="nofollow"
          id="home-btns"
        >
          Find Hospitals
        </Link>
        <Link
          to="doctors"
          class="btn btn-outline-light btn-lg m-2"
          role="button"
          id="home-btns"
        >
          Find Doctor
        </Link>
      </div>
    </div>
  );
}

export default CarouselSlide;
