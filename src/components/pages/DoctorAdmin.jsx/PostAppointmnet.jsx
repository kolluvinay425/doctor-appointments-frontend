import { React, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import API from "../../../helpers/doctorAuth";

function PostAppointmnet() {
  let todayy = new Date();
  let dd = String(todayy.getDate()).padStart(2, "0");
  let mm = String(todayy.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = todayy.getFullYear();

  todayy = yyyy + "-" + mm + "-" + dd;

  const [datee, setDate] = useState(todayy);
  const [startTimee, setStartTime] = useState("09:00");
  const [endTimee, setEndTime] = useState("10:00");
  const [isPosted, setIsPosted] = useState(false);

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
        <div class="card p-3 py-4 col-md-6" style={{ minWidth: "300px" }}>
          <div class="text-center">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>
                  {" "}
                  <b style={{ fontSize: "15px" }}>Date</b>{" "}
                </Form.Label>
                <Form.Control
                  onChange={(e) => setDate(e.target.value)}
                  value={datee}
                  type="date"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  {" "}
                  <b style={{ fontSize: "15px" }}>Start Time</b>{" "}
                </Form.Label>

                <Form.Control
                  onChange={(e) => setStartTime(e.target.value)}
                  value={startTimee}
                  type="time"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  {" "}
                  <b style={{ fontSize: "15px" }}>End Time</b>{" "}
                </Form.Label>

                <Form.Control
                  onChange={(e) => setEndTime(e.target.value)}
                  value={endTimee}
                  type="time"
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "#484b4d" }}
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-6">
          {isPosted && (
            <Alert variant="success">
              <b>appointment slot saved successfully</b>
            </Alert>
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
