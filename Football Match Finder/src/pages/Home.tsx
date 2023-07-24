import { SetStateAction, useState } from "react";
import StatsHistory from "../components/StatsHistory";

function Matches() {
  const [myName, setMyName] = useState("My Name");
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setInputValue(event.target.value);
  }

  function handleClick() {
    setMyName(inputValue);
  }

  return (
    <>
      <div className="container-match">
        <h1>Welcome {myName}</h1>
        <div className="submitOfName">
          <input
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
        <StatsHistory />
      </div>
    </>
  );
}

export default Matches;
