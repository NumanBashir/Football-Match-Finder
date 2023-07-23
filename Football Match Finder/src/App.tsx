import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LeftSideNav from "./components/LeftSideNav";
import Matches from "./pages/Matches";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <LeftSideNav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
