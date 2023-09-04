import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/connexion-reussie")
      .then((response) => {
        console.log(response, "reponse serveur");
        if (!response.ok) {
          throw new Error("La requête a échoué.");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération du message de connexion :",
          error
        );
      });
  }, []);

  return (
    <div className="App">
      <h1>TP Docker Avancé </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
