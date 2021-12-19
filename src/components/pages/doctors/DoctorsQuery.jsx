import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DoctorsQuery() {
  const doctorQuery = useSelector((s) => s.doctor.queryData);
  return (
    <div className="row" style={{ height: "100vh" }}>
      {doctorQuery?.map((doctor) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={doctor._id}>
          <div className="our-team">
            <div className="picture">
              <Link to={`/doc-profile/${doctor._id}`}>
                <img className="img-fluid" src={doctor.image} alt="img" />
              </Link>
            </div>
            <div className="team-content">
              <h4 className="name">
                <b>
                  {doctor.firstName} {doctor.lastName}
                </b>
              </h4>

              <h4 className="title">
                <b>{doctor.specialization}</b>
              </h4>

              <br />
            </div>
            <ul className="social">
              <li>
                <input
                  className="bi bi-facebook "
                  aria-hidden="true"
                  type="button"
                />
              </li>
              <li>
                <input
                  className="bi bi-twitter"
                  aria-hidden="true"
                  type="button"
                />
              </li>
              <li>
                <input
                  className="bi bi-google"
                  aria-hidden="true"
                  type="button"
                />
              </li>
              <li>
                <input
                  className="bi bi-linkedin"
                  aria-hidden="true"
                  type="button"
                />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorsQuery;
