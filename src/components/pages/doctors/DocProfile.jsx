import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../../styles/docProfile.css";
import "../../../styles/carousel.css";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doctorDetail } from "../../../store/actions";
import { queryAppointments } from "../../../store/actions";
import AppointmentModal from "../appointment/AppointmentModal";
import { isModel } from "../../../store/actions";
function DocProfile() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(isModel(true));
  };
  const modalShow = useSelector((s) => s.appointment.isModel);
  console.log("isModelOpen", modalShow);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log("todaydate", date);
  const [slots, setSlots] = useState(false);
  const [todayDate, setTodayDate] = useState(date);
  const { id } = useParams();
  const appointments = useSelector((s) => s.appointment.queryAppointment);
  const emptyAppointments = appointments.length === 0;

  const doc = useSelector((s) => s.doctor.doctorDetail);
  // const fetchTodayAppointments = async () => {
  //   console.log("today's date", todayDate);

  //   dispatch(queryAppointments(id, todayDate));
  //   console.log("searching for today appointments", appointments);
  // };
  const searchAppointments = async () => {
    console.log("searching for appointment slots on", todayDate);

    dispatch(queryAppointments(id, todayDate));
    console.log("search results for appointments", appointments);
  };
  useEffect(() => {
    const docDetail = async () => {
      dispatch(doctorDetail(id));
    };
    docDetail();
    //searchAppointments();
  }, [dispatch, id]);
  const openSlots = () => {
    setSlots(!slots);
  };
  return (
    <div class="container mt-0">
      <br />
      <br />
      <br />

      <div class="row d-flex " style={{ height: "100vh" }}>
        <div class="col-md-6">
          <div class="card p-3 py-4">
            <div class="text-center">
              {" "}
              <img
                src={doc.image}
                width="100"
                class="rounded-circle"
                alt="img"
              />{" "}
            </div>
            <div class="text-center mt-3">
              {" "}
              {/* <span class="bg-secondary p-1 px-4 rounded text-white">
                {" "}
                <b>MBBS</b>{" "}
              </span> */}
              <h5 class="mt-2 mb-0">
                <b>
                  {doc.firstName} {doc.lastName}
                </b>
              </h5>{" "}
              <span>
                {" "}
                <b>{doc.specialization}</b>{" "}
              </span>
              <div class="px-4 mt-1">
                <p class="fonts">
                  There are eighteen attending physicians in our department.
                  With the exception of junior faculties, all have academic
                  appointment and several of them are associate or full
                  professors. Each physician in our department have his own
                  sub-specialty; the fields cover tumors of central nervous
                  system, head and neck, lung, breast, esophagus,
                  gastrointestinal tract.{" "}
                </p>
              </div>
              <ul class="social-list">
                <li>
                  <i className="bi bi-facebook "></i>
                </li>
                <li>
                  <i className="bi bi-google"></i>
                </li>
                <li>
                  <i className="bi bi-linkedin"></i>
                </li>
                <li>
                  <i className="bi bi-facebook "></i>
                </li>
                <li>
                  <i class="fa fa-google"></i>
                </li>
              </ul>
              <div class="buttons">
                {" "}
                <input
                  type="button"
                  value="Message"
                  class="btn btn-primary px-4 ms-3"
                  style={{ backgroundColor: "#145da0" }}
                />
                {/* <Link
                  //to={`/doctor-appointment/${id}`}
                  // to="/doctor"
                  // style={{ textDecoration: "none" }}
                > */}
                <input
                  onClick={openSlots}
                  type="button"
                  value="Book Appointment"
                  class="btn btn-primary px-4 ms-3"
                  style={{ backgroundColor: "#145da0" }}
                />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        {slots ? (
          <div class="col-md-6">
            <div class="card p-3 py-4">
              <div className="row mx-2 p-0">
                <div className="col-sm-7">
                  <input
                    onChange={(e) => setTodayDate(e.target.value)}
                    style={{ backgroundColor: "#144470", minWidth: "300px" }}
                    class=" p-2 mx-4 px-4 rounded text-white"
                    value={todayDate}
                    type="date"
                  />
                </div>
                <div className="col-sm-5">
                  <input
                    onClick={searchAppointments}
                    style={{ backgroundColor: "#144470", minWidth: "75px" }}
                    type="button"
                    value="Go"
                    class=" p-2  px-4 mx-4 rounded text-white"
                  />
                </div>

                <p className="mx-4" style={{ fontSize: "13px" }}>
                  Note: 24-Hours time format
                </p>

                {/* <Calendar
                  onChange={(e) => setTodayDate(e.target.value)}
                  value={todayDate}
                /> */}
              </div>

              <div class="row mt-4" style={{ marginLeft: "20px" }}>
                {emptyAppointments ? (
                  <h5>No Appointments Found</h5>
                ) : (
                  appointments.map((app) => (
                    <>
                      <Button
                        onClick={handleOpen}
                        key={app._id}
                        className="col-sm-2 col-md-2 text-center "
                        id="btn-1"
                        style={{
                          minHeight: "60px",
                          minWidth: "100px",
                          backgroundColor: "#195185",
                          borderRadius: "45%",
                          fontSize: "13px",
                          // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px)",
                          // box-shadow: "0px 8px 15px rgba(0, 0, 0, 0.1)"
                        }}
                      >
                        {app.startTime} - {app.endTime}
                      </Button>{" "}
                      {modalShow && (
                        <AppointmentModal
                          reload={searchAppointments}
                          appointmentId={app}
                        />
                      )}
                    </>
                  ))
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-8"></div>
        )}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default DocProfile;
