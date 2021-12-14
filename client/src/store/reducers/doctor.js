import {
  DOCTOR_DETAIL,
  FETCH_DOCTORS,
  FIND_HOS_DOCTORS,
  QUERY_DOCTORS,
  IS_DOC_LOGGEDIN,
  SET_DOCTOR_INFO,
} from "../actions";
import { initialState } from "..";

export const doctorReducer = (state = initialState.doctor, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DOCTORS:
      return {
        ...state,
        data: payload,
      };
    case QUERY_DOCTORS:
      return {
        ...state,
        queryData: payload,
      };
    case FIND_HOS_DOCTORS:
      return {
        ...state,
        hospitalDoctors: payload,
      };
    case DOCTOR_DETAIL:
      return {
        ...state,
        doctorDetail: payload,
      };
    case IS_DOC_LOGGEDIN:
      return {
        ...state,
        isDocLoggedIn: payload,
      };
    case SET_DOCTOR_INFO:
      return {
        ...state,
        DoctorInfo: payload,
      };
    default:
      return state;
  }
};
