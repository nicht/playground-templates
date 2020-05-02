import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "../../styles/App.css";
import "../../styles/button.css";

function Home({ history }) {
  const [requestId, changeRequestId] = useState("");

  const handleNavigate = () => {
    history.push(`/example`, requestId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          value={requestId}
          onChange={(event) => changeRequestId(event.target.value)}
        />
        <button className="example-btn" onClick={handleNavigate}>
          Go to Example
        </button>
      </header>
    </div>
  );
}

export default Home;
