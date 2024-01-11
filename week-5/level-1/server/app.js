require("dotenv").config();
const PORT = 3000;
const express = require("express");
const Card = require("./models/card");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(express.json());

app.get("/card", async (req, res) => {
  const allCards = await Card.find();
  res.status(200).json({ data: allCards });
});
app.get("/card/:id", async (req, res) => {
  const card = await Card.findById(req.params.id);
  res.status(200).json({ data: card });
});

app.post("/card", async (req, res) => {
  const card = new Card(req.body);
  await card.save();
  res.status(200).json({ message: "card created succesfully" });
});

app.put("/card/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCard = await Card.findByIdAndUpdate(id, { ...req.body });
  res.status(200).json({ message: "card updated succesfully" });
});
app.delete("/card/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCard = await Card.findByIdAndDelete(id);
  res.status(200).json({ message: "card deleted succesfully" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

app.listen(PORT);
