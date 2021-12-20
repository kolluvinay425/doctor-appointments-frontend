import React from "react";
import "../../../styles/docDetail.css";
import { Link } from "react-router-dom";

function DocDetail() {
  return (
    <>
      <header style={{ padding: "px" }}>
        <div class="overlay">
          <h3>Hospital Name</h3>
          <h3>Reasons for Choosing US</h3>
          <p>
            There are eighteen attending physicians in our department. With the
            exception of junior faculties, all have academic appointment and
            several of them are associate or full professors. Each physician in
            our department have his own sub-specialty; the fields cover tumors
            of central nervous system, head and neck, lung, breast, esophagus,
            gastrointestinal tract.
          </p>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
      <div className="container">
        <h4>Available Doctors</h4>
        <br />
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <Link to="/doc-profile">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=1027"
                  />
                </Link>
              </div>
              <div className="team-content">
                <h4 className="name">Michele Miller</h4>
                <h4 className="title">Web Developer</h4>
                <br />
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="bi bi-facebook "
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="bi bi-twitter"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="bi bi-google"
                    aria-hidden="true"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="bi bi-linkedin"
                    aria-hidden="true"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocDetail;
