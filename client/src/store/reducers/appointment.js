import { initialState } from "..";
import { QUERY_APPOINTMENTS, IS_MODAL } from "../actions";

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
    case IS_MODAL:
      return {
        ...state,
        isModel: payload,
      };
    default:
      return state;
  }
};
