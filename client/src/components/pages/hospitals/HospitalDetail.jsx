import React, { useEffect } from "react";
import "../../../styles/docDetail.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findHosDoctors } from "../../../store/actions";
import { hospitalDoctors } from "../../../helpers/doctorFetches";
function HospitLDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const hosDoctors = async () => {
    dispatch(findHosDoctors(id));
  };
  const hosDocs = useSelector((s) => s.doctor.hospitalDoctors);

  useEffect(() => {
    hosDoctors();
  }, []);
  return (
    <>
      <header style={{ padding: "px" }}>
        <div class="overlay">
          <h1>{id}</h1>
          <h3>Reasons for Choosing US</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum quis, odio veniam itaque ullam debitis qui magnam
            consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis
            qui magnam consequatur ab.
          </p>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
      <div className="container">
        <h4>Available Doctors</h4>
        <br />
        <div className="row">
          {hosDocs.map((doc) => (
            <div key={doc._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <Link to={`/doc-profile/${doc._id}`}>
                    <img className="img-fluid" src={doc.image} />
                  </Link>
                </div>
                <div className="team-content">
                  <h4 className="name">
                    <b>
                      {" "}
                      {doc.firstName} {doc.lastName}
                    </b>
                  </h4>
                  <h4 className="title">
                    {" "}
                    <b>{doc.specialization}</b>{" "}
                  </h4>
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
      </div>
    </>
  );
}

export default HospitLDetail;
