import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bookingAlert, isModel } from "../../../store/actions";
import API from "../../../helpers/apiFetches";
import { useHistory } from "react-router";
import { loginAlert } from "../../../store/actions";
function AppointmentModal({ appointmentId, reload }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isModelOpen = useSelector((s) => s.appointment.isModel);

  const handleClose = () => {
    dispatch(isModel(false));
  };
  const history = useHistory();

  const user = useSelector((s) => s.user.isLoggedIn);
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

        const { data } = await API.post(`/appointment/${appointmentId}`, {
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
          Modal heading
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleAppointmentPost}>Book</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppointmentModal;
