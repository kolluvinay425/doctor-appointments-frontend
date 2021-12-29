import { SET_USER_INFO, IS_LOGGEDIN, IS_REGISTERED } from "../actions";

import { initialState } from "..";

export const userReducer = (state = initialState.user, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        data: payload,
      };
    case IS_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case IS_REGISTERED:
      return {
        ...state,
        isRegistered: payload,
      };
    default:
      return state;
  }
};
