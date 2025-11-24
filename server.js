const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Route 1
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Route 2
app.get("/hello", (req, res) => {
  res.json({ message: "Hello Dost! Your backend is LIVE 🚀" });
});

// Route 3
app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

// Port from Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
