import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Destinations from "./Components/Destinations/Destination";
import Footer from "./Components/Footer/Footer";
import Middle from "./Components/Middle/Middle";
import Portfolio from "./Components/Portfolio/Portfolio";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationCardDetails from "./Components/Destinations/DestinationCardDetails";
import FullPage from "./FullPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FullPage />} />
        </Routes>
        <Routes>
          <Route
            path="/destinations/:id"
            element={<DestinationCardDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
