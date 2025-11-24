import express from "express";
const app = express();

// Funny home page
app.get("/", (req, res) => {
  res.send(`
    <div style="
      font-family: Arial; 
      text-align: center; 
      margin-top: 100px;
    ">
      <h1 style="color:#ff006f;">😂 Surprise! 😂</h1>
      <h2>Aye dost, tu seriously ye link open kar liya? 🤣</h2>
      <p style="font-size:20px;">Samiksha jee thoda smile kar de 😍</p>
      <h3>😎🔥 You are officially hacked ho chuki Friendship! 🔥😎</h3>
    </div>
  `);
});

// Another funny route
app.get("/msg", (req, res) => {
  res.send({
    message: "Tu bohot cute lagta hai link pe click karte hue 😆",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
