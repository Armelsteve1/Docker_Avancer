import React, { useState, useEffect } from "react";

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/logs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La requête a échoué.");
        }
        return response.json();
      })
      .then((data) => {
        setLogs(data.logs);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des logs :", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>TP Docker Avancé</h1>
      <h2>Logs du serveur :</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
