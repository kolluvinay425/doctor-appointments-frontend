import { React, useEffect, useState } from "react";
import "../../../styles/searchTwo.css";
import "../../../styles/doctor.css";
import DoctorsQuery from "./DoctorsQuery";
import DoctorsList from "./DoctorsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, findDoctors } from "../../../store/actions";
import { BE_URL } from "../../../helpers/apiFetches";
function Doctor() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const doctorQuery = useSelector((s) => s.doctor.queryData);
  const check = doctorQuery.length > 0;

  const searchDoctor = async (event) => {
    event.preventDefault();

    dispatch(findDoctors(query));
  };

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const resp = await fetch(`${BE_URL}/doctor`);
        if (resp) {
          const data = await resp.json();
          console.log("doctors-------->", data);
          dispatch(fetchDoctors(data));
        }
      } catch (error) {}
    };
    getDoctors();
  }, [dispatch]);
  return (
    <>
      <div className="bbbootstrap">
        <div className="container">
          <form>
            <span
              role="status"
              aria-live="polite"
              className="ui-helper-hidden-accessible"
            ></span>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchDoctor}
              value={query}
              placeholder="Search doctor by name ,specialization etc."
              className="InputBox "
            />
            <input
              type="submit"
              onClick={searchDoctor}
              className="Button"
              value="GO"
            />
          </form>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {check ? (
            <>
              <h5>search results</h5>
              <DoctorsQuery />
            </>
          ) : (
            <>
              <h5>Our profissional Doctors</h5>
              <br />
              <br />
              <DoctorsList />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Doctor;
