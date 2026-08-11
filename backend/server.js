const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("AI Study Planner API is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});