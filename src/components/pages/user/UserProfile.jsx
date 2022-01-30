import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../styles/userProfile.css";
import { setUserInfo } from "../../../store/actions";
function UserProfile() {
  const dispatch = useDispatch();
  const userProfile = useSelector((user) => user.user);
  const [fileName, setFileName] = useState(null);
  const updateImage = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("image", e.target.files[0]);
      console.log("image", e.target.files[0]);
      // const data = await API.post(`user/update-profile-image`, form, {
      //   headers: {
      //     "Content-type": "multipart/form-data",
      //   },
      // });
      const resp = await fetch(
        "http://localhost:3001/user/update-profile-image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: form,
        }
      );

      if (resp) {
        const data = await resp.json();
        dispatch(setUserInfo(data));
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
            updateImage(e);
          }}
          type="file"
          class="upload"
        />
        <span style={{ cursor: "pointer", maxWidth: "50px" }}>
          <i style={{ cursor: "pointer" }} className="bi bi-pencil-square ">
            Change
          </i>
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
