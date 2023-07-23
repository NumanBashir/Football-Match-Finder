import { useState } from "react";
import "./App.css";
import LeftSideNav from "./components/LeftSideNav";
import Matches from "./pages/Matches";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  const [headerText, setHeaderText] = useState("Home");

  const handleClick = (newText: string) => {
    setHeaderText(newText);
  };

  let component;
  switch (window.local.pathname) {
    case "/":
      component = <App />;
      break;
    case "/Matches":
      component = <Matches />;
      break;
    case "/Profile":
      component = <Profile />;
      break;
    case "/Settings":
      component = <Settings />;
      break;
  }

  return (
    <>
      <div className="container">
        <LeftSideNav handleClick={handleClick} />
        <h1 className="headerText">{headerText}</h1>
      </div>
      {component}
    </>
  );
}

export default App;
