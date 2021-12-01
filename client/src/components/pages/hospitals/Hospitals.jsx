import React from "react";
import "../../../styles/hospital.css";
import "../../../styles/search.css";
import { Link } from "react-router-dom";

function Hospital() {
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
          <div className="col-md-4">
            <h4 className="text-center">
              <strong>Hospitals near You</strong>
            </h4>
            <hr />
            <div className="profile-card-2">
              <Link to="/doc-detail">
                <img
                  src="https://5.imimg.com/data5/GX/WF/VP/ANDROID-44896696/product-jpeg-500x500.jpeg"
                  className="img img-responsive"
                />
              </Link>

              <div className="profile-name"> CHAMPION HOSPITALS</div>
              <div className="profile-username">@CHAMPIONHOSPITALS</div>
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
        </div>
      </div>
    </>
  );
}

export default Hospital;
