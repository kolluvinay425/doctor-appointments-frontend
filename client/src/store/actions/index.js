export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (url, email, password) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(url, {
        method: "POST",
        body: { email, password },
      });
    } catch (error) {}
  };
};
