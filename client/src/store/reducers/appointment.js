import { initialState } from "..";
import { TODAY_APPOINTMENTS, QUERY_APPOINTMENTS } from "../actions";

export const appointmentReducer = (
  state = initialState.appointments,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case TODAY_APPOINTMENTS:
      return {
        ...state,
        todayAppointments: payload,
      };
    case QUERY_APPOINTMENTS:
      return {
        ...state,
        queryAppointment: payload,
      };
    default:
      return state;
  }
};
