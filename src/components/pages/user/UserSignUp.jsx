import { React, useState } from "react";
import { BE_URL } from "../../../helpers/apiFetches";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { isUserRegistered } from "../../../store/actions";
function UserSignUp() {
  const [userRegister, setUserRigister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("daaaa", userRegister);
    try {
      const resp = await fetch(`${BE_URL}/user/register`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userRegister),
      });
      if (resp) {
        const data = await resp.json();
        console.log(data);
        history.push("/");

        dispatch(isUserRegistered(true));
      }
    } catch (error) {}
  };

  return (
    <div>
      <h3 class="register-heading">Register Here</h3>
      <div class="row register-form">
        <div class="col-md-12">
          <form method="post">
            <div class="form-group">
              <input
                style={{ minWidth: "170px" }}
                onChange={(e) =>
                  setUserRigister({
                    ...userRegister,
                    firstName: e.target.value,
                  })
                }
                type="text"
                class="form-control"
                placeholder="Your First Name *"
                value={userRegister.firstName}
                required="true"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                style={{ minWidth: "170px" }}
                type="text"
                onChange={(e) =>
                  setUserRigister({
                    ...userRegister,
                    lastName: e.target.value,
                  })
                }
                class="form-control"
                placeholder="Your Last Name *"
                value={userRegister.lastName}
                required="true"
              />
            </div>
            <br />

            <div class="form-group">
              <input
                style={{ minWidth: "170px" }}
                onChange={(e) =>
                  setUserRigister({
                    ...userRegister,
                    email: e.target.value,
                  })
                }
                type="email"
                class="form-control"
                placeholder="Your Email *"
                value={userRegister.email}
                required="true"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                style={{ minWidth: "170px" }}
                onChange={(e) =>
                  setUserRigister({
                    ...userRegister,
                    password: e.target.value,
                  })
                }
                type="password"
                class="form-control"
                placeholder="Your Password *"
                value={userRegister.password}
                required="true"
              />
            </div>
            <br />
            <div class="form-group">
              <input onClick={handleSubmit} type="button" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
