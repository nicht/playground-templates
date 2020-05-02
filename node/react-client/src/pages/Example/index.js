import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import api from "../../services/api";
import "../../styles/App.css";

function Example({ location }) {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  async function loadAPI(id = 0) {
    try {
      const { data } = await api.get(`example/${id}`);

      setResponse(data.message);
    } catch (err) {
      console.log(err);
      setError("Falha ao trazer as informações da API.");
    }
  }

  useEffect(() => {
    loadAPI(location.state);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{response}</p>
        <p style={{ color: "red" }}>{error}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Example;
