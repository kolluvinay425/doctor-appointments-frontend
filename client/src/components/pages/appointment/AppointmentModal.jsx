import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { isModel } from "../../../store/actions";
import { postAppointment } from "../../../helpers/appointment";
import API from "../../../helpers/apiFetches";
function AppointmentModal({ appointmentId, reload }) {
  const dispatch = useDispatch();
  const isModelOpen = useSelector((s) => s.appointment.isModel);

  // const handleAppointmentPost = async () => {
  //   console.log("post appointment---->", appointmentId);

  //   const resp = await postAppointment(appointmentId);
  //   handleClose();
  // };
  const handleAppointmentPost = async () => {
    try {
      const { data } = await API.post(`/appointment/${appointmentId}`, {
        method: "POST",
      });
      if (data) {
        console.log("app post responce", data);
        handleClose();
        reload();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClose = () => {
    dispatch(isModel(false));
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
