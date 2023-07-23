import { useState } from "react";
import "./App.css";
import LeftSideNav from "./components/LeftSideNav";

function App() {
  const [headerText, setHeaderText] = useState("Hello");

  const handleClick = (newText: string) => {
    setHeaderText(newText);
  };

  return (
    <>
      <LeftSideNav handleClick={handleClick} />
      <h1>{headerText}</h1>
    </>
  );
}

export default App;
