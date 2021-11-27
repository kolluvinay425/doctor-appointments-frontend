import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/user/Login";
import CarouselSlide from "./components/CarouselSlide";
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
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
