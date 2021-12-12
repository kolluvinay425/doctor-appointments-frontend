import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../../styles/docProfile.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doctorDetail } from "../../../store/actions";
import { Link } from "react-router-dom";
import { todayAppointments } from "../../../store/actions";
function DocProfile() {
  const today = new Date();
  const date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  const [slots, setSlots] = useState(false);
  const [todayDate, setTodayDate] = useState(date);
  const { id } = useParams();
  const dispatch = useDispatch();
  const docDetail = async () => {
    dispatch(doctorDetail(id));
  };
  const doc = useSelector((s) => s.doctor.doctorDetail);
  const appointments = useSelector((s) => s.appointment.todayAppointments);

  console.log("today date", date);
  const fetchTodayAppointments = async () => {
    dispatch(todayAppointments(id, todayDate));
  };
  useEffect(() => {
    docDetail();
    fetchTodayAppointments();
  }, []);
  const openSlots = () => {
    setSlots(true);
  };
  return (
    <div class="container mt-0">
      <br />
      <br />
      <br />
      <div class="row d-flex ">
        <div class="col-md-4">
          <div class="card p-3 py-4">
            <div class="text-center">
              {" "}
              <img src={doc.image} width="100" class="rounded-circle" />{" "}
            </div>
            <div class="text-center mt-3">
              {" "}
              <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
              <h5 class="mt-2 mb-0">
                {doc.firstName} {doc.lastName}
              </h5>{" "}
              <span>{doc.specialization}</span>
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
                  class="btn btn-outline-primary px-4"
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
                />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        {slots ? (
          <div class="col-md-8">
            <div class="card p-3 py-4">
              <div class="text-center">
                {" "}
                {/* <img src={doc.image} width="100" class="rounded-circle" />{" "} */}
                <input
                  onChange={(e) => setTodayDate(e.target.value)}
                  class="bg-secondary p-2 m-1 px-4 rounded text-white"
                  value={todayDate}
                  type="date"
                />
                <input
                  onClick={fetchTodayAppointments}
                  type="button"
                  value="Go"
                  class="bg-secondary p-2 m-1 px-4 rounded text-white"
                />
              </div>
              <div class="row mt-4" style={{ marginLeft: "20px" }}>
                {appointments.map((app) => (
                  <Button className="col-md-2">
                    {app.startTime}-{app.endTime}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-8">
            <h1> click on book appointment to access calender</h1>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default DocProfile;
