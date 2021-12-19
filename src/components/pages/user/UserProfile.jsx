import React from "react";
import { useSelector } from "react-redux";
import "../../../styles/userProfile.css";

function UserProfile() {
  const userProfile = useSelector((user) => user.user);
  return (
    <div style={{ height: "100vh" }}>
      <br />
      <br />
      <br />
      <img
        className="squared mx-auto d-block"
        src={userProfile.data.image}
        style={{ maxWidth: "100px" }}
        alt=""
      />
      {/* <h4 className="mx-auto d-block text-center">
        <input type="file" />
        <i className="bi bi-pencil-square ">edit</i>
      </h4> */}
      <div class="fileUpload">
        <input type="file" class="upload" />
        <span>
          <i className="bi bi-pencil-square ">edit</i>
        </span>
      </div>
      <br />
      <h2 className="text-center">First name: {userProfile.data.firstName}</h2>
      <h2 className="text-center">First name: {userProfile.data.lastName}</h2>
      <h2 className="text-center">Email: {userProfile.data.email}</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default UserProfile;
