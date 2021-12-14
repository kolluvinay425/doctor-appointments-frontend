import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DoctorAppointmentSlots from "./components/pages/appointment/DoctorAppointmentSlots";
import UserProfile from "./components/pages/user/UserProfile";
import DocProfile from "./components/pages/doctors/DocProfile";
import Doctor from "./components/pages/doctors/Doctor";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/user/Login";
import CarouselSlide from "./components/CarouselSlide";
import Hospital from "./components/pages/hospitals/Hospitals";
import HospitLDetail from "./components/pages/hospitals/HospitalDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, configureStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Sidebar from "./components/pages/DoctorAdmin.jsx/Sidebar";
function App() {
  return (
    <>
      <Provider store={configureStore}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <NavBar />
            <Switch>
              <div style={{ backgroundColor: "rgb(216 222 233)" }}>
                <Route path="/" exact component={CarouselSlide} />
                <Route path="/authenticate" exact component={Login} />
                <Route path="/hospitals" exact component={Hospital} />
                <Route path="/doctors" exact component={Doctor} />
                <Route path="/hospital/:id" exact component={HospitLDetail} />
                <Route path="/doc-profile/:id" exact component={DocProfile} />
                <Route path="/user-profile" exact component={UserProfile} />
                {/* Doctor admin routes */}
                <Route path="/doctor/admin" exact component={Sidebar} />

                <Route
                  path="/doctor-appointment/:idd"
                  exact
                  component={DoctorAppointmentSlots}
                />
              </div>
            </Switch>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
