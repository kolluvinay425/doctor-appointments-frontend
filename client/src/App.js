import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DocDetail from "./components/pages/doctors/DocDetail";
import Doctor from "./components/pages/doctors/Doctor";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/user/Login";
import CarouselSlide from "./components/CarouselSlide";
import Hospital from "./components/pages/hospitals/Hospitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <div style={{ backgroundColor: "rgb(216 222 233)" }}>
            <Route path="/" exact component={CarouselSlide} />
            <Route path="/authenticate" exact component={Login} />
            <Route path="/hospitals" exact component={Hospital} />
            <Route path="/doctors" exact component={Doctor} />
            <Route path="/doc-detail" exact component={DocDetail} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
