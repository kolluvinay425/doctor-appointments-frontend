import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { queryAppointments } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
function PostAppointmnet() {
  const today = new Date();
  const todayDatee =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [date, setDate] = useState(todayDatee);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      dispatch(queryAppointments());
    } catch (error) {}
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
                  value={date}
                  type="date"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Start Time:</Form.Label>

                <Form.Control
                  onChange={(e) => setStartTime(e.target.value)}
                  value={startTime}
                  type="time"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                  onChange={(e) => setEndTime(e.target.value)}
                  value={endTime}
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
        {/* <div className="col-md-8">
          find Appointments
          <FindAppointments />
        </div> */}
      </div>
    </>
  );
}

export default PostAppointmnet;
