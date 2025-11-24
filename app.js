const express = require("express");
const app = express();

// Serve static files from "public" folder
app.use(express.static("public"));

// API example (optional)
app.get("/", (req, res) => {
  res.send("Welcome to my Node App running on EKS 🚀");
});


// MUST match Dockerfile exposed port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

