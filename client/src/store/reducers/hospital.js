import { FETCH_HOSPITALS } from "../actions";
import { initialState } from "..";

export const hospitalReducer = (state = initialState.hospitals, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOSPITALS:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};
