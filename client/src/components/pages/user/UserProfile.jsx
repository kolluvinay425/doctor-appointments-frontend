import React from "react";
import { useSelector } from "react-redux";
function UserProfile() {
  const userProfile = useSelector((user) => user.user);
  return (
    <div>
      <br />
      <br />
      <br />
      <img
        className="squared mx-auto d-block"
        src={userProfile.data.image}
        style={{ maxWidth: "100px" }}
        alt=""
      />
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
