import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initaial = {
  user: {
    isLoggedIn: false,
    data: [],
  },
  appointments: {
    isBooked: false,
    data: [],
  },
  hospitals: {
    data: [],
  },
  doctor: {
    data: [],
  },
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer = combineReducers({});
export default createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
