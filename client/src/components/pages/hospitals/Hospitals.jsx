import React, { useState, useEffect } from "react";
import "../../../styles/hospital.css";
import "../../../styles/search.css";
import { fetchHospitals } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { findHospitals } from "../../../store/actions";
import HospitalQuery from "./HospitalQuery";
import HospitalList from "./HospitalList";
function Hospital() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const hospitalQuery = useSelector((s) => s.hospitals.queryData);
  const check = hospitalQuery.length > 0;

  const searchHospital = async (event) => {
    event.preventDefault();

    dispatch(findHospitals(query));
  };

  const getHospitals = async () => {
    try {
      const resp = await fetch("http://localhost:3001/hospital/all");

      if (resp) {
        const data = await resp.json();
        console.log("hospitals", data);
        dispatch(fetchHospitals(data));
      }
    } catch (error) {}
  };
  useEffect(() => {
    getHospitals();
  }, []);
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
              onKeyUp={searchHospital}
              value={query}
              placeholder="Search for the best Hospital"
              className="InputBox "
            />
            <input
              type="submit"
              onClick={searchHospital}
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
              <HospitalQuery />
            </>
          ) : (
            <HospitalList />
          )}
        </div>
      </div>
    </>
  );
}

export default Hospital;
