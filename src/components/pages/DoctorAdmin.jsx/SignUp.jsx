import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getHospitals } from "../../../helpers/doctorAuth";
import { BE_URL } from "../../../helpers/apiFetches";
function DoctorSignup() {
  const [hnames, setHnames] = useState([]);

  const [docRegister, setDocRigister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialization: "",
    clinicLocation: "",
    hospital: "",
    password: "",
  });
  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("daaaa", docRegister);
    try {
      const resp = await fetch(`${BE_URL}/doctor/register`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(docRegister),
      });
      if (resp) {
        const data = await resp.json();
        console.log(data);
        history.push("/doctor-login");
      }
    } catch (error) {}
  };
  useEffect(() => {
    const gethospitalNames = async (event) => {
      const data = await getHospitals();
      setHnames(data);
      console.log("hospitalsss", data);
    };
    gethospitalNames();
  }, []);
  return (
    <div>
      <>
        <h3 className="register-heading">Register Here</h3>
        <div className="row register-form">
          <div className="col-md-12">
            <form method="post">
              <div className="form-group">
                <input
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      firstName: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Your First Name *"
                  value={docRegister.firstName}
                  required="true"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      lastName: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Your Last Name *"
                  value={docRegister.lastName}
                  required="true"
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      email: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="email *"
                  value={docRegister.email}
                  required="true"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      specialization: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder=" specialization *"
                  value={docRegister.specialization}
                  required="true"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      clinicLocation: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="if u have clinic, enter the name *"
                  value={docRegister.clinicLocation}
                  required="false"
                />
              </div>
              <br />
              <div className="form-group">
                <select
                  className="form-control"
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      hospital: e.target.value,
                    })
                  }
                >
                  <option value="">Choose hospital</option>

                  {hnames &&
                    hnames.map((h, i) => (
                      <option value={h.name}>{h.name} </option>
                    ))}
                </select>
              </div>
              <br />
              <div className="form-group">
                <input
                  onChange={(e) =>
                    setDocRigister({
                      ...docRegister,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  value={docRegister.password}
                  required="true"
                />
              </div>
              <br />
              <div className="form-group">
                <input onClick={handleSubmit} type="button" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default DoctorSignup;
