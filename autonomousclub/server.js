const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images, HTML)
app.use(express.static(path.join(__dirname)));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Html/abot", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "Html", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "Html", "contact.html"));
});

app.get("/events", (req, res) => {
  res.sendFile(path.join(__dirname, "Html", "events.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "Html", "projects.html"));
});

app.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "Html", "team.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

