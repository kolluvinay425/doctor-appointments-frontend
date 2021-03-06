import React, { useState, useEffect } from "react";
import "../../../styles/docProfileTwo.css";
import { useSelector } from "react-redux";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import PostAppointmnet from "./PostAppointmnet";
import FindAppointment from "./FindAppointments.jsx";
import "react-pro-sidebar/dist/css/styles.css";
function Sidebar() {
  const [page, setPage] = useState(false);
  const [pageTwo, setPageTwo] = useState(false);

  const toggle = () => {
    setPage(true);
    setPageTwo(false);
  };

  const unToggle = () => {
    setPage(false);
    setPageTwo(true);
  };
  const loggedInDocName = useSelector((s) => s.doctor.DoctorInfo);

  useEffect(() => {
    // const getDocInfo = async () => {
    //   try {
    //     const data = getDoctorInfo();
    //     dispatch(setDoctorInfo(data));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    //getDocInfo();
  }, []);
  return (
    <>
      <div className="row">
        <div style={{ backgroundColor: "none" }} className="col-md-3">
          <ProSidebar className="  text-white">
            <Menu iconShape="square">
              <MenuItem>
                <h5 onClick={unToggle}>
                  <b>Find Slots</b>{" "}
                </h5>
              </MenuItem>
              <MenuItem>
                <h5 onClick={toggle}>
                  {" "}
                  <b>Create slots</b>{" "}
                </h5>
              </MenuItem>

              <SubMenu title="Bookings">
                <MenuItem>
                  {" "}
                  <h5>
                    <b>user bookings</b>
                  </h5>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <h5>
                    <b>Component 2</b>
                  </h5>{" "}
                </MenuItem>
              </SubMenu>
            </Menu>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </ProSidebar>
        </div>
        <div className="col-md-9">
          <div className="container">
            {page && (
              <>
                <br />
                <h5>
                  <b>
                    Hello doctor {loggedInDocName.firstName}, Create your
                    Appointment slots here
                  </b>
                </h5>
              </>
            )}

            {page && <PostAppointmnet />}
            {pageTwo && (
              <>
                <br />
                <h5>
                  <b> Find your Appointment slots and control them here.</b>
                </h5>
              </>
            )}
            <br />
            {pageTwo && <FindAppointment />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
