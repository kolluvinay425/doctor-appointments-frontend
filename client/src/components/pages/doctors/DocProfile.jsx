import React from "react";
import "../../../styles/docProfile.css";
function DocProfile() {
  return (
    <div class="profile-page">
      <div
        class="page-header header-filter"
        data-parallax="true"
        style={{
          backgroundImage:
            "http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png",
        }}
      ></div>
      <div class="main main-raised">
        <div class="profile-content">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="profile">
                  <div class="avatar">
                    <img
                      src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg"
                      alt="Circle Image"
                      class="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div class="name">
                    <h3 class="title">Christian Louboutin</h3>
                    <h6>Designer</h6>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-dribbble"
                    >
                      <i class="fa fa-dribbble"></i>
                    </a>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-twitter"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      class="btn btn-just-icon btn-link btn-pinterest"
                    >
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="description text-center">
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
              <div className="row">
                <div className="col-4">hiii</div>
                <div className="col-4">hiiiii</div>
                <div className="col-4">hiiiiiii</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocProfile;
