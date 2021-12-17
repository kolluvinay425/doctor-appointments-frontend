import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";
import { hospitalReducer } from "./reducers/hospital";
import { doctorReducer } from "./reducers/doctor";
import { appointmentReducer } from "./reducers/appointment";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

export const initialState = {
  user: {
    isRegistered: false,
    isLoggedIn: false,
    data: [],
  },
  hospitals: {
    data: [],
    queryData: [],
  },
  appointments: {
    isLoggedIn: false,
    isModel: false,
    isAppointmentBooked: false,
    todayAppointments: [],
    queryAppointment: [],
  },
  doctor: {
    doctorQuery: [],
    isDocLoggedIn: false,
    data: [],
    DoctorInfo: [],
    queryData: [],
    hospitalDoctors: [],
    doctorDetail: {},
  },
};
const persistConfig = {
  key: "root",
  storage,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer = combineReducers({
  user: userReducer,
  hospitals: hospitalReducer,
  doctor: doctorReducer,
  appointment: appointmentReducer,
});
const persistedReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(configureStore);
export { configureStore, persistor };
