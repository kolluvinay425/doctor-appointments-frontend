export const USER_LOGIN = "USER_LOGIN";
export const IS_LOGGEDIN = "IS_LOGGEDIN";
export const SET_USER_INFO = "SET_USER_INFO";
export const FETCH_HOSPITALS = "FETCH_HOSPITALS";
export const SET_DOCTOR_INFO = "SET_DOCTOR_INFO";
export const IS_DOC_LOGGEDIN = "IS_DOC_LOGGEDIN";

export const Currentuser = (data) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(process.env.URL, {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("accessToken"),
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

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
export const isLoggedIn = (b) => ({
  type: IS_LOGGEDIN,
  payload: b,
});
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
