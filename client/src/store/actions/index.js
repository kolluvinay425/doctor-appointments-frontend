export const USER_LOGIN = "USER_LOGIN";
export const IS_LOGGEDIN = "IS_LOGGEDIN";
export const SET_USER_INFO = "SET_USER_INFO";
export const FETCH_HOSPITALS = "FETCH_HOSPITALS";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const FIND_HOS_DOCTORS = "FIND_HOS_DOCTORS";
export const QUERY_HOSPITALS = "QUERY_HOSPITALS";
export const QUERY_DOCTORS = "QUERY_DOCTORS";
export const DOCTOR_DETAIL = "DOCTOR_DETAIL";
export const TODAY_APPOINTMENTS = "TODAY_APPOINTMENTS";
export const QUERY_APPOINTMENTS = "QUERY_APPOINTMENTS";

const url = "http://localhost:3001";

export const todayAppointments = (docId, todayDate) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        `${url}/appointment?docId=${docId}&date=${todayDate}`
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: TODAY_APPOINTMENTS,
          payload: data,
        });
        //console.log("TODAY_APPOINTMENTS", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const queryAppointments = (docId, date) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${url}/appointment?docId=${docId}&date=${date}`);
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: QUERY_APPOINTMENTS,
          payload: data,
        });
        //console.log("Query_APPOINTMENTS", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const findHospitals = (query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${url}/hospital?search=${query}`);
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: "QUERY_HOSPITALS",
          payload: data,
        });
        //console.log("QUERY_HOSPITALS", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const doctorDetail = (id) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${url}/doctor/${id}`);
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: DOCTOR_DETAIL,
          payload: data,
        });
        //console.log("QUERY_DOCTORS", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const findDoctors = (query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${url}/doctor/search/find?search=${query}`);
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: QUERY_DOCTORS,
          payload: data,
        });
        //console.log("QUERY_DOCTORS", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const findHosDoctors = (hosName) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${url}/doctor/search/dm/?hospital=${hosName}`);
      if (resp.ok) {
        const data = await resp.json();
        console.log("hospital doctors", data);
        dispatch({
          type: FIND_HOS_DOCTORS,
          payload: data,
        });
        //console.log("QUERY_DOCTORS", data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchDoctors = (data) => ({
  type: FETCH_DOCTORS,
  payload: data,
});
export const isLoggedIn = (b) => ({
  type: IS_LOGGEDIN,
  payload: b,
});
export const fetchHospitals = (data) => ({
  type: FETCH_HOSPITALS,
  payload: data,
});

export const setUserInfo = (userData) => {
  return {
    type: SET_USER_INFO,
    payload: userData,
  };
};
