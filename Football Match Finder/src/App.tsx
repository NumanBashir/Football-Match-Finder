import { useState } from "react";
import "./App.css";
import LeftSideNav from "./components/LeftSideNav";

function App() {
  const [headerText, setHeaderText] = useState("Home");

  const handleClick = (newText: string) => {
    setHeaderText(newText);
  };

  return (
    <>
      <div className="container">
        <LeftSideNav handleClick={handleClick} />
        <h1 className="headerText">{headerText}</h1>
      </div>
    </>
  );
}

export default App;
