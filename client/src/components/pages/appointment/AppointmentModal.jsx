import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { isModel } from "../../../store/actions";
import { postAppointment } from "../../../helpers/appointment";
import API from "../../../helpers/apiFetches";
function AppointmentModal({ appointmentId, reload }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const isModelOpen = useSelector((s) => s.appointment.isModel);
  const handleClose = () => {
    dispatch(isModel(false));
  };
  const user = useSelector((s) => s.user.isLoggedIn);
  const check = user === false;
  const handleAppointmentPost = async () => {
    if (check) {
      handleClose();
      console.log("please log in to book an appointment");
    } else
      try {
        setIsLoading(true);

        const { data } = await API.post(`/appointment/${appointmentId}`, {
          method: "POST",
        });
        if (data) {
          console.log("app post responce", data);
          setIsLoading(false);
          handleClose();
          reload();
        }
      } catch (error) {
        console.log("error", error);
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
