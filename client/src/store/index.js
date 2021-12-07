import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

export const initialState = {
  user: {
    isLoggedIn: false,
    data: [],
  },
  // appointments: {
  //   isBooked: false,
  //   data: [],
  // },
  // hospitals: {
  //   data: [],
  // },
  // doctor: {
  //   data: [],
  // },
};
const persistConfig = {
  key: "root",
  storage,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(configureStore);
export { configureStore, persistor };
