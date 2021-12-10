import { initialState } from "..";
import { IS_DOC_LOGGEDIN, SET_DOCTOR_INFO } from "../actions";

export const doctorReducer = (state = initialState.doctor, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DOCTOR_INFO:
      return {
        ...state,
        data: payload,
      };
    case IS_DOC_LOGGEDIN:
      return {
        ...state,
        isDocLoggedIn: payload,
      };
    default:
      return state;
  }
};
