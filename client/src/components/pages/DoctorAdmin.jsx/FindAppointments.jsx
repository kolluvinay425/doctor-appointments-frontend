import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
function FindAppointments() {
  return (
    <div className="col-md-8">
      <div class="card p-3 py-4 col-md-9" style={{ minWidth: "300px" }}>
        <Form className="form-control">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FindAppointments;
