import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/userProfile.css";
import { BE_URL } from "../../../helpers/apiFetches";
import API from "../../../helpers/apiFetches";
// import axios from "axios";
function UserProfile() {
  const userProfile = useSelector((user) => user.user);
  const [fileName, setFileName] = useState(null);
  const updateImage = async (e) => {
    //setFileName(e.target.files[0]);
    //console.log("image", fileName);

    //const image = formData.get("image");
    // console.log("image55", form);

    try {
      const form = new FormData();
      form.append("image", fileName);
      console.log("image55", form);
      const { data } = await API.post(`user/update-profile-image`, {
        form,
      });

      if (data) {
        console.log("Image Updated", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <input
          onChange={(e) => {
            setFileName(e.target.files[0]);
          }}
          type="file"
          class="upload"
        />
        <span>
          <i className="bi bi-pencil-square ">edit</i>
          <button onClick={updateImage}>save</button>
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
