const express = require("express");
const app = express();

// Serve static files from "public" folder
app.use(express.static("public"));

// API example (optional)
app.get("/", (req, res) => {
    res.send("OK");
});



// MUST match Dockerfile exposed port
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0' () => {
  console.log(`Server running on port ${PORT}`);
});

