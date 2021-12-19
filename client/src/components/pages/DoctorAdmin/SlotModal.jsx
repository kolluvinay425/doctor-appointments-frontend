import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { FaLess } from "react-icons/fa";
import API from "../../../helpers/doctorAuth.js";
function SlotModal({ hide, show, appointment }) {
  const d = appointment.date.replace("T00:00:00.000Z", "");

  const [date, setDate] = useState(d);
  const [startTime, setStartTime] = useState(appointment.startTime);
  const [endTime, setEndTime] = useState(appointment.endTime);
  const [isUpdated, setIsUpdated] = useState(FaLess);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   const date = datee;
      //   const startTime = startTimee;
      //   const endTime = endTimee;
      const { data } = await API.put(
        `appointment/${appointment._id}`,
        { date, startTime, endTime },
        { method: "put" }
      );
      if (data) {
        console.log("Updated appointment", data);
        hide();
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
        }, 5000);
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      //   const date = datee;
      //   const startTime = startTimee;
      //   const endTime = endTimee;
      const { data } = await API.delete(`appointment/${appointment._id}`, {
        method: "delete",
      });
      if (data) {
        console.log("deleted appointment", data);
        hide();
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
        }, 5000);
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Modal show={show} onHide={hide}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Date"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                placeholder="Change appointment Date"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Start Time">
              <Form.Control
                type="text"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
                placeholder="Change appointment Start Time"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="End Time">
              <Form.Control
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
                type="text"
                placeholder="Change appointment Start Time"
              />
            </FloatingLabel>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete}>Delete</Button>

          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SlotModal;
