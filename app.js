const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/", (req, res) => {
  res.send("Estoy en detalle");
});

app.get("/", (req, res) => {
  res.send("Estoy en cart");
});

app.get("/", (req, res) => {
  res.send("Estoy en registro");
});

app.get("/4", (req, res) => {
  res.send("Estoy en login");
});

app.listen(PORT, () => {
  console.log(`Working at http://localhost:3000 port:${PORT}`);
});