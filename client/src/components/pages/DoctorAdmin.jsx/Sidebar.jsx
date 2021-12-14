import React, { useState } from "react";
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
  return (
    <div className="row">
      <div className="col-md-3">
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
        ;
      </div>
      <div className="col-md-9">
        <div className="container">
          {page && <h4>Create Appointments here</h4>}

          {page && <PostAppointmnet />}
          {pageTwo && <h4>Find Appointments here</h4>}
          <br />
          {pageTwo && <FindAppointment />}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
