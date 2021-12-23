export const USER_LOGIN = "USER_LOGIN";
export const IS_LOGGEDIN = "IS_LOGGEDIN";
export const IS_BOOKED = "IS_BOOKED";
export const IS_APP_BOOKED = "IS_APP_BOOKED";
export const IS_DOC_LOGGEDIN = "IS_DOC_LOGGEDIN";
export const SET_USER_INFO = "SET_USER_INFO";
export const FETCH_HOSPITALS = "FETCH_HOSPITALS";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const FIND_HOS_DOCTORS = "FIND_HOS_DOCTORS";
export const QUERY_HOSPITALS = "QUERY_HOSPITALS";
export const QUERY_DOCTORS = "QUERY_DOCTORS";
export const DOCTOR_DETAIL = "DOCTOR_DETAIL";
export const SET_DOCTOR_INFO = "SET_DOCTOR_INFO";
export const GET_DOCTOR_QUERY_APPOINTMENTS = "GET_DOCTOR_QUERY_APPOINTMENTS";
export const EMPTY_APPOINTMENTS = "EMPTY_APPOINTMENTS";
// export const TODAY_APPOINTMENTS = "TODAY_APPOINTMENTS";
export const QUERY_APPOINTMENTS = "QUERY_APPOINTMENTS";
export const IS_MODAL = "IS_MODAL";
const url = process.env.REACT_APP_BACKEND_URL;

export const doctorSearchQuery = (data) => ({
  type: GET_DOCTOR_QUERY_APPOINTMENTS,
  payload: data,
});

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
export const isLoggedIn = (boolean) => ({
  type: IS_LOGGEDIN,
  payload: boolean,
});
export const loginAlert = (boolean) => ({
  type: IS_BOOKED,
  payload: boolean,
});
export const bookingAlert = (boolean) => ({
  type: IS_APP_BOOKED,
  payload: boolean,
});
export const isModel = (boolean) => ({
  type: IS_MODAL,
  payload: boolean,
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
export const isDocLoggedIn = (b) => ({
  type: IS_DOC_LOGGEDIN,
  payload: b,
});
export const setDoctorInfo = (docData) => {
  return {
    type: SET_DOCTOR_INFO,
    payload: docData,
  };
};
export const emptyAppointmentList = (appointment) => {
  console.log("i'm hereeeee------>");
  return {
    type: EMPTY_APPOINTMENTS,
    payload: appointment,
  };
};
