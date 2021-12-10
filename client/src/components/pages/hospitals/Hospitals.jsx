import React, { useState, useEffect } from "react";
import "../../../styles/hospital.css";
import "../../../styles/search.css";
import { Link } from "react-router-dom";
import { fetchHospitals } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function Hospital() {
  //const [hospitals, setHospitals] = useState([]);
  const dispatch = useDispatch();
  const hospitals = useSelector((s) => s.hospitals.data);
  const history = useHistory();
  const path = history.location.pathname;
  console.log("path!!", path);

  console.log("redux data", hospitals);
  const getHospitals = async () => {
    try {
      const resp = await fetch("http://localhost:3001/hospital/doctors");

      if (resp) {
        const data = await resp.json();
        //console.log("hospitals", data);
        //setHospitals(data);
        dispatch(fetchHospitals(data));
      }
    } catch (error) {}
  };
  useEffect(() => {
    getHospitals();
    console.log("hello");
  }, []);
  return (
    <>
      <div class="bbbootstrap">
        <div class="container">
          <form>
            <span
              role="status"
              aria-live="polite"
              class="ui-helper-hidden-accessible"
            ></span>
            <input
              type="text"
              id="Form_Search"
              value=""
              placeholder="Search for your best result in our community"
              role="searchbox"
              class="InputBox "
              autocomplete="off"
            />
            <input type="submit" id="Form_Go" class="Button" value="GO" />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h4 className="text-center">
            <strong>Hospitals near You</strong>
          </h4>
          <hr />
          {hospitals.map((hospital) => (
            <>
              <div className="col-md-3">
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
      </div>
    </>
  );
}

export default Hospital;
