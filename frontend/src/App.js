import logo from "./logo.svg";
import "./App.css";
import createProfile from "./components/createProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<createProfile />} />
        </Routes>
      </Router>
      <createProfile />
    </div>
  );
}

export default App;
