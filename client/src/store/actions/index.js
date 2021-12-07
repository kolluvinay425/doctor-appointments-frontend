export const USER_LOGIN = "USER_LOGIN";
export const IS_LOGGEDIN = "IS_LOGGEDIN";
export const SET_USER_INFO = "SET_USER_INFO";

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
export const isLoggedIn = (b) => ({
  type: IS_LOGGEDIN,
  payload: b,
});

export const setUserInfo = (userData) => {
  return {
    type: SET_USER_INFO,
    payload: userData,
  };
};
