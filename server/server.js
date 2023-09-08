const express = require("express");
const app = express();
const { connectToDatabase, getLogs } = require("./db"); // Assurez-vous d'avoir une fonction getLogs dans votre fichier db.js

const PORT = process.env.PORT || 4000;

app.use(express.json());

const apiRouter = express.Router();

apiRouter.get("/users", async (req, res) => {
  try {
    const db = getDatabase();
    const users = await db.collection("users").find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur serveur");
  }
});

apiRouter.get("/connexion-reussie", (req, res) => {
  res.json({ message: "Connexion réussie à MongoDB Atlas" });
  console.log("Connexion réussie à MongoDB Atlas");
});

apiRouter.get("/logs", (req, res) => {
  const logs = getLogs();
  res.json({ logs });
});

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur serveur");
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données:", error);
  });

module.exports = app;
