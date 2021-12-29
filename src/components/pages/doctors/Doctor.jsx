import { React, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "../../../styles/searchTwo.css";
import "../../../styles/doctor.css";
import DoctorsQuery from "./DoctorsQuery";
import DoctorsList from "./DoctorsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, findDoctors } from "../../../store/actions";
import { BE_URL } from "../../../helpers/apiFetches";
function Doctor() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const doctorQuery = useSelector((s) => s.doctor.queryData);
  const check = doctorQuery.length > 0;

  const searchDoctor = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    dispatch(findDoctors(query));
    setIsLoading(false);
  };

  useEffect(() => {
    const getDoctors = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(`${BE_URL}/doctor`);
        if (resp) {
          const data = await resp.json();
          console.log("doctors-------->", data);
          dispatch(fetchDoctors(data));
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
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
          {isLoading && <Spinner animation="grow" varient="dark" />}
          {isError && (
            <p className="text-red">Something went wrong refresh the page</p>
          )}
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
