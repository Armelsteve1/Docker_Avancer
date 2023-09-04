const express = require("express");
const app = express();
const { connectToDatabase } = require("./db");

const PORT = process.env.PORT || 3000;

// Middleware pour gérer les données JSON
app.use(express.json());

connectToDatabase()
  .then(() => {
    // Démarrez le serveur une fois la connexion à la base de données établie
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données:", error);
  });

app.get("/users", async (req, res) => {
  try {
    const db = getDatabase();
    const users = await db.collection("users").find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur serveur");
});

module.exports = app;
