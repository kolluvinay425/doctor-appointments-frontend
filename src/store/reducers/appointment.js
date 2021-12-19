import { initialState } from "..";
import {
  QUERY_APPOINTMENTS,
  IS_MODAL,
  IS_BOOKED,
  IS_APP_BOOKED,
  EMPTY_APPOINTMENTS,
} from "../actions";

export const appointmentReducer = (
  state = initialState.appointments,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case QUERY_APPOINTMENTS:
      return {
        ...state,
        queryAppointment: payload,
      };
    case EMPTY_APPOINTMENTS:
      return {
        ...state,
        queryAppointment: payload,
      };
    case IS_MODAL:
      return {
        ...state,
        isModel: payload,
      };
    case IS_BOOKED:
      return {
        ...state,
        isBooked: payload,
      };
    case IS_APP_BOOKED:
      return {
        ...state,
        isAppointmentBooked: payload,
      };

    default:
      return state;
  }
};
