import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "../../../styles/docProfile.css";
import API from "../../../helpers/doctorAuth";

import { doctorSearchQuery } from "../../../store/actions";
import SlotModal from "./SlotModal";
function FindAppointments() {
  const [currentAppointment, setCurrentAppointment] = useState({});
  const [showModal, setShowModal] = useState(false);
  const today = new Date();
  const todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [datee, setDate] = useState(todayDate);
  const dispatch = useDispatch();
  const data = useSelector((s) => s.doctor);
  const check = data.queryData.length > 0;
  const checkTwo = data.queryData.length === 0;
  console.log(data.DoctorInfo._id);
  const handleShow = (app) => {
    setShowModal(true);
    setCurrentAppointment(app);
  };
  const handleHide = () => {
    setShowModal(false);
  };
  const findApp = async (event) => {
    event.preventDefault();
    const date = datee;
    try {
      const dataa = await API.get(
        `/appointment/doctor?docId=${data.DoctorInfo._id}&date=${date}`
      );
      console.log("doctor's search results", dataa);
      if (dataa) {
        dispatch(doctorSearchQuery(dataa.data));
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="col-md-8">
      <div class="card p-3 py-4 col-md-9" style={{ minWidth: "300px" }}>
        <Form className="form-control">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              onChange={(e) => setDate(e.target.value)}
              value={datee}
              type="date"
              placeholder="Enter email"
            />
          </Form.Group>

          <Button
            className="pull-right"
            onClick={findApp}
            variant="primary"
            type="submit"
            style={{ minHeight: "40px", backgroundColor: "#484b4d" }}
          >
            Submit
          </Button>
        </Form>
        <div className="row mt-4" style={{ marginLeft: "20px" }}>
          {check &&
            data.queryData.map((appointment) => (
              <>
                <Button
                  onClick={() => handleShow(appointment)}
                  style={{
                    minHeight: "55px",
                    minWidth: "100px",
                    backgroundColor: "#464f54",
                  }}
                  className="col-md-2"
                  key={appointment._id}
                >
                  {appointment.startTime} To {appointment.endTime}
                </Button>
                {showModal && (
                  <SlotModal
                    appointment={currentAppointment}
                    hide={handleHide}
                    show={handleShow}
                  />
                )}
              </>
            ))}
        </div>
        {checkTwo && <p>no appointments found on this date</p>}
      </div>
    </div>
  );
}

export default FindAppointments;
