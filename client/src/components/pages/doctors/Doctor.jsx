import React from "react";
import "../../../styles/doctor.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Doctor() {
  const history = useHistory();
  const path = history.location.pathname;
  console.log("path!!", path);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
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
                <h3 className="name">Michele Miller</h3>
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

export default Doctor;
