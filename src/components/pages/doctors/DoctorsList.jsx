import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function DoctorsList() {
  const doctorQuery = useSelector((s) => s.doctor.data);
  //console - log("doctorsList", data);
  console.log("redux doctor data", doctorQuery);
  return (
    <div className="row">
      <br />
      <br />
      <br />
      {doctorQuery?.map((doctor) => (
        <div key={doctor._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
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

export default DoctorsList;
