import { SetStateAction, useState } from "react";
import StatsHistory from "../components/StatsHistory";

function Matches() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      setUpdated(message);
      setMessage("");
    }
  };

  function handleClick() {
    setUpdated(message);
    setMessage("");
  }

  return (
    <>
      <div className="container-match">
        <h1>Welcome {updated}</h1>
        <div className="submitOfName">
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
        <h2 className="homeWelcome">
          Here you have an overview of your home screen
        </h2>
        <div className="statsComponents">
          <StatsHistory />
        </div>
      </div>
    </>
  );
}

export default Matches;
