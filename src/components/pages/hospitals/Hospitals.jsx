import React, { useState, useEffect } from "react";
import "../../../styles/hospital.css";
import "../../../styles/search.css";
import { fetchHospitals } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { findHospitals } from "../../../store/actions";
import HospitalQuery from "./HospitalQuery";
import HospitalList from "./HospitalList";
import { Spinner } from "react-bootstrap";
import { BE_URL } from "../../../helpers/apiFetches";
function Hospital() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const hospitalQuery = useSelector((s) => s.hospitals.queryData);
  const check = hospitalQuery.length > 0;

  const searchHospital = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    dispatch(findHospitals(query));
    setIsLoading(false);
  };

  useEffect(() => {
    const getHospitals = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(`${BE_URL}/hospital/all`);

        if (resp) {
          const data = await resp.json();
          console.log("hospitals", data);
          dispatch(fetchHospitals(data));
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getHospitals();
  }, [dispatch]);
  return (
    <>
      <div className="bbbbootstrap">
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
              placeholder="Search Hospital by name, location, city.... "
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
          {isLoading && <Spinner animation="grow" varient="dark" />}
          {isError && (
            <p className="text-red">Something went wrong refresh the page</p>
          )}
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
