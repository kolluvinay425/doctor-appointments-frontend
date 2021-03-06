import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function HospitalQuery() {
  const hospitals = useSelector((s) => s.hospitals.queryData);
  return (
    <div className="row">
      {hospitals.map((hospital) => (
        <>
          <div key={hospital._id} className="col-md-3">
            <Link to={`/hospital/${hospital.name}`}>
              <div className="profile-card-2">
                <img
                  src={hospital.image}
                  className="img img-responsive"
                  alt="img"
                />

                <div className="profile-name"> {hospital.name} </div>
                <div className="profile-username">@{hospital.location}</div>
                {/* <div className="profile-icons m-1">
                  <a href="#">
                    <i className="bi bi-facebook "></i>
                  </a>
                  <br />
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <br />
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div> */}
              </div>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}

export default HospitalQuery;
