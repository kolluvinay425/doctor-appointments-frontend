import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function HospitalList() {
  const hospitals = useSelector((s) => s.hospitals.data);
  //   const { id } = useParams();
  //   console.log("id", id);
  return (
    <div className="row">
      <h4 className="text-center">
        <strong>Hospitals near You</strong>
      </h4>
      <hr />
      {hospitals.map((hospital) => (
        <>
          <div key={hospital._id} className="col-md-3">
            <div className="profile-card-2">
              <Link to={`/hospital/${hospital.name}`}>
                <img src={hospital.image} className="img img-responsive" />
              </Link>

              <div className="profile-name"> {hospital.name}</div>
              <div className="profile-username">@{hospital.location}</div>
              <div className="profile-icons m-1">
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
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default HospitalList;
