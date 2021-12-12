import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DoctorsQuery() {
  const doctorQuery = useSelector((s) => s.doctor.queryData);
  return (
    <div className="row">
      {doctorQuery.map((doctor) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={doctor._id}>
          <div className="our-team">
            <div className="picture">
              <Link to="/doc-profile">
                <img className="img-fluid" src={doctor.image} />
              </Link>
            </div>
            <div className="team-content">
              <h3 className="name">
                {doctor.firstName} {doctor.lastName}
              </h3>
              <h4 className="title">{doctor.specialization}</h4>
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
      ))}
    </div>
  );
}

export default DoctorsQuery;
