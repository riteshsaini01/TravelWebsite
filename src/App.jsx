import "./App.scss";

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
