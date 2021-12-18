import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bookingAlert, isModel } from "../../../store/actions";
import API from "../../../helpers/apiFetches";
import { useHistory } from "react-router";
import { loginAlert } from "../../../store/actions";
import { emptyAppointmentList } from "../../../store/actions";
function AppointmentModal({ appointmentId, reload }) {
  const date = appointmentId.date.replace("T00:00:00.000Z", "");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isModelOpen = useSelector((s) => s.appointment.isModel);

  const handleClose = () => {
    dispatch(isModel(false));
  };
  const history = useHistory();

  const today = new Date();
  const todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const user = useSelector((s) => s.user.isLoggedIn);
  const doctor = useSelector((s) => s.doctor.doctorDetail);
  console.log("userrrr", user);
  const handleAppointmentPost = async () => {
    if (!user) {
      handleClose();
      dispatch(loginAlert(true));
      setTimeout(() => {
        dispatch(loginAlert(false));
      }, 5000);
      history.push("/authenticate");
      console.log("please log in to book an appointment");
    } else {
      try {
        setIsLoading(true);

        const { data } = await API.post(`/appointment/${appointmentId._id}`, {
          method: "POST",
        });
        if (data) {
          console.log("app post responce", data);
          setIsLoading(false);
          handleClose();
          dispatch(bookingAlert(true));
          setTimeout(() => {
            dispatch(bookingAlert(false));
          }, 5000);
          reload();
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <Modal
      show={isModelOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-3">
            <img style={{ width: "150px" }} src={doctor.image} alt="" />
          </div>
          <div className="col-md-9">
            <h4>
              Doctor Name:{" "}
              <i>
                {doctor.firstName} {doctor.lastName}
              </i>
            </h4>
            <h4>
              Booking Date: <i>{todayDate}</i>
            </h4>
            <h4>
              Appointment Date: <i>{date}</i>{" "}
            </h4>
            {/* <h4>Start Time: {appointmentId.startTime}</h4> */}
            <h4>
              end Time: <i>{appointmentId.endTime}</i>
            </h4>
            <h4>
              Hospital Name: <i>{doctor.hospital}</i>{" "}
            </h4>
            <h4>
              Location: <i>Via Varvariana 26</i>
            </h4>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "#145da0" }} onClick={handleClose}>
          Close
        </Button>
        <Button
          style={{ backgroundColor: "#145da0" }}
          onClick={handleAppointmentPost}
        >
          Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppointmentModal;
