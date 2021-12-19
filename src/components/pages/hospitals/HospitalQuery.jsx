import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function HospitalQuery() {
  const hospitals = useSelector((s) => s.hospitals.queryData);
  return (
    <div className="row" style={{ height: "100vh" }}>
      {hospitals.map((hospital) => (
        <>
          <div key={hospital._id} className="col-md-3">
            <div className="profile-card-2">
              <Link to={`/hospital/${hospital.name}`}>
                <img
                  src={hospital.image}
                  className="img img-responsive"
                  alt="img"
                />
              </Link>

              <div className="profile-name"> {hospital.name} </div>
              <div className="profile-username">@{hospital.location}</div>
              <div className="profile-icons m-1">
                <input className="bi bi-facebook " type="button" />

                <br />
                <input className="bi bi-twitter" type="button" />

                <br />
                <input className="bi bi-linkedin" type="button" />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default HospitalQuery;
