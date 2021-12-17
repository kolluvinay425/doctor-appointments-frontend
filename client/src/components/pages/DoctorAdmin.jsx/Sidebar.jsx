import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import PostAppointmnet from "./PostAppointmnet";
import FindAppointment from "./FindAppointments.jsx";
import "react-pro-sidebar/dist/css/styles.css";
import DocNavbar from "../../DocNavbar";
import { getDoctorInfo } from "../../../helpers/doctorAuth";
import { setDoctorInfo } from "../../../store/actions";
function Sidebar() {
  const [page, setPage] = useState(false);
  const [pageTwo, setPageTwo] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((s) => s.doctor);
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
    const getDocInfo = async () => {
      try {
        const data = getDoctorInfo();
        dispatch(setDoctorInfo(data));
      } catch (error) {
        console.log(error);
      }
    };
    //getDocInfo();
  }, []);
  return (
    <>
      <div className="row">
        <div style={{ backgroundColor: "none" }} className="col-md-3">
          <ProSidebar className="  text-white">
            <Menu iconShape="square">
              <MenuItem icon={"hello"}>
                <h4 onClick={unToggle}>Find Slots</h4>
              </MenuItem>
              <MenuItem icon={"hello"}>
                <h4 onClick={toggle}>Create slots</h4>
              </MenuItem>

              <SubMenu title="Components" icon={"hiii"}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
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
