import { React, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { create } from "axios";
import API from "../../../helpers/doctorAuth";

import { queryAppointments } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { FaHtml5 } from "react-icons/fa";
function PostAppointmnet() {
  const today = new Date();
  const todayDatee =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [datee, setDate] = useState(todayDatee);
  const [startTimee, setStartTime] = useState("09:00");
  const [endTimee, setEndTime] = useState("10:00");
  const [isPosted, setIsPosted] = useState(false);
  const dispatch = useDispatch();
  const URL = create({ baseURL: "http://localhost:3001" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const date = datee;
      const startTime = startTimee;
      const endTime = endTimee;
      const { data } = await API.post(
        "/doctor/new",
        { date, startTime, endTime },
        { method: "POST" }
      );
      if (data) {
        console.log("POST APP", data);
        setIsPosted(true);
        setTimeout(() => {
          setIsPosted(false);
        }, 5000);
      } else {
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <br />

      <div className="row">
        <br />
        <div class="card p-3 py-4 col-md-4" style={{ minWidth: "300px" }}>
          <div class="text-center">
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Start Time:</Form.Label>

                <Form.Control
                  onChange={(e) => setStartTime(e.target.value)}
                  value={startTimee}
                  type="time"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                  onChange={(e) => setEndTime(e.target.value)}
                  value={endTimee}
                  type="time"
                  placeholder="Password"
                />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-7">
          {isPosted && (
            <Alert variant="success">appointment slot saved successfully</Alert>
          )}
        </div>
        {/* <div className="col-md-8">
          find Appointments
          <FindAppointments />
        </div> */}
      </div>
    </>
  );
}

export default PostAppointmnet;
