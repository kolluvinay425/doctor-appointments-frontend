import { React, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../../styles/docProfile.css";
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
  const docDetail = async () => {
    dispatch(doctorDetail(id));
  };
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
    docDetail();
    searchAppointments();
  }, []);
  const openSlots = () => {
    setSlots(!slots);
  };
  return (
    <div class="container mt-0">
      <br />
      <br />
      <br />

      <div class="row d-flex " style={{ height: "100vh" }}>
        <div class="col-md-5">
          <div class="card p-3 py-4">
            <div class="text-center">
              {" "}
              <img src={doc.image} width="100" class="rounded-circle" />{" "}
            </div>
            <div class="text-center mt-3">
              {" "}
              <span class="bg-secondary p-1 px-4 rounded text-white">
                {" "}
                <b>MBBS</b>{" "}
              </span>
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
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.{" "}
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
          <div class="col-md-7">
            <div class="card p-3 py-4">
              <div class="text-center">
                <input
                  onChange={(e) => setTodayDate(e.target.value)}
                  class="bg-secondary p-2 m-1 px-4 rounded text-white"
                  value={todayDate}
                  type="date"
                />
                {/* <Calendar
                  onChange={(e) => setTodayDate(e.target.value)}
                  value={todayDate}
                /> */}
                <input
                  onClick={searchAppointments}
                  type="button"
                  value="Go"
                  class="bg-secondary p-2 m-1 px-4 rounded text-white"
                />
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
                        className="col-sm-2 col-md-2 text-center"
                        style={{ backgroundColor: "#145da0" }}
                      >
                        {app.startTime}-{app.endTime}
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
