import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UserProfile from "./components/pages/user/UserProfile";
import DocProfile from "./components/pages/doctors/DocProfile";
import DocDetail from "./components/pages/doctors/DocDetail";
import Doctor from "./components/pages/doctors/Doctor";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/user/Login";
import CarouselSlide from "./components/CarouselSlide";
import Hospital from "./components/pages/hospitals/Hospitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, configureStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";
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
                <Route path="/doc-detail" exact component={DocDetail} />
                <Route path="/doc-profile" exact component={DocProfile} />
                <Route path="/user-profile" exact component={UserProfile} />
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
